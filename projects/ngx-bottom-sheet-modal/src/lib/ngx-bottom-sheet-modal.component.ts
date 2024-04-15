import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs';
import { NgxBottomSheetModalService } from './ngx-bottom-sheet-modal.service';

@Component({
  selector: 'ngx-bottom-sheet-modal',
  standalone: true,
  imports: [CommonModule],
  host: { class: 'fixed z-40' },
  template: `
    <!-- container -->
    @if (content$ | async; as content) { @if (content.contentComponent) {
    <div @container class="relative grid h-dvh grid-cols-1 grid-rows-1">
      <!-- shade -->
      <div
        @fade
        class="col-span-1 col-start-1 row-span-1 row-start-1 w-svw bg-black bg-opacity-60"
        (click)="close()"
        aria-hidden="true"
      ></div>

      <!-- bottom sheet -->
      <div
        @slideUp
        class="z-10 col-span-1 col-start-1 row-span-1 row-start-1 self-end rounded-t-xl bg-white md:absolute md:bottom-0 md:left-0 md:right-0 md:top-0 md:m-auto md:w-11/12 md:max-w-5xl md:rounded-xl lg:w-2/3"
      >
        <ng-container
          *ngComponentOutlet="content.contentComponent; inputs: content.inputs"
        />
      </div>
    </div>
    } }
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
    trigger('slideUp', [
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
          style({ transform: 'translate(0,500px)' })
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
export class NgxBottomSheetModalComponent {
  // Services
  protected readonly layersService = inject(NgxBottomSheetModalService);

  constructor(private el: ElementRef) {}

  // State
  content$ = this.layersService.layers$().pipe(
    map((layers) => layers),
    distinctUntilChanged()
  );

  ngAfterViewInit() {
    this.el.nativeElement.parentNode.classList.add('grid');
    this.el.nativeElement.parentNode.classList.add('grid-cols-1');
    this.el.nativeElement.parentNode.classList.add('grid-rows-1');
  }

  close(): void {
    this.layersService.closeBottomSheet();
  }
}
