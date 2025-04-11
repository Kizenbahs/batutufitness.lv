import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PostHogProvider } from 'posthog-js/react';
import posthog from 'posthog-js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

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

const router = createBrowserRouter(routes);

// Wrap the RouterProvider with PostHog if needed
const AppWithAnalytics = isPostHogLoaded ? (
  <RouterProvider router={router} />
) : (
  <PostHogProvider 
    apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
    options={options}
  >
    <RouterProvider router={router} />
  </PostHogProvider>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {AppWithAnalytics}
  </React.StrictMode>
); 