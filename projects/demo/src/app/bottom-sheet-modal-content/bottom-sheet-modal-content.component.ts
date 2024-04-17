import { Component, Input, inject } from '@angular/core';
import { NgxBottomSheetModalService } from 'ngx-bottom-sheet-modal';

@Component({
  selector: 'app-bottom-sheet-modal-content',
  standalone: true,
  imports: [],
  templateUrl: './bottom-sheet-modal-content.component.html',
  styleUrl: './bottom-sheet-modal-content.component.scss',
})
export class BottomSheetModalContentComponent {
  // Services
  private readonly ngxBottomSheetModalService = inject(
    NgxBottomSheetModalService
  );

  // Inputs
  @Input() title!: string;
  @Input() description!: string;

  // State
  expandedContent: boolean = false;

  close() {
    this.ngxBottomSheetModalService.closeBottomSheet();
  }
}
