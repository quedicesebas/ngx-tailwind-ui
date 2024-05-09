import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Type, computed, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const configDefaults = {
  contentComponent: null,
  canClose: true,
  showCloseButton: true,
  closeButtonClass: 'text-gray-500 dark:text-gray-300',
};

export interface NgxBottomSheetModalConfig {
  /** Content component class */
  contentComponent: Type<any> | null;
  /** An object containing the data. Each property of it can be mapped as an input property in the content component */
  inputs?: Record<string, unknown>;
  /** Callback function to be called when the modal is closed by the user */
  onClose?: () => void;
  /** Enable closing the modal, and shows de close button. Default: true */
  canClose?: boolean;
  /** Show a close icon button in the top-rigth corner of the bottom sheet modal. Default: true */
  showCloseButton?: boolean;
  /** Close icon button class. Default: 'text-gray-500 dark:text-gray-300' */
  closeButtonClass?: string;
}
@Injectable({
  providedIn: 'root',
})
export class NgxBottomSheetModalService {
  private readonly layersSource$ =
    new BehaviorSubject<NgxBottomSheetModalConfig>(configDefaults);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  layers = signal<NgxBottomSheetModalConfig[]>([]);
  currentLayer = computed(() => this.getLast());

  /**
   * Opens the modal with the given parameters
   * @param config NgxBottomSheetModalConfig
   */
  openBottomSheet(config: NgxBottomSheetModalConfig): void {
    this.document.body.classList.add('overflow-hidden');
    const next = {
      ...configDefaults,
      ...config,
    };
    // We use this instead of 'this.layers().push(next)' in order to 'effects' work
    this.layers.update((value) => [...value, next]);
  }

  /**
   * Closes the modal with the given parameters
   */
  closeBottomSheet(): void {
    const last = this.getLast();
    if (last) {
      last.onClose?.();
      // We use this instead of 'this.layers().pop()' in order to 'effects' work
      this.layers.update((value) => value.slice(0, value.length - 1));
    }
  }

  private getLast() {
    return this.layers().length > 0
      ? this.layers()[this.layers().length - 1]
      : undefined;
  }
}
