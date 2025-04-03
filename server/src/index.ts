import express, { Request, Response, RequestHandler } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { SMTPMonitor } from './smtpMonitor';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

// Enable CORS for all routes
app.use(cors({
  origin: true, // Allow all origins during development
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Add pre-flight OPTIONS handler
app.options('*', cors());

app.use(express.json());

const smtpMonitor = new SMTPMonitor();

// Add a basic route to test connection
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Server is running!' });
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// SMTP status endpoint
app.get('/api/smtp-status', (req: Request, res: Response) => {
  const status = smtpMonitor.getStatus();
  res.json(status);
});

// Test email endpoint
app.post('/api/test-email', async (req: Request, res: Response) => {
  try {
    await smtpMonitor.sendEmail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'Test Email',
      text: 'This is a test email from the SMTP monitor.',
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Test email error:', error);
    res.status(500).json({ error: 'Failed to send test email' });
  }
});

// Booking endpoint
app.post('/api/book', async (req: Request, res: Response) => {
  try {
    const { sessions, contactDetails } = req.body;

    if (!sessions || !contactDetails) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { name, email, phone } = contactDetails;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing contact details' });
    }

    // Format sessions for email
    const formattedSessions = sessions.map((session: any) => 
      `${session.day} - ${session.time} - ${session.type} - ${session.location}`
    ).join('\n');

    // Send email to admin
    await smtpMonitor.sendEmail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Training Booking',
      text: `
New booking received:

Contact Details:
Name: ${name}
Email: ${email}
Phone: ${phone}

Selected Sessions:
${formattedSessions}
      `,
    });

    // Send confirmation email to user
    await smtpMonitor.sendEmail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Training Booking Confirmation',
      text: `
Dear ${name},

Thank you for booking training sessions with us. Here are your selected sessions:

${formattedSessions}

We will contact you shortly to confirm the details.

Best regards,
Batutu Fitness Team
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({ error: 'Failed to process booking' });
  }
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Cleaning up...');
  smtpMonitor.cleanup();
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Cleaning up...');
  smtpMonitor.cleanup();
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
}); 