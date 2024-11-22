import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxBottomSheetModalComponent } from 'ngx-bottom-sheet-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxBottomSheetModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo';
}
