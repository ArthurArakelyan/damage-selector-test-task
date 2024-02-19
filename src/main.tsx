import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components';
import { IPluginOptions } from './types';
import 'react-toastify/dist/ReactToastify.css';

if (import.meta.env.MODE === 'development') {
  const renderElement = document.getElementById('root');

  if (renderElement) {
    createRoot(renderElement).render(
      <App options={{}} />
    );
  }
} else {
  window.DAMAGE_SELECTOR_API = {
    init: (options: IPluginOptions) => {
      const { selector } = options;

      if (selector) {
        const renderElement = document.querySelector<HTMLElement>(selector);

        if (renderElement) {
          createRoot(renderElement).render(
            <ErrorBoundary>
              <App options={options}/>
            </ErrorBoundary>
          );
        }
      }
    },
  };
}

declare global {
  interface Window {
    DAMAGE_SELECTOR_API: {
      init: (options: IPluginOptions) => void;
    };
  }
}
