export const SafeResizeObserver =
  typeof ResizeObserver !== 'undefined'
    ? ResizeObserver
    : class implements ResizeObserver {
        public observe(): void {}
        public unobserve(): void {}
        public disconnect(): void {}
      };
