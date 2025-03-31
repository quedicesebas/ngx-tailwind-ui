import { Routes } from '@angular/router';
import { BottomSheetModalPageComponent } from './pages/bottom-sheet-modal/bottom-sheet-modal-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { PhonenumbersPageComponent } from './pages/phonenumbers-page.component';
import { ToastPageComponent } from './pages/toast-page.component';
export const routes: Routes = [
  {
    path: 'bottom-sheeet-modal',
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
