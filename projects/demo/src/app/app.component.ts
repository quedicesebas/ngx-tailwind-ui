import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TauiBottomSheetModalComponent } from 'bottom-sheet-modal';
import { TauiToastComponent } from 'toast';

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
export class AppComponent {
  title = 'demo';
}
