import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Check if PostHog is already loaded
const isPostHogLoaded = typeof window !== 'undefined' && (window as any).posthog;

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  persistence: 'localStorage' as const,
  bootstrap: {
    distinctID: 'anonymous-user',
    isIdentifiedID: false
  },
  capture_pageview: true,
  capture_pageleave: true,
  autocapture: false,
  disable_session_recording: true,
  mask_all_text: true,
  mask_all_element_attributes: true,
  before_send: (event: any) => {
    const { $current_url, $host, $pathname, ...rest } = event.properties;
    return {
      ...event,
      properties: rest
    };
  },
  loaded: (ph: typeof posthog) => {
    if (process.env.NODE_ENV === 'development') {
      // Log PostHog events in development
      ph.debug(true);
    }
  }
};

// Wrap the App with PostHog if needed
const AppWithAnalytics = isPostHogLoaded ? (
  <App />
) : (
  <PostHogProvider 
    apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
    options={options}
  >
    <App />
  </PostHogProvider>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {AppWithAnalytics}
    <SpeedInsights />
  </React.StrictMode>
); 