import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet-modal-content',
  standalone: true,
  imports: [],
  templateUrl: './bottom-sheet-modal-content.component.html',
  styleUrl: './bottom-sheet-modal-content.component.scss',
})
export class BottomSheetModalContentComponent {
  @Input() title!: string;
  @Input() description!: string;
}
