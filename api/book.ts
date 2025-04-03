import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { SelectedSession } from '../src/types';

interface BookingRequest {
  sessions: SelectedSession[];
  contactDetails: {
    name: string;
    email: string;
    phone: string;
  };
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const booking: BookingRequest = request.body;

    // Here you would typically:
    // 1. Validate the data
    // 2. Store it in a database
    // 3. Send confirmation emails
    // 4. Update session availability

    // For now, we'll just log it and return success
    console.log('Received booking:', booking);

    // TODO: Add your email service integration here
    // Example: await sendConfirmationEmail(booking);

    return response.status(200).json({ 
      success: true,
      message: 'Booking received successfully'
    });
  } catch (error) {
    console.error('Booking error:', error);
    return response.status(500).json({ 
      error: 'Failed to process booking request' 
    });
  }
} 