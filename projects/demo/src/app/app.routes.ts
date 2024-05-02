import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { BottomSheetModalPageComponent } from './pages/ngx-bottom-sheet-modal/ngx-bottom-sheet-modal-page.component';
import { PhonenumbersPageComponent } from './pages/ngx-phonenumbers-page.component';
export const routes: Routes = [
  {
    path: 'ngx-bottom-sheeet-modal',
    component: BottomSheetModalPageComponent,
  },
  {
    path: 'ngx-phonenumbers',
    component: PhonenumbersPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
