import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface NgxBottomSheetModalConfig {
  /** Content component class */
  contentComponent: Type<any> | null;
  /** An object containing the data. Each property of it can be mapped as an input property in the content component */
  inputs?: Record<string, unknown>;
  /** Callback function to be called when the modal is closed by the user */
  onClose?: () => void;
}

@Injectable({
  providedIn: 'root',
})
export class NgxBottomSheetModalService {
  private readonly layersSource$ =
    new BehaviorSubject<NgxBottomSheetModalConfig>({
      contentComponent: null,
    });

  constructor(@Inject(DOCUMENT) private document: Document) {}

  layers$(): Observable<NgxBottomSheetModalConfig> {
    return this.layersSource$.asObservable();
  }

  /**
   * Opens the modal with the given parameters
   * @param params NgxBottomSheetModalConfig
   */
  openBottomSheet(params: NgxBottomSheetModalConfig): void {
    this.document.body.classList.add('overflow-hidden');
    this.layersSource$.next({
      ...this.getLayersCurrentValue(),
      ...params,
    });
  }

  /**
   * Closes the modal with the given parameters
   */
  closeBottomSheet(): void {
    this.document.body.classList.remove('overflow-hidden');
    this.getLayersCurrentValue().onClose?.();
    this.layersSource$.next({
      ...this.getLayersCurrentValue(),
      contentComponent: null,
      inputs: undefined,
      onClose: undefined,
    });
  }

  private getLayersCurrentValue(): NgxBottomSheetModalConfig {
    return this.layersSource$.getValue();
  }
}
