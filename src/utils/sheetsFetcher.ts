import { TrainingSession, ScheduleData } from '../data/scheduleData';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const SHEET_ID = import.meta.env.VITE_SHEET_ID;
const SHEET_RANGE = import.meta.env.VITE_SHEET_RANGE;

export async function fetchScheduleData(): Promise<ScheduleData> {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_RANGE}?key=${API_KEY}`
    );

    if (!response.ok) {
      console.error('Failed to fetch schedule data:', await response.text());
      throw new Error('Failed to fetch schedule data');
    }

    const data = await response.json();
    const rows = data.values as string[][];

    // Initialize schedule data structure
    const scheduleData: ScheduleData = {
      'PIŅĶI': {
        'Pirmdiena': [], 'Otrdiena': [], 'Trešdiena': [], 'Ceturtdiena': [],
        'Piektdiena': [], 'Sestdiena': [], 'Svētdiena': []
      },
      'RĪGA': {
        'Pirmdiena': [], 'Otrdiena': [], 'Trešdiena': [], 'Ceturtdiena': [],
        'Piektdiena': [], 'Sestdiena': [], 'Svētdiena': []
      }
    };

    // Skip header row and process data
    rows.slice(1).forEach(row => {
      // Only require the first 5 fields (location, day, time, type, duration)
      if (row.length < 5) return;
      
      const [location, day, time, type, duration, trainer = '', maxParticipants = '10'] = row;
      
      // Validate location and day
      if (!scheduleData[location] || !scheduleData[location][day]) {
        console.warn(`Skipping invalid row - Location: ${location}, Day: ${day}`);
        return;
      }

      const session: TrainingSession = {
        time,
        type,
        duration,
        trainer,
        maxParticipants: parseInt(maxParticipants, 10) || 10
      };

      scheduleData[location][day].push(session);
    });

    return scheduleData;
  } catch (error) {
    console.error('Error fetching schedule data:', error);
    // Return empty schedule data on error
    return {
      'PIŅĶI': {
        'Pirmdiena': [], 'Otrdiena': [], 'Trešdiena': [], 'Ceturtdiena': [],
        'Piektdiena': [], 'Sestdiena': [], 'Svētdiena': []
      },
      'RĪGA': {
        'Pirmdiena': [], 'Otrdiena': [], 'Trešdiena': [], 'Ceturtdiena': [],
        'Piektdiena': [], 'Sestdiena': [], 'Svētdiena': []
      }
    };
  }
}