import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxBottomSheetModalService {
  private readonly layersSource$ = new BehaviorSubject<Layers>({
    contentComponent: null,
  });

  constructor(@Inject(DOCUMENT) private document: Document) {}

  layers$(): Observable<Layers> {
    return this.layersSource$.asObservable();
  }

  openBottomSheet(params: Layers): void {
    this.document.body.classList.add('overflow-hidden');
    this.layersSource$.next({
      ...this.getLayersCurrentValue(),
      contentComponent: params.contentComponent,
      inputs: params.inputs,
    });
  }

  closeBottomSheet(): void {
    this.document.body.classList.remove('overflow-hidden');
    this.layersSource$.next({
      ...this.getLayersCurrentValue(),
      contentComponent: null,
      inputs: undefined,
    });
  }

  private getLayersCurrentValue(): Layers {
    return this.layersSource$.getValue();
  }
}

export interface Layers {
  contentComponent: Type<any> | null;
  inputs?: Record<string, unknown>;
}
