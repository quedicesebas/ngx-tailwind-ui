import { Injectable, signal } from '@angular/core';

const configDefaults: TauiToastConfig = {
  duration: 5000,
  type: 'info',
  showCloseButton: true,
};

export interface TauiToast {
  config: TauiToastConfig;
  remainingTime: number;
}

export interface TauiToastConfig {
  /** Message to be shown in the toast */
  message?: string;
  /** Duration of the toast in milliseconds. Default: 5000 */
  duration?: number;
  /** Type of the toast. Default: 'info' */
  type?: 'info' | 'success' | 'error' | 'warning';
  /** Show close button. Default: true */
  showCloseButton?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TauiToastService {
  toastStack = signal<TauiToast[]>([]);

  /**
   * Shows a toast with the given configuration
   * @param toastConfig Configuration for the toast to be displayed
   */
  showToast(toastConfig: TauiToastConfig): void {
    const config = {
      ...configDefaults,
      ...toastConfig,
    };
    const toast = { config, remainingTime: config.duration! };
    this.toastStack.update((current) => [...current, toast]);
    setInterval(() => {
      toast.remainingTime = toast.remainingTime! - config.duration! / 100;
      if (toast.remainingTime == 0) {
        this.closeToast(toast);
      }
    }, config.duration! / 100);
  }

  /**
   * Closes the specified toast
   * @param toast The toast to be closed
   */
  closeToast(toast: TauiToast): void {
    this.toastStack.update((current) => current.filter((t) => t !== toast));
  }
}
