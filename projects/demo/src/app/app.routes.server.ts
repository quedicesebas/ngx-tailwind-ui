import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Server-side route configuration for server-side rendering.
 * Defines how routes should be rendered on the server, with all routes set to prerender mode
 * for optimal performance and SEO.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
