# NgxBottomSheetModal

Simple bottom sheet modal for Angular, using Tailwind CSS.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Installation

```
npm install ngx-bottom-sheet-modal
```

## Usage

Add the bottom sheet modal wrapper to your app root. Import it in your component definition and add it to the template

```
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgxBottomSheetModalComponent } from 'ngx-bottom-sheet-modal';
import { RouteHistoryService } from './services/route-history.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <router-outlet></router-outlet>
  <lib-ngx-bottom-sheet-modal></lib-ngx-bottom-sheet-modal>
  `,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NgxBottomSheetModalComponent],
})
export class AppComponent {
  }
}
```
