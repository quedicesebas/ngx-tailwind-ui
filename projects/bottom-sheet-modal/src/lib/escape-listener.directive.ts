import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[tauiListenEscKey]',
})
export class TauiEscapeListenerDirective {
  esc = output();

  @HostListener('document:keyup', ['$event']) handleKeyEvent(
    event: KeyboardEvent
  ): void {
    /**
     * Alt+Esc, Shift+Esc or Ctrl+Esc should not be supported
     */
    if (
      !event.altKey &&
      !event.shiftKey &&
      !event.ctrlKey &&
      event.key === 'Escape'
    ) {
      this.esc.emit();
    }
  }
}
