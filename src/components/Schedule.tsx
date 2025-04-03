import React, { useState } from 'react';
import { scheduleData, TrainingSession } from '../data/scheduleData';
import { BookingForm } from './BookingForm';

interface SelectedSession extends TrainingSession {
  day: string;
  location: string;
}

export const Schedule: React.FC<{ language: string }> = ({ language }) => {
  const [activeLocation, setActiveLocation] = useState<string>(Object.keys(scheduleData)[0]);
  const [activeDay, setActiveDay] = useState<string>(Object.keys(scheduleData[activeLocation])[0]);
  const [selectedSessions, setSelectedSessions] = useState<SelectedSession[]>([]);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const days = ['Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena', 'Svētdiena'];
  const locations = Object.keys(scheduleData);

  const handleSessionSelect = (session: TrainingSession, day: string) => {
    const sessionWithDetails = {
      ...session,
      day: day,
      location: activeLocation
    };

    const isAlreadySelected = selectedSessions.some(
      s => s.day === day && 
          s.time === session.time && 
          s.location === activeLocation
    );

    if (isAlreadySelected) {
      setSelectedSessions(selectedSessions.filter(
        s => !(s.day === day && 
              s.time === session.time && 
              s.location === activeLocation)
      ));
    } else {
      setSelectedSessions([...selectedSessions, sessionWithDetails]);
    }
  };

  const handleBookingSuccess = () => {
    setSelectedSessions([]);
    setShowBookingForm(false);
  };

  return (
    <div id="schedule" className="space-y-8">
      {/* Location Toggle */}
      <div className="flex justify-center">
        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
        {days.map((day) => (
          <div
            key={day}
            className={`p-4 rounded-lg border transition-all cursor-pointer ${
              activeDay === day
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/50'
            }`}
            onClick={() => setActiveDay(day)}
          >
            <h3 className={`font-semibold mb-2 ${
              activeDay === day ? 'text-primary' : 'text-gray-900'
            }`}>
              {language === 'lv' ? day : day}
            </h3>
            <div className="space-y-2">
              {scheduleData[activeLocation][day].map((session, index) => (
                <div
                  key={index}
                  className={`p-2 rounded text-sm ${
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
                    handleSessionSelect(session, day);
                  }}
                >
                  <div className="font-medium">{session.time}</div>
                  <div className="text-xs opacity-90">{session.type}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Sessions */}
      {selectedSessions.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <span className="text-gray-900 font-medium">
                {language === 'lv' 
                  ? `${selectedSessions.length} izvēlēt${selectedSessions.length === 1 ? 's' : 'i'} treniņ${selectedSessions.length === 1 ? 's' : 'i'}`
                  : `${selectedSessions.length} session${selectedSessions.length === 1 ? '' : 's'} selected`}
              </span>
              <button
                onClick={() => setShowBookingForm(true)}
                className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all"
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
          onSuccess={() => {
            setShowBookingForm(false);
            setSelectedSessions([]);
          }}
          language={language}
          onRemoveSession={(session) => {
            setSelectedSessions(prev => 
              prev.filter(s => 
                !(s.day === session.day && 
                  s.time === session.time && 
                  s.location === session.location)
              )
            );
          }}
        />
      )}
    </div>
  );
}; 