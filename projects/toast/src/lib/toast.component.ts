import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TauiToast, TauiToastService } from './toast.service';

/**
 * Toast component that displays notifications with different types (info, success, warning, error).
 * Each toast has a progress bar, close button, and appropriate icon based on its type.
 */
@Component({
  selector: 'taui-toast',
  imports: [NgClass],
  template: `
    <div
      class="fixed left-0 bottom-0 right-0 z-50 flex flex-col-reverse items-end gap-4 p-4"
      [class.p-4]="toastStack().length > 0"
    >
      @for (toast of toastStack(); track toast) {
      <div @container>
        <div
          class="w-full md:max-w-[50dvw] rounded-lg border dark:border-gray-700 shadow-sm dark:text-gray-50 overflow-hidden bg-white dark:bg-gray-800"
          role="alert"
          @slideUpInSlideRightOut
          @fade
        >
          <div class="flex items-center gap-2 w-full px-3 py-2.5">
            <div
              class="inline-flex items-center justify-center shrink-0 w-8 h-8  rounded-lg"
              [ngClass]="{
                'text-blue-500  dark:text-blue-200':
                  toast.config.type === 'info',
                'text-green-500  dark:text-green-200':
                  toast.config.type === 'success',
                'text-yellow-500  dark:text-yellow-200':
                  toast.config.type === 'warning',
                'text-red-500  dark:text-red-200': toast.config.type === 'error'
              }"
            >
              @if (toast.config.type === 'success') {
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                />
              </svg>
              <span class="sr-only">Success icon</span>
              } @else if (toast.config.type === 'warning') {
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"
                />
              </svg>
              <span class="sr-only">Warning icon</span>
              } @else if (toast.config.type === 'error') {
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
                />
              </svg>
              <span class="sr-only">Error icon</span>
              } @else {
              <svg
                class=" w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                />
              </svg>
              <span class="sr-only">Information icon</span>
              }
            </div>
            <div class="text-sm font-normal">{{ toast.config.message }}</div>
            <button
              type="button"
              class="rounded-lg focus:ring-2 focus:ring-gray-300 inline-flex items-center justify-center h-8 w-8 dark:text-white dark:hover:text-white hover:opacity-75 shrink-0"
              (click)="close(toast)"
              aria-label="Close toast"
            >
              <span class="sr-only">Close toast</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div class="w-full bg-gray-200 h-1 dark:bg-gray-700">
            <div
              class="h-1"
              [ngClass]="{
                'bg-blue-600 dark:bg-blue-500': toast.config.type === 'info',
                'bg-green-600 dark:bg-green-500':
                  toast.config.type === 'success',
                'bg-yellow-600 dark:bg-yellow-500':
                  toast.config.type === 'warning',
                'bg-red-600 dark:bg-red-500': toast.config.type === 'error'
              }"
              style="width: {{
                (toast.remainingTime! * 100) / toast.config.duration!
              }}%"
            ></div>
          </div>
        </div>
      </div>
      }
    </div>
  `,
  styles: ``,
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
    trigger('slideUpInSlideRightOut', [
      transition(':enter', [
        style({ transform: 'translate(0,500px)' }),
        animate(
          '350ms cubic-bezier(0.17, 0.89, 0.24, 1.11)',
          style({ transform: 'translate(0,0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in-out',
          style({ transform: 'translate(100%, 0)' })
        ),
      ]),
    ]),
    trigger('container', [
      transition(':enter, :leave', [
        query('@*', animateChild(), { optional: true }),
      ]),
    ]),
  ],
})
export class TauiToastComponent {
  private toastService = inject(TauiToastService);

  toastStack = this.toastService.toastStack.asReadonly();

  /**
   * Closes the specified toast
   * @param toast The toast to be closed
   */
  close(toast: TauiToast): void {
    this.toastService.closeToast(toast);
  }
}
