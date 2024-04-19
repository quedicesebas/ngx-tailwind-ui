# NgxBottomSheetModal

Simple bottom sheet modal for Angular, using Tailwind CSS.

![Demo animation](https://raw.githubusercontent.com/quedicesebas/ngx-bottom-sheet-modal/main/demo.gif)

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Features

- Create clear and reusable modal components.
- It creating managing modals painless and clearer.
- Pass data to the modal and and implement any content you want
- Responsive: displayed as bottom sheet on mobile and as modal dialog in desktop

## Demo

View the live [demo](https://stackblitz.com/edit/bottom-sheet-modal-demo)

## Prerrequisites

- Tailwind CSS. Check [Angular installation](https://tailwindcss.com/docs/guides/angular)

## Installation

```shell
npm install ngx-bottom-sheet-modal
```

## Usage

1. Add the bottom sheet modal wrapper to your app root. Import it into your component definition and add it to the end of the template:

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxBottomSheetModalComponent } from 'ngx-bottom-sheet-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <router-outlet></router-outlet>
  <ngx-bottom-sheet-modal></ngx-bottom-sheet-modal>
  `,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NgxBottomSheetModalComponent],
})
export class AppComponent {
  }
}
```

### 1. Create a component with the modal content:

```typescript
import { Component, Input, inject } from "@angular/core";
import { NgxBottomSheetModalService } from "ngx-bottom-sheet-modal";

@Component({
  selector: "app-modal-content-component",
  standalone: true,
  imports: [],
  template: `
    <div class="pt-4 overflow-auto max-h-screen md:overflow-hidden">
      <div class="px-4">
        <h1 class="font-bold text-xl">{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <p class="px-4 py-2 mt-4 bg-slate-200">ⓘ Tap outside or click button below to close.</p>
      <div class="px-4 overflow-auto md:max-h-96">
        <p class="pt-4 font-semibold" (click)="expandedContent = !expandedContent">
          {{ expandedContent ? "Show less content [-]" : "Show  more content [+]" }}
        </p>
        @if(expandedContent) {
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        <p class="py-8">Some text to show back scroll</p>
        }
      </div>
      <div class="p-4 flex justify-end sticky bottom-0 bg-white border-t-2 w-full md:rounded-b-xl">
        <button type="button" (click)="close()" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Close</button>
      </div>
    </div>
  `,
  styles: ``,
})
export class ModalContentComponent {
  // Services
  private readonly ngxBottomSheetModalService = inject(NgxBottomSheetModalService);

  // Inputs
  @Input() title!: string;
  @Input() description!: string;

  // State
  expandedContent: boolean = false;

  close() {
    this.ngxBottomSheetModalService.closeBottomSheet();
  }
}
```

### 3. Modal trigger

Inject the modal service to the component from which you want to open the modal. Now you can call `openBottomSheet` method any time you want to open the bottom sheet modal, using the `NgxBottomSheetModalConfig` object.

#### NgxBottomSheetModalConfig

| Name             | Required | Type                    | Default       | Description                                                                                                    |
| ---------------- | -------- | ----------------------- | ------------- | -------------------------------------------------------------------------------------------------------------- |
| contentComponent | true     | Type<any>               |               | Content component class                                                                                        |
| inputs           | false    | Record<string, unknown> |               | An object containing the data. Each property of it can be mapped as an input property in the content component |
| onClose          | false    | () => void              |               | Callback function to be called when the modal is closed by the user                                            |
| showCloseButton  | false    | boolean                 | false         | Show a close icon button in the top-rigth corner of the bottom sheet modal                                     |
| closeButtonClass | false    | string                  | text-gray-500 | Close icon button class                                                                                        |

```typescript
import { Component, inject } from "@angular/core";
import { NgxBottomSheetModalService } from "ngx-bottom-sheet-modal";
import { ModalContentComponent } from "./modal-content-component.component";

@Component({
  selector: "app-menu-item",
  standalone: true,
  template: `
    <div class="p-4">
      <h1 class="font-bold text-xl mt-4 mb-2">
        Angular bottom sheet modal demo
        <span class="bg-gray-600 text-white rounded-full px-3 py-1 text-sm" [class]="{ 'bg-indigo-600': opened }">{{ opened ? "opened" : "closed" }}</span>
      </h1>
      <p class="mb-2">Simple bottom sheet modal for Angular, using Tailwind CSS.</p>
      <button type="button" (click)="openBottomSheetModal()" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Open Bottom sheet modal</button>
    </div>
  `,
  styles: ``,
  imports: [],
})
export class MenuItemComponent {
  // Services
  private readonly ngxBottomSheetModalService = inject(NgxBottomSheetModalService);

  // State
  opened: boolean = false;

  constructor() {}

  openBottomSheetModal() {
    this.ngxBottomSheetModalService.openBottomSheet({
      contentComponent: ModalContentComponent,
      inputs: data,
      inputs: {
        title: "My modal",
        description: "A simple bottom sheet modal :)",
      },
      onClose: () => {
        this.opened = false;
      },
      showCloseButton: true,
      closeButtonClass: "text-indigo-400",
    });
    this.opened = true;
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

Include the `ngx-bottom-sheet-modal` styles. Add the following to the `content` section in your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/ngx-bottom-sheet-modal/**/*.{html,ts,js,mjs}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/quedicesebas/ngx-bottom-sheet-modal/main/LICENSE) file for details.
