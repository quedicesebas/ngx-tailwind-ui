import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxBottomSheetModalComponent } from 'ngx-bottom-sheet-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NgxBottomSheetModalComponent],
})
export class AppComponent {
  title = 'demo';
}
