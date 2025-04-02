import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

/**
 * Bootstraps the client-side Angular application.
 * Initializes the application with the root component and client configuration.
 * Any errors during bootstrap will be logged to the console.
 */
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
