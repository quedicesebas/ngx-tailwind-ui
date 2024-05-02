import { Component, Input, inject } from '@angular/core';
import { NgxBottomSheetModalService } from 'ngx-bottom-sheet-modal';

@Component({
  selector: 'app-ngx-bottom-sheet-modal-content',
  standalone: true,
  imports: [],
  template: `
    <div
      class="pt-4 overflow-auto max-h-screen md:overflow-hidden bg-white dark:bg-slate-900 dark:text-white"
    >
      <div class="px-4">
        <h1 class="font-bold text-xl">{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <p class="px-4 py-2 mt-4 bg-slate-200 dark:bg-slate-700">
        ⓘ Tap outside or click button below to close.
      </p>
      <div class="px-4 overflow-auto md:max-h-96">
        <p
          class="pt-4 font-semibold"
          (click)="expandedContent = !expandedContent"
        >
          {{
            expandedContent ? 'Show less content [-]' : 'Show  more content [+]'
          }}
        </p>
        @if(expandedContent) {
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        }
      </div>
      <div
        class="p-4 flex justify-end sticky bottom-0 bg-white dark:bg-slate-900 border-t-2 w-full md:rounded-b-xl"
      >
        <button
          type="button"
          (click)="close()"
          class="bg-cyan-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  `,
  styles: '',
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
