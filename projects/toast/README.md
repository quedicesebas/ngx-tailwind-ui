# 🍞 @ngx-tailwind-ui/toast

A flexible and accessible toast notification system for Angular applications. This package provides a simple way to display temporary messages to users with various types, animations, and customization options.

## ✨ Features

- 📝 **Multiple Types**: Support for info, success, warning, and error notifications
- ⏱️ **Customizable Duration**: Set how long notifications stay visible
- 📊 **Progress Bar**: Visual indicator of remaining display time
- ❌ **Dismissible**: Users can manually close notifications
- ♿ **Accessibility**: ARIA labels and keyboard navigation support
- 🎨 **Dark Mode**: Built-in support for dark mode themes
- 🎬 **Animations**: Smooth enter/exit transitions
- 📚 **Stacking**: Multiple toasts can be displayed simultaneously

## 🎮 Demo

View the live [demo](https://stackblitz.com/edit/ngx-tailwind-ui) to see the component in action.

## 🛠️ Prerequisites

- Angular 17+ project
- Tailwind CSS (v3 or v4) configured in your project
- Angular animations

## 📦 Installation

```bash
npm install @ngx-tailwind-ui/toast
```

### Provide animations

```typescript
import { provideAnimations } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [...provideAnimations()],
};
```

### Configure Tailwind CSS

To scan the toast component for styles:

#### For Tailwind CSS v4 (Recommended)
Add the `@source` directive to your main stylesheet (e.g. `src/styles.scss` or `src/styles.css`):

```css
@import "tailwindcss";

@source "../node_modules/@ngx-tailwind-ui/toast/**/*.{html,ts,js,mjs}";
```

#### For Tailwind CSS v3
Add the package path to the `content` array in your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/@ngx-tailwind-ui/toast/**/*.{html,ts,js,mjs}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 🚀 Usage

### 1. Add the Component

Add the toast wrapper to your app root component:

```typescript
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TauiToastComponent } from "@ngx-tailwind-ui/toast";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
    <taui-toast />
  `,
  imports: [RouterOutlet, TauiToastComponent],
})
export class AppComponent {}
```

### 2. Show Toasts

Inject the toast service and show notifications:

```typescript
import { Component, inject } from "@angular/core";
import { TauiToastService } from "@ngx-tailwind-ui/toast";

@Component({
  selector: "app-demo",
  template: `
    <section class="dark:text-slate-300">
      <h1 class="font-bold text-xl mt-4 mb-4">
        Angular Toast Demo
        <span class="bg-red-500 text-white rounded-full px-3 py-1 text-sm" [class.!bg-green-500]="toastStack().length > 0"> Showing {{ toastStack().length }} toasts </span>
      </h1>
      <p class="mb-2">Simple toast for Angular, using Tailwind CSS.</p>
      <div class="flex gap-2">
        <button type="button" (click)="showToast('info')" class="bg-blue-500 text-white leading-6 font-medium py-2 px-3 rounded-lg">Show Info Toast</button>
        <button type="button" (click)="showToast('success')" class="bg-green-500 text-white leading-6 font-medium py-2 px-3 rounded-lg">Show Success Toast</button>
        <button type="button" (click)="showToast('warning')" class="bg-yellow-500 text-white leading-6 font-medium py-2 px-3 rounded-lg">Show Warning Toast</button>
        <button type="button" (click)="showToast('error')" class="bg-red-500 text-white leading-6 font-medium py-2 px-3 rounded-lg">Show Error Toast</button>
      </div>
    </section>
  `,
})
export class ToastDemoComponent {
  private toastService = inject(TauiToastService);

  toastStack = this.toastService.toastStack.asReadonly();

  showToast(type: "info" | "success" | "warning" | "error") {
    this.toastService.showToast({
      type,
      message: `This is a ${type} message in a toast`,
    });
  }
}
```

## 📚 API Reference

### TauiToastConfig

| Property          | Type                                  | Required | Default | Description                                               |
| ----------------- | ------------------------------------- | -------- | ------- | --------------------------------------------------------- |
| `message`         | string                                | Yes      | -       | Message to be shown in the toast                          |
| `duration`        | number                                | No       | 5000    | Duration of the toast in milliseconds                     |
| `type`            | 'info'\|'success'\|'warning'\|'error' | No       | 'info'  | Type of the toast                                         |
| `showCloseButton` | boolean                               | No       | true    | Show a close icon button in the right corner of the toast |
| `autoClose`       | boolean                               | No       | true    | Whether the toast should close automatically              |

### ToastService Methods

| Method       | Parameters              | Description                                    |
| ------------ | ----------------------- | ---------------------------------------------- |
| `showToast`  | config: TauiToastConfig | Shows a toast with the specified configuration |
| `closeToast` | toast: TauiToast        | Closes the specified toast                     |

## 💡 Examples

### Basic Toast

```typescript
this.toastService.showToast({
  message: "Operation completed successfully",
  type: "success",
});
```

### Custom Duration

```typescript
this.toastService.showToast({
  message: "This will stay for 10 seconds",
  duration: 10000,
  type: "info",
});
```

### Without Close Button

```typescript
this.toastService.showToast({
  message: "This toast cannot be manually closed",
  showCloseButton: false,
  type: "warning",
});
```

### Persistent Toast (No Auto Close)

```typescript
this.toastService.showToast({
  message: "This notification will stay until manually closed",
  autoClose: false,
  type: "info",
});
```

## 🌐 Browser Support

The package is tested and supported on the following browsers:

- Chrome (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

- **Peer Dependencies**:
  - @angular/common: ^19.2.0
  - @angular/core: ^19.2.0
- **Runtime Dependencies**:
  - tslib: ^2.3.0

## ⚡ Performance Considerations

- **Change Detection**: Optimized to minimize change detection cycles
- **Lazy Loading**: Supports lazy loading for better initial load performance
- **Bundle Size**: Minimal impact on bundle size
- **Memory Usage**: Efficient memory management for multiple toasts

## ♿ Accessibility

The component includes built-in accessibility features:

- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Mobile-friendly notifications

## 🤝 Contributing

Contributions are welcome!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/quedicesebas/ngx-tailwind-ui/main/LICENSE) file for details.
