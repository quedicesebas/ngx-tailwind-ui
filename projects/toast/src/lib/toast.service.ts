import { Injectable, signal } from '@angular/core';

const configDefaults: TauiToastConfig = {
  duration: 5000,
  type: 'info',
  showCloseButton: true,
  autoClose: true,
};

export interface TauiToast {
  config: TauiToastConfig;
  remainingTime: number;
  intervalId?: any;
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
  /** Whether the toast should close automatically. Default: true */
  autoClose?: boolean;
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
    const toast: TauiToast = { config, remainingTime: config.duration! };
    this.toastStack.update((current) => [...current, toast]);

    if (config.autoClose) {
      const interval = setInterval(() => {
        toast.remainingTime = toast.remainingTime! - config.duration! / 100;
        if (toast.remainingTime <= 0) {
          clearInterval(interval);
          this.closeToast(toast);
        }
      }, config.duration! / 100);
      toast.intervalId = interval;
    }
  }

  /**
   * Closes the specified toast
   * @param toast The toast to be closed
   */
  closeToast(toast: TauiToast): void {
    if (toast.intervalId) {
      clearInterval(toast.intervalId);
    }
    this.toastStack.update((current) => current.filter((t) => t !== toast));
  }
}
