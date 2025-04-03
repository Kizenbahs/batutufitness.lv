import React, { useState } from 'react';

export const TestConnection = () => {
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');

  const testConnection = async () => {
    try {
      setStatus('Testing...');
      setError('');
      
      const response = await fetch('http://localhost:3002/test');
      const data = await response.json();
      
      setStatus(`Success: ${data.message}`);
      console.log('Server response:', data);
    } catch (error) {
      setError(`Error: ${error instanceof Error ? error.message : 'Failed to connect'}`);
      console.error('Connection error:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Server Connection Test</h2>
        
        <div className="space-y-4">
          <button
            onClick={testConnection}
            className="w-full py-3 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
          >
            Test Server Connection
          </button>

          {status && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg">
              {status}
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 