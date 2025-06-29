import { provideServerRendering, withRoutes } from '@angular/ssr';
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

/**
 * Server-side application configuration.
 * Extends the client configuration with server-specific providers for server-side rendering.
 */
const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes))],
};

/**
 * Merged application configuration combining client and server configurations.
 */
export const config = mergeApplicationConfig(appConfig, serverConfig);
