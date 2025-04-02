import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Type, computed, signal } from '@angular/core';

const configDefaults: TauiBottomSheetModalConfig = {
  contentComponent: null,
  canClose: true,
  showCloseButton: true,
  closeButtonClass: 'text-gray-500 dark:text-gray-300',
};

export interface TauiBottomSheetModalConfig {
  /** Content component class */
  contentComponent: Type<any> | null;
  /** An object containing the data. Each property can be mapped as an input property in the content component */
  inputs?: Record<string, unknown>;
  /** Callback function to be called when the modal is closed by the user */
  onClose?: () => void;
  /** Enable closing the modal and show the close button. Default: true */
  canClose?: boolean;
  /** Show a close icon button in the top-right corner of the bottom sheet modal. Default: true */
  showCloseButton?: boolean;
  /** Close icon button class. Default: 'text-gray-500 dark:text-gray-300' */
  closeButtonClass?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TauiBottomSheetModalService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  layers = signal<TauiBottomSheetModalConfig[]>([]);
  currentLayer = computed(() =>
    this.layers().length > 0
      ? this.layers()[this.layers().length - 1]
      : undefined
  );

  /**
   * Opens the modal with the given configuration
   * @param config Configuration for the modal to be displayed
   */
  openBottomSheet(config: TauiBottomSheetModalConfig): void {
    this.document.body.classList.add('overflow-hidden');
    const next = {
      ...configDefaults,
      ...config,
    };
    this.layers.update((current) => [...current, next]);
  }

  /**
   * Closes the current modal in the top layer and triggers the onClose callback if defined
   */
  closeBottomSheet(): void {
    const last = this.currentLayer();
    if (last) {
      last.onClose?.();
      this.layers.update((current) => current.slice(0, current.length - 1));
      if (this.layers.length == 0) {
        this.document.body.classList.remove('overflow-hidden');
      }
    }
  }
}
