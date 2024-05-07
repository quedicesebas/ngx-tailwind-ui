import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxBottomSheetModalService } from 'ngx-bottom-sheet-modal';
import { NgxPhonenumbersDirective } from 'ngx-phonenumbers';

const initialValue = {
  phoneWithCountry: '',
  countryCode: '',
  phone: '',
};

@Component({
  selector: 'app-ngx-phonenumbers-page',
  standalone: true,
  template: `
    <nav class="flex mb-4" aria-label="Breadcrumb">
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li class="inline-flex items-center">
          <a
            href="/"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
              />
            </svg>
            Home
          </a>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span
              class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
              >ngx-phonenumbers</span
            >
          </div>
        </li>
      </ol>
    </nav>

    <div
      class="rounded-lg p-5 pl-7 relative overflow-hidden bg-cyan-200 dark:bg-cyan-950"
    >
      <form (ngSubmit)="submit()" #demoForm="ngForm">
        <div
          class="relative h-14 border-2 border-cyan-500 dark:border-cyan-700 rounded-full overflow-hidden my-2"
        >
          <input
            type="text"
            placeholder="Phone number"
            class="px-6 pl-20 w-full text-xl font-medium h-full rounded-full bg-white dark:bg-transparent dark:text-slate-200 placeholder-cyan-700"
            id="phoneWithCountry"
            name="phoneWithCountry"
            [(ngModel)]="demo.phoneWithCountry"
            required
            ngxPhonenumber
            defaultCountryCode="+57"
            [countryCodeControl]="countryCode.control"
            #phoneWithCountry="ngModel"
          /><input
            type="text"
            placeholder="+57"
            readonly
            id="countryCode"
            name="countryCode"
            [(ngModel)]="demo.countryCode"
            class="absolute top-1/2 transform -translate-y-1/2 w-12 h-7 rounded-full border-none left-4 p-2 cursor-not-allowed bg-cyan-500 placeholder-cyan-300 text-cyan-100 text-center"
            #countryCode="ngModel"
          />
        </div>
        <div
          *ngIf="
            phoneWithCountry.invalid &&
            (phoneWithCountry.dirty || phoneWithCountry.touched)
          "
          class="text-right text-aquamarine-blue-500 dark:text-slate-300 pr-6"
        >
          <div *ngIf="phoneWithCountry.errors?.['required']">
            *The phone number is required
          </div>
          <div *ngIf="phoneWithCountry.errors?.['phoneNumber']">
            *That is not a valid phone number
          </div>
        </div>
        <div
          class="relative h-14 border-2 border-cyan-500 dark:border-cyan-700 rounded-full overflow-hidden my-2"
        >
          <input
            type="tel"
            placeholder="Phone number"
            class="px-6 w-full text-xl font-medium h-full rounded-full bg-white dark:bg-transparent dark:text-slate-200 placeholder-cyan-700"
            id="phone"
            name="phone"
            [(ngModel)]="demo.phone"
            required
            ngxPhonenumber
            defaultCountryCode="+57"
            type="text"
            #phone="ngModel"
          />
        </div>
        <div
          *ngIf="phone.invalid && (phone.dirty || phone.touched)"
          class="text-right text-aquamarine-blue-500 dark:text-slate-300 pr-6"
        >
          <div *ngIf="phone.errors?.['required']">
            *The phone number is required
          </div>
          <div *ngIf="phone.errors?.['phoneNumber']">
            *That is not a valid phone number
          </div>
        </div>
        <div class="flex justify-end mt-5">
          <button
            type="submit"
            class="text-center py-2 px-6 rounded-full button-shadow flex items-center space-x-2 text-2xl font-semibold bg-aquamarine-blue-500 bg-cyan-500 text-white"
            [class.opacity-50]="!demoForm.form.valid"
            [disabled]="!demoForm.form.valid"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  `,
  styles: ``,
  imports: [CommonModule, FormsModule, NgxPhonenumbersDirective],
})
export class PhonenumbersPageComponent {
  // Services
  private readonly ngxBottomSheetModalService = inject(
    NgxBottomSheetModalService
  );

  demo: { phoneWithCountry: string; phone: string; countryCode: string } =
    initialValue;

  submit() {
    this.ngxBottomSheetModalService.openBottomSheet({
      contentComponent: InfoModal,
      inputs: {
        title: 'Your phone number',
        description: `The entered numbers are ${this.demo.countryCode} ${this.demo.phoneWithCountry} and ${this.demo.phone} :)`,
      },
      onClose: () => {
        this.demo = initialValue;
      },
      showCloseButton: true,
      closeButtonClass: 'text-cyan-400',
    });
  }
}

@Component({
  selector: 'app-alert-modal',
  standalone: true,
  imports: [],
  template: `
    <div
      class="pt-4 overflow-auto max-h-screen md:overflow-hidden bg-white dark:bg-slate-950 dark:text-white md:w-96"
    >
      <div class="px-4">
        <h1 class="font-bold text-xl">{{ title }}</h1>
      </div>
      <p class="px-4 py-2 mt-4 bg-cyan-200 dark:bg-cyan-700">
        ⓘ {{ description }}
      </p>
    </div>
  `,
  styles: '',
})
export class InfoModal {
  // Inputs
  @Input() title!: string;
  @Input() description!: string;
}
