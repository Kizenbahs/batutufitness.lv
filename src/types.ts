export interface TrainingSession {
  id: string;
  day: string;
  time: string;
  type: string;
  duration: string;
  trainer: string;
  location: string;
  maxParticipants: number;
}

export interface SelectedSession extends TrainingSession {
  selected: boolean;
}

export interface ScheduleData {
  [location: string]: {
    [day: string]: TrainingSession[];
  };
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
}

export interface BookingRequest {
  sessions: SelectedSession[];
  contactDetails: BookingFormData;
} 