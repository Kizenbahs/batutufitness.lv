import { useState } from 'react';
import { scheduleData } from '../data/scheduleData';
import { BookingForm } from './BookingForm';
import { SelectedSession } from '../types';
import type { TrainingSession } from '../data/scheduleData';

interface ScheduleProps {
  language: 'lv' | 'en';
}

export const Schedule: React.FC<ScheduleProps> = ({ language }) => {
  const [activeLocation, setActiveLocation] = useState<string>(Object.keys(scheduleData)[0]);
  const [activeDay, setActiveDay] = useState<string>(Object.keys(scheduleData[activeLocation])[0]);
  const [selectedSessions, setSelectedSessions] = useState<SelectedSession[]>([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const days = ['Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena', 'Svētdiena'];
  const locations = Object.keys(scheduleData);

  const handleDaySelect = (day: string) => {
    setActiveDay(day);
    setIsDropdownOpen(false);
  };

  const handleSessionSelect = (session: TrainingSession) => {
    const newSession: SelectedSession = {
      id: `${session.time}-${activeDay}-${activeLocation}`,
      time: session.time,
      type: session.type,
      duration: session.duration,
      trainer: session.trainer,
      maxParticipants: session.maxParticipants,
      day: activeDay,
      location: activeLocation,
      selected: true
    };

    setSelectedSessions(prev => {
      const exists = prev.find(s => s.id === newSession.id);
      if (exists) {
        return prev.filter(s => s.id !== newSession.id);
      }
      return [...prev, newSession];
    });
  };

  const handleSubmit = () => {
    if (selectedSessions.length > 0) {
      setShowBookingForm(true);
    }
  };

  const handleBookingSuccess = () => {
    setSelectedSessions([]);
    setShowBookingForm(false);
  };

  const handleRemoveSession = (session: SelectedSession) => {
    setSelectedSessions(prev => prev.filter(s => s.id !== session.id));
  };

  return (
    <div className="w-full bg-black relative py-4 sm:py-8 overflow-hidden">
      {/* Desktop Gradient Pattern - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-gray-800/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      </div>
      
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-4 relative z-10">
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
              <div className="absolute z-50 w-full mt-2 bg-gray-900 rounded-xl shadow-xl">
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
          {scheduleData[activeLocation][activeDay].map((session, index) => {
            const isSelected = selectedSessions.some(s => 
              s.day === activeDay && 
              s.time === session.time && 
              s.location === activeLocation
            );
            
            return (
              <div
                key={index}
                onClick={() => handleSessionSelect(session)}
                className={`group cursor-pointer rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  isSelected
                    ? 'bg-primary shadow-lg'
                    : 'bg-gray-900/90 backdrop-blur-sm hover:bg-gray-800'
                }`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-lg font-bold ${
                      isSelected ? 'text-white' : 'text-white'
                    }`}>
                      {session.time}
                    </span>
                    <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-primary/20 text-primary'
                    }`}>
                      {session.duration}
                    </span>
                  </div>
                  <div className={`text-base font-semibold mb-2 ${
                    isSelected ? 'text-white' : 'text-primary'
                  }`}>
                    {session.type}
                  </div>
                  <div className={`text-sm font-medium ${
                    isSelected ? 'text-white/90' : 'text-gray-300'
                  }`}>
                    {session.trainer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Sessions Bar */}
      {selectedSessions.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 shadow-2xl z-50">
          <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white font-semibold">
                  {language === 'lv' 
                    ? `${selectedSessions.length} izvēlēt${selectedSessions.length === 1 ? 's' : 'i'} treniņ${selectedSessions.length === 1 ? 's' : 'i'}`
                    : `${selectedSessions.length} session${selectedSessions.length === 1 ? '' : 's'} selected`}
                </span>
              </div>
              <button
                onClick={handleSubmit}
                className="px-8 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {language === 'lv' ? 'Pieteikties' : 'Book Now'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm
          selectedSessions={selectedSessions}
          onClose={() => setShowBookingForm(false)}
          onSuccess={handleBookingSuccess}
          onRemoveSession={handleRemoveSession}
          language={language}
        />
      )}
    </div>
  );
}; 