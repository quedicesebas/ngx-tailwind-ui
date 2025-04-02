import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/**
 * Bootstraps the server-side Angular application.
 * Initializes the application with the root component and server configuration.
 * This function is used by the server-side rendering process to generate HTML.
 */
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
