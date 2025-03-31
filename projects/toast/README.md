# Angular Tailwind UI - Toast

Simple toast component, using Tailwind CSS.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Features

- Show toast painless and clearer.
- Different types (information, success, warining and error)
- Dissmisable, duration configurable and with visual feedback

## Demo

View the live [demo](https://stackblitz.com/edit/ngx-tailwind-ui)

## Prerrequisites

- Tailwind CSS. Check [Angular installation](https://tailwindcss.com/docs/guides/angular)

## Installation

```shell
npm install @ngx-tailwind-ui/toast
```

## Usage

### 1. Add the toast wrapper to your app root. Import it into your component definition and add it to the end of the template:

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TauiToastComponent } from '@ngx-tailwind-ui/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet></router-outlet>
    <taui-toast />
  `,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, TauiToastComponent],
})
export class AppComponent {
  }
}
```

### 2. Show toast

Inject the toast service to the component from which you want to show the toast. Now you can call `showToast` method any time you want to open the bottom sheet modal, using the `TauiToastConfig` object.

#### TauiToastConfig

| Name            | Required | Type    | Default | Description                                               |
| --------------- | -------- | ------- | ------- | --------------------------------------------------------- |
| message         | true     | string  |         | Message to be shown in the toast                          |
| duration        | false    | number  | 3000    | Duration of the toast in milliseconds                     |
| type            | false    | 'info'  |         | Type of the toast                                         |
| showCloseButton | false    | boolean | true    | Show a close icon button in the rigth corner of the toast |

```typescript
import { Component, inject } from "@angular/core";
import { TauiToastConfig, TauiToastService } from "toast";

@Component({
  selector: "app-component",
  standalone: true,
  template: `
    <section class="dark:text-slate-300">
      <h1 class="font-bold text-xl mt-4 mb-4">
        Angular toast demo
        <span class="bg-red-500 text-white rounded-full px-3 py-1 text-sm" [class.!bg-green-500]="toastStack().length > 0">showing {{ toastStack().length }}</span>
      </h1>
      <p class="mb-2">Simple toast for Angular, using Tailwind CSS.</p>
      <button type="button" (click)="showToast()" class="bg-cyan-600 text-white leading-6 font-medium py-2 px-3 rounded-lg">Show a toast</button>
    </section>
  `,
  styles: ``,
  imports: [],
})
export class BottomSheetModalPageComponent {
  // Services
  private toastService = inject(TauiToastService);

  toastStack = this.toastService.toastStack.asReadonly();

  showToast() {
    const type = "success";
    this.toastService.showToast({
      type: type,
      message: `This is a ${type} message in a toast`,
    });
  }
}
```

As you can see, you can pass any data to the modal component using the `inputs` parameter of the `openBottomSheet` method. The data will be available in the modal component as `@Input` properties.

### 4. Provide animations

Add `provideAnimations()` to your providers in the `app.congif.ts` file:

```typescript
import { provideAnimations } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [...provideAnimations()],
};
```

### 5. Update Tailswind CSS config

Include the `toast` styles. Add the following to the `content` section in your `tailwind.config.js` file:

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/quedicesebas/ngx-tailwind-ui/main/LICENSE) file for details.
