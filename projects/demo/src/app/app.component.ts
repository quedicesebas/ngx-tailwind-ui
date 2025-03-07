import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxBottomSheetModalComponent } from 'ngx-bottom-sheet-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxBottomSheetModalComponent],
  template: `
    <div class="container mx-auto max-w-screen-xl p-4">
      <router-outlet></router-outlet>
    </div>
    <ngx-bottom-sheet-modal></ngx-bottom-sheet-modal>
  `,
})
export class AppComponent {
  title = 'demo';
}
