import { Component, inject } from '@angular/core';
import { NgxBottomSheetModalService } from 'ngx-bottom-sheet-modal';
import { BottomSheetModalContentComponent } from './ngx-bottom-sheet-modal-content.component';

@Component({
  selector: 'app-ngx-bottom-sheet-modal-page',
  standalone: true,
  imports: [],
  template: `
    <nav class="flex mb-4" aria-label="Breadcrumb">
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li class="inline-flex items-center">
          <a
            href="/"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
              />
            </svg>
            Home
          </a>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span
              class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
              >ngx-bottom-sheet-modal</span
            >
          </div>
        </li>
      </ol>
    </nav>
    <section class="dark:text-slate-300">
      <h1 class="font-bold text-xl mt-4 mb-4">
        Angular bottom sheet modal demo
        <span
          class="bg-red-500 text-white rounded-full px-3 py-1 text-sm"
          [class.!bg-green-500]="opened()"
          >{{ opened() ? 'opened' : 'closed' }}</span
        >
      </h1>
      <p class="mb-2">
        Simple bottom sheet modal for Angular, using Tailwind CSS.
      </p>
      <div class="flex flex-col gap-4 py-2 items-start">
        <button
          type="button"
          (click)="openBottomSheetModalClose()"
          class="bg-cyan-600 text-white leading-6 font-medium py-2 px-3 rounded-lg"
        >
          Open modal (can close)
        </button>
        <button
          type="button"
          (click)="openBottomSheetModalClose(false)"
          class="bg-cyan-600 text-white leading-6 font-medium py-2 px-3 rounded-lg"
        >
          Open modal (can close, no X button)
        </button>
        <button
          type="button"
          (click)="openBottomSheetModalNotClose()"
          class="bg-cyan-600 text-white leading-6 font-medium py-2 px-3 rounded-lg"
        >
          Open modal (can't close)
        </button>
        <button
          type="button"
          (click)="openBottomSheetModalOver()"
          class="bg-cyan-600 text-white leading-6 font-medium py-2 px-3 rounded-lg"
        >
          Open modal after other
        </button>
      </div>
      <p class="py-96">
        Some text with a lot of padding to show scroll disabled when modal
        opened.
      </p>
    </section>
  `,
  styles: '',
})
export class BottomSheetModalPageComponent {
  // Services
  private readonly ngxBottomSheetModalService = inject(
    NgxBottomSheetModalService
  );

  // State
  opened = this.ngxBottomSheetModalService.currentLayer;

  readonly closeButtonClass = 'text-cyan-400 dark:text-cyan-200';

  openBottomSheetModalClose(showCloseButton = true) {
    this.ngxBottomSheetModalService.openBottomSheet({
      contentComponent: BottomSheetModalContentComponent,
      inputs: {
        title: 'My modal',
        description: 'A simple bottom sheet modal :)',
      },
      showCloseButton: showCloseButton,
      closeButtonClass: this.closeButtonClass,
    });
  }

  openBottomSheetModalNotClose() {
    this.ngxBottomSheetModalService.openBottomSheet({
      contentComponent: BottomSheetModalContentComponent,
      inputs: {
        title: 'My modal',
        description: "A simple bottom sheet modal. Can't be dissmissed",
        showOKButton: true,
      },
      canClose: false,
      closeButtonClass: this.closeButtonClass,
    });
  }

  openBottomSheetModalOver() {
    this.ngxBottomSheetModalService.openBottomSheet({
      contentComponent: BottomSheetModalContentComponent,
      inputs: {
        title: 'My modal',
        description: 'A simple bottom sheet modal. You can open other.',
        openOtherModal: true,
      },
      closeButtonClass: this.closeButtonClass,
    });
  }
}
