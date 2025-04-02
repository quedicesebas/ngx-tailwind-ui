import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TauiBottomSheetModalComponent } from 'bottom-sheet-modal';
import { TauiToastComponent } from 'toast';

/**
 * Root component of the demo application.
 * Provides the main layout and includes the bottom sheet modal and toast components.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TauiBottomSheetModalComponent, TauiToastComponent],
  template: `
    <div class="container mx-auto max-w-screen-xl p-4">
      <router-outlet></router-outlet>
    </div>
    <taui-bottom-sheet-modal />
    <taui-toast />
  `,
})
export class AppComponent {}
