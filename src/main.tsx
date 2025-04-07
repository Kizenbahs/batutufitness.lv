import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PostHogProvider } from 'posthog-js/react';

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  persistence: 'memory' as const, // This will avoid cookie-related issues
  bootstrap: {
    distinctID: 'anonymous-user',
    isIdentifiedID: false
  },
  capture_pageview: true,
  capture_pageleave: true,
  autocapture: true
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostHogProvider 
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>
); 