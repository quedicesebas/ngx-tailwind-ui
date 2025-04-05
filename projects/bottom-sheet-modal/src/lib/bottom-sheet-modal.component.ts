import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  ElementRef,
  NgZone,
  QueryList,
  ViewChildren,
  effect,
  inject,
} from '@angular/core';
import { TauiBottomSheetModalService } from './bottom-sheet-modal.service';
import { TauiEscapeListenerDirective } from './escape-listener.directive';
import { SafeResizeObserver } from './safe-resize-observer';

@Component({
  selector: 'taui-bottom-sheet-modal',
  imports: [NgComponentOutlet, TauiEscapeListenerDirective],
  host: { class: 'fixed z-40' },
  templateUrl: './bottom-sheet-modal.component.html',
  styles: `
    /* On md or more, move close button away from the right border
    Ref: https://csscade.com/can-you-detect-overflow-with-css/ */
    @media (width >= 48rem) {
      @keyframes detect-scroll {
        from,
        to {
          --can-scroll: ;
        }
      }
      .bottom-sheet-inner {
        animation: detect-scroll linear;
        animation-timeline: scroll(self);

        --pos-if-can-scroll: var(--can-scroll) 1rem;
        --pos-if-cant-scroll: .5rem;

        .bottom-sheet-close-button {
          right: var(--pos-if-can-scroll, var(--pos-if-cant-scroll));
        }
      }
    }
  `,
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
export class TauiBottomSheetModalComponent {
  // Services
  protected readonly layersService = inject(TauiBottomSheetModalService);

  @ViewChildren('bottomSheet') bottomSheets!: QueryList<ElementRef>;
  observer!: ResizeObserver;
  fullScreen: boolean = false;

  // State
  modals = this.layersService.layers.asReadonly();

  constructor(private el: ElementRef, private zone: NgZone) {
    // Listen to resize event to check if bottom sheet is full screen and set the fullScreen property.
    // In mobile, fullScreen=true removes round borders of the bottom sheet and sets the close icon button position to fixed.
    this.observer = new SafeResizeObserver((entries: any) => {
      this.zone.run(() => {
        if (
          entries[0].contentRect.height >= this.el.nativeElement.scrollHeight
        ) {
          this.fullScreen = true;
        } else {
          this.fullScreen = false;
        }
      });
    });

    // Listen to current layer changes and, as soon as the element reference is available, set the ResizeObserver
    effect(() => {
      if (this.layersService.currentLayer()) {
        let attempts = 0;
        const intervalId = setInterval(() => {
          if (this.bottomSheets) {
            this.observer.observe(this.bottomSheets.last.nativeElement);
          }
          if (this.bottomSheets || attempts > 9) {
            clearInterval(intervalId);
          } else {
            attempts++;
          }
        }, 100);
      } else {
        this.observer?.disconnect();
      }
    });

    // Set container required classes for bottom sheet modal positioning
    this.el.nativeElement.parentNode.classList.add('grid');
    this.el.nativeElement.parentNode.classList.add('grid-cols-1');
    this.el.nativeElement.parentNode.classList.add('grid-rows-1');
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  close(): void {
    this.layersService.closeBottomSheet();
  }
}
