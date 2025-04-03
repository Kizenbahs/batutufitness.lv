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

  const days = ['Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena', 'Svētdiena'];
  const locations = Object.keys(scheduleData);

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
    <div className="bg-gray-900 py-8">
      {/* Location Toggle */}
      <div className="flex justify-center mb-4">
        <div className="bg-gray-100 p-0.5 rounded-lg inline-flex">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeLocation === loc
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-2 max-w-6xl mx-auto px-2">
        {days.map((day) => (
          <div
            key={day}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              activeDay === day
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/50'
            }`}
            onClick={() => setActiveDay(day)}
          >
            <h3 className={`font-semibold text-sm mb-1 ${
              activeDay === day ? 'text-primary' : 'text-gray-900'
            }`}>
              {language === 'lv' ? day : day}
            </h3>
            <div className="space-y-1">
              {scheduleData[activeLocation][day].map((session, index) => (
                <div
                  key={index}
                  className={`p-1.5 rounded text-xs ${
                    selectedSessions.some(s => 
                      s.day === day && 
                      s.time === session.time && 
                      s.location === activeLocation
                    )
                      ? 'bg-primary text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSessionSelect(session);
                  }}
                >
                  <div className="font-medium">{session.time}</div>
                  <div className="text-[10px] opacity-90">{session.type}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Sessions */}
      {selectedSessions.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 shadow-lg z-50">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <span className="text-gray-900 text-sm font-medium">
                {language === 'lv' 
                  ? `${selectedSessions.length} izvēlēt${selectedSessions.length === 1 ? 's' : 'i'} treniņ${selectedSessions.length === 1 ? 's' : 'i'}`
                  : `${selectedSessions.length} session${selectedSessions.length === 1 ? '' : 's'} selected`}
              </span>
              <button
                onClick={handleSubmit}
                className="px-4 py-1.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all"
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