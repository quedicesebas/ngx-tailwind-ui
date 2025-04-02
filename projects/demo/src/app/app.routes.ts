import { Routes } from '@angular/router';
import { BottomSheetModalPageComponent } from './pages/bottom-sheet-modal/bottom-sheet-modal-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { PhonenumbersPageComponent } from './pages/phonenumbers-page.component';
import { ToastPageComponent } from './pages/toast-page.component';

/**
 * Application routes configuration.
 * Defines the navigation structure and component mapping for the demo application.
 */
export const routes: Routes = [
  {
    path: 'bottom-sheet-modal',
    component: BottomSheetModalPageComponent,
  },
  {
    path: 'toast',
    component: ToastPageComponent,
  },
  {
    path: 'phonenumbers',
    component: PhonenumbersPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
