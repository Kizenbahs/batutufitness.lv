export interface TrainingSession {
  time: string;
  duration: string;
  type: string;
  trainer: string;
  maxParticipants: number;
  currentParticipants?: number;
}

export interface ScheduleData {
  [location: string]: {
    [day: string]: TrainingSession[];
  };
}

export const scheduleData: ScheduleData = {
  "RĪGA": {
    "Pirmdiena": [
      { 
        time: "09:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "15:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "18:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Otrdiena": [
      { 
        time: "10:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "16:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "19:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Trešdiena": [
      { 
        time: "09:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "15:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "18:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Ceturtdiena": [
      { 
        time: "10:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "16:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "19:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Piektdiena": [
      { 
        time: "09:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "15:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "18:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Sestdiena": [
      { 
        time: "10:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "13:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "16:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Svētdiena": [
      { 
        time: "10:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "13:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "16:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ]
  },
  "PIŅĶI": {
    "Pirmdiena": [
      { 
        time: "10:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "14:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "17:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Otrdiena": [
      { 
        time: "09:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "15:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "18:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Trešdiena": [
      { 
        time: "10:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "14:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "17:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Ceturtdiena": [
      { 
        time: "09:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "15:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "18:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Piektdiena": [
      { 
        time: "10:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "14:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "17:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Sestdiena": [
      { 
        time: "10:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "13:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "16:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ],
    "Svētdiena": [
      { 
        time: "10:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "13:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      },
      { 
        time: "16:00",
        type: "Grupu Treniņš",
        duration: "60",
        trainer: "Aleksandra K.",
        maxParticipants: 8
      }
    ]
  }
}; 