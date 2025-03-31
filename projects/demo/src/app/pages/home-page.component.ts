import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
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
      </ol>
    </nav>
    <section class="dark:text-slate-300">
      <h1 class="text-3xl border-b border-black pb-2 mb-4">
        Angular Tailwind UI
      </h1>
      <p class="py-2">
        Easy to use and simple components, directives and services. Using last
        Angular and TailwindCSS versions.
      </p>
      <p class="font-semibold py-2">Go and see the demos:</p>
      <ul
        class="list-inside list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')]"
      >
        <li class="py-2 px-4">
          <a routerLink="/bottom-sheeet-modal"
            >Bottom sheet modal
            <small class="opacity-75"
              >&#64;ngx-tailwind-ui/bottom-sheet-modal</small
            ></a
          >
        </li>
        <li class="py-2 px-4">
          <a routerLink="/toast"
            >Toast
            <small class="opacity-75">&#64;ngx-tailwind-ui/toast</small></a
          >
        </li>
        <li class="py-2 px-4">
          <a routerLink="/phonenumbers"
            >Prone numbers
            <small class="opacity-75"
              >&#64;ngx-tailwind-ui/phonenumbers</small
            ></a
          >
        </li>
      </ul>
    </section>
  `,
  styles: ``,
})
export class HomePageComponent {}
