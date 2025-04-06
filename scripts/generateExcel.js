import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the schedule data
const scheduleData = [
  // PIŅĶI - Pirmdiena
  {
    location: 'PIŅĶI',
    day: 'Pirmdiena',
    time: '19:00-20:30',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 10,
    currentParticipants: 0,
    isActive: true
  },
  {
    location: 'PIŅĶI',
    day: 'Pirmdiena',
    time: '20:30-21:30',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Dagnija',
    maxParticipants: 10,
    currentParticipants: 0,
    isActive: true
  },
  
  // PIŅĶI - Otrdiena
  {
    location: 'PIŅĶI',
    day: 'Otrdiena',
    time: '09:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 10,
    currentParticipants: 0,
    isActive: true
  },
  {
    location: 'PIŅĶI',
    day: 'Otrdiena',
    time: '15:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 10,
    currentParticipants: 0,
    isActive: true
  },
  {
    location: 'PIŅĶI',
    day: 'Otrdiena',
    time: '18:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 10,
    currentParticipants: 0,
    isActive: true
  },
  
  // PIŅĶI - Trešdiena
  {
    location: 'PIŅĶI',
    day: 'Trešdiena',
    time: '10:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 10,
    currentParticipants: 0,
    isActive: true
  },
  {
    location: 'PIŅĶI',
    day: 'Trešdiena',
    time: '14:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 10,
    currentParticipants: 0,
    isActive: true
  },
  {
    location: 'PIŅĶI',
    day: 'Trešdiena',
    time: '17:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 10,
    currentParticipants: 0,
    isActive: true
  },
  
  // RĪGA - Pirmdiena
  {
    location: 'RĪGA',
    day: 'Pirmdiena',
    time: '09:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 8,
    currentParticipants: 0,
    isActive: true
  },
  {
    location: 'RĪGA',
    day: 'Pirmdiena',
    time: '15:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 8,
    currentParticipants: 0,
    isActive: true
  },
  {
    location: 'RĪGA',
    day: 'Pirmdiena',
    time: '18:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 8,
    currentParticipants: 0,
    isActive: true
  },
  
  // RĪGA - Otrdiena
  {
    location: 'RĪGA',
    day: 'Otrdiena',
    time: '10:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 8,
    currentParticipants: 0,
    isActive: true
  },
  {
    location: 'RĪGA',
    day: 'Otrdiena',
    time: '16:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 8,
    currentParticipants: 0,
    isActive: true
  },
  {
    location: 'RĪGA',
    day: 'Otrdiena',
    time: '19:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 8,
    currentParticipants: 0,
    isActive: true
  },
  
  // RĪGA - Trešdiena
  {
    location: 'RĪGA',
    day: 'Trešdiena',
    time: '09:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 8,
    currentParticipants: 0,
    isActive: true
  },
  {
    location: 'RĪGA',
    day: 'Trešdiena',
    time: '15:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 8,
    currentParticipants: 0,
    isActive: true
  },
  {
    location: 'RĪGA',
    day: 'Trešdiena',
    time: '18:00',
    type: 'Grupu treniņš',
    duration: '60',
    trainer: 'Aleksandra K.',
    maxParticipants: 8,
    currentParticipants: 0,
    isActive: true
  }
];

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Convert the data to a worksheet
const worksheet = XLSX.utils.json_to_sheet(scheduleData);

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Schedule');

// Create the public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write the workbook to a file
const filePath = path.join(publicDir, 'schedule.xlsx');
XLSX.writeFile(workbook, filePath);

console.log(`Excel file created at: ${filePath}`); 