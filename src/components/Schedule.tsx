import { useState, useEffect } from 'react';
import type { ScheduleData } from '../data/scheduleData';
import { useLanguage } from '../context/LanguageContext';
import { fetchScheduleData } from '../utils/sheetsFetcher';

export const Schedule: React.FC = () => {
  const { language } = useLanguage();
  const [scheduleData, setScheduleData] = useState<ScheduleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeLocation, setActiveLocation] = useState<string>("PIŅĶI");
  const [activeDay, setActiveDay] = useState<string>("Pirmdiena");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const days = ['Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena', 'Svētdiena'];
  const locations = ['PIŅĶI', 'RĪGA'];

  useEffect(() => {
    const loadScheduleData = async () => {
      try {
        setLoading(true);
        const data = await fetchScheduleData();
        if (data) {
          setScheduleData(data);
          setError(null);
        } else {
          setError(language === 'lv' ? 'Neizdevās ielādēt grafiku' : 'Failed to load schedule');
        }
      } catch (err) {
        setError(language === 'lv' ? 'Kļūda ielādējot grafiku' : 'Error loading schedule');
      } finally {
        setLoading(false);
      }
    };

    loadScheduleData();
  }, [language]);

  const handleDaySelect = (day: string) => {
    setActiveDay(day);
    setIsDropdownOpen(false);
  };

  if (loading) {
    return (
      <div className="w-full py-16 sm:py-24" id="schedule">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-gray-400">{language === 'lv' ? 'Ielādē grafiku...' : 'Loading schedule...'}</p>
        </div>
      </div>
    );
  }

  if (error || !scheduleData) {
    return (
      <div className="w-full py-16 sm:py-24" id="schedule">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            {language === 'lv' ? 'Mēģināt vēlreiz' : 'Try again'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full relative py-16 sm:py-24 bg-transparent" id="schedule">
      {/* Desktop Gradient Pattern - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-gray-800/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      </div>
      
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {language === 'lv' ? 'Nodarbību grafiks' : 'Class schedule'}
          </h2>
          <p className="text-gray-400">
            {language === 'lv' 
              ? 'Sporto sev izdevīgā laikā un vietā' 
              : 'Exercise at your convenient time and place'}
          </p>
        </div>

        {/* Main Content Container */}
        <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-800/50">
          {/* Location Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900/90 backdrop-blur-sm p-1.5 rounded-2xl inline-flex shadow-xl">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setActiveLocation(loc)}
                  className={`px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeLocation === loc
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* Days Selection - Mobile Dropdown */}
          <div className="md:hidden mb-8">
            <div className="relative w-full max-w-xs mx-auto">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-2.5 bg-gray-900 text-white rounded-xl flex items-center justify-between font-semibold"
              >
                <span>{activeDay}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-[60] w-full mt-2 bg-gray-900 rounded-xl shadow-xl border border-gray-800">
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => handleDaySelect(day)}
                      className={`w-full px-4 py-2.5 text-left transition-colors ${
                        activeDay === day
                          ? 'bg-primary text-white'
                          : 'text-gray-300 hover:bg-gray-800'
                      } ${day === days[0] ? 'rounded-t-xl' : ''} ${
                        day === days[days.length - 1] ? 'rounded-b-xl' : ''
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Days Selection - Desktop Buttons */}
          <div className="hidden md:block mb-8 overflow-x-auto hide-scrollbar">
            <div className="flex space-x-2 pb-2 justify-center min-w-max mx-auto">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                    activeDay === day
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-gray-900/90 backdrop-blur-sm text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Sessions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {scheduleData[activeLocation][activeDay].map((session, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-white">
                      {session.time}
                    </span>
                    <span className="text-sm px-3 py-1 rounded-full font-medium inline-flex items-center gap-1.5 bg-primary/20 text-primary">
                      {session.duration} min
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    </span>
                  </div>
                  <div className="text-base font-semibold mb-2 text-primary">
                    {session.type}
                  </div>
                  <div className="text-sm text-gray-400">
                    {session.trainer && `${language === 'lv' ? 'Treneris' : 'Trainer'}: ${session.trainer}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
