import React, { useState } from 'react';

export const EmailTest: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const testEmail = async () => {
    setStatus('loading');
    try {
      const response = await fetch('http://localhost:3001/api/test-email');
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setMessage('Test email sent successfully! Check your inbox.');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to send test email');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to connect to the server');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Email Configuration Test</h2>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            Click the button below to test the email configuration.
            A test email will be sent to: girts.kizenbahs@gmail.com
          </p>

          <button
            onClick={testEmail}
            disabled={status === 'loading'}
            className={`
              w-full py-3 px-4 rounded-lg
              ${status === 'loading' ? 'bg-gray-400' : 'bg-primary hover:bg-primary/90'}
              text-white transition-colors
              flex items-center justify-center space-x-2
            `}
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              'Send Test Email'
            )}
          </button>

          {message && (
            <div className={`
              p-4 rounded-lg
              ${status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
            `}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 