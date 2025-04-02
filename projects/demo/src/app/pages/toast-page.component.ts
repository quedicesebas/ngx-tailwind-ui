import { Component, inject } from '@angular/core';
import { TauiToastConfig, TauiToastService } from 'toast';

/**
 * Demo page component for the toast functionality.
 * Demonstrates different types of toasts (info, success, warning, error) and their usage.
 */
@Component({
  selector: 'app-toast-page',
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
              >Toast</span
            >
          </div>
        </li>
      </ol>
    </nav>
    <section class="dark:text-slate-300">
      <h1 class="font-bold text-xl mt-4 mb-4">
        Angular toast demo
        <span
          class="bg-red-500 text-white rounded-full px-3 py-1 text-sm"
          [class.!bg-green-500]="toastStack().length > 0"
          >showing {{ toastStack().length }}</span
        >
      </h1>
      <p class="mb-2">
        Simple toast component for Angular, using Tailwind CSS.
      </p>
      <div class="flex flex-col gap-4 py-2 items-start">
        <button
          type="button"
          (click)="showToast('info')"
          class="bg-cyan-600 text-white leading-6 font-medium py-2 px-3 rounded-lg"
        >
          Show info toast
        </button>
        <button
          type="button"
          (click)="showToast('success')"
          class="bg-cyan-600 text-white leading-6 font-medium py-2 px-3 rounded-lg"
        >
          Show success toast
        </button>
        <button
          type="button"
          (click)="showToast('warning')"
          class="bg-cyan-600 text-white leading-6 font-medium py-2 px-3 rounded-lg"
        >
          Show warning toast
        </button>
        <button
          type="button"
          (click)="showToast('error')"
          class="bg-cyan-600 text-white leading-6 font-medium py-2 px-3 rounded-lg"
        >
          Show error toast
        </button>
      </div>
    </section>
  `,
  styles: ``,
  imports: [],
})
export class ToastPageComponent {
  /** Injected toast service for managing toast notifications */
  private toastService = inject(TauiToastService);

  /** Read-only access to the current stack of active toasts */
  toastStack = this.toastService.toastStack.asReadonly();

  /**
   * Shows a toast notification with the specified type.
   * @param type The type of toast to display (info, success, warning, or error)
   */
  showToast(type: TauiToastConfig['type']) {
    this.toastService.showToast({
      type: type,
      message: `This is a ${type} message in a toast`,
    });
  }
}
