import { Component, inject } from '@angular/core';
import { NgxBottomSheetModalService } from 'ngx-bottom-sheet-modal';
import { BottomSheetModalContentComponent } from '../bottom-sheet-modal-content/bottom-sheet-modal-content.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  // Services
  private readonly ngxBottomSheetModalService = inject(
    NgxBottomSheetModalService
  );

  // State
  opened: boolean = false;

  openBottomSheetModal() {
    this.ngxBottomSheetModalService.openBottomSheet({
      contentComponent: BottomSheetModalContentComponent,
      inputs: {
        title: 'My modal',
        description: 'A simple bottom sheet modal :)',
      },
      onClose: () => {
        this.opened = false;
      },
      showCloseButton: true,
      closeButtonClass: 'text-indigo-400',
    });
    this.opened = true;
  }
}
