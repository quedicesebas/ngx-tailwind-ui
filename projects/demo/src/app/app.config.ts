import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  provideClientHydration,
  withEventReplay,
  withNoIncrementalHydration
} from '@angular/platform-browser';
import { routes } from './app.routes';

/**
 * Application configuration for the client-side environment.
 * Configures routing, client hydration, and zone change detection.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
  ],
};
