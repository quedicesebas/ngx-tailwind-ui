# Angular Tailwind UI

A collection of easy-to-use Angular components, directives, and services built with Angular and Tailwind CSS. The library packages are fully compatible with both **Tailwind CSS v3 (using library version 7.0.0)** and **Tailwind CSS v4 (using library version 7.1.0+)**. This library provides a set of modern, accessible, and customizable UI components that follow best practices and integrate seamlessly with your Angular applications.

## ✨ Features

- 🎨 **Modern Design**: Built to integrate seamlessly with Tailwind CSS v3 and v4 for beautiful, responsive components
- 🚀 **Angular 19 Ready**: Fully compatible with the latest Angular version
- ♿ **Accessibility First**: All components follow WCAG guidelines
- 🌙 **Dark Mode Support**: Built-in dark mode support for all components
- 📱 **Responsive**: Mobile-first approach with desktop optimizations
- 🎯 **Type-Safe**: Full TypeScript support with comprehensive type definitions
- 🔧 **Customizable**: Easy to customize with TailwindCSS classes
- ⚡ **Performance**: Optimized for fast loading and smooth interactions
- 📦 **Modular**: Install only what you need
- 🛠️ **Developer Experience**: Built with developer productivity in mind

## 📦 Packages

### [Bottom Sheet Modal](https://github.com/quedicesebas/ngx-tailwind-ui/blob/main/projects/bottom-sheet-modal/README.md)

A responsive bottom sheet modal that adapts to screen size:

- 📱 Displays as bottom sheet on mobile
- 💻 Shows as modal dialog on desktop
- 🔄 Smooth animations and transitions
- 🎨 Customizable styling with TailwindCSS

```bash
npm install @ngx-tailwind-ui/bottom-sheet-modal
```

![Bottom Sheet Modal Demo](https://raw.githubusercontent.com/quedicesebas/ngx-tailwind-ui/main/projects/bottom-sheet-modal/demo.gif)

### [Toast](https://github.com/quedicesebas/ngx-tailwind-ui/blob/main/projects/toast/README.md)

A flexible toast notification system:

- 📝 Multiple types (info, success, warning, error)
- ⏱️ Configurable duration
- 🎨 Visual feedback with icons
- 🔄 Progress bar support
- 🎯 Dismissible notifications

```bash
npm install @ngx-tailwind-ui/toast
```

### [Phone Numbers](https://github.com/quedicesebas/ngx-tailwind-ui/blob/main/projects/phonenumbers/README.md)

A comprehensive phone number handling solution:

- 🔍 Validation using Google's libphonenumber
- 🌍 Automatic country code detection
- 📱 Formatting to international/national format
- 🔄 Two-way binding support
- ♿ Accessibility features

```bash
npm install @ngx-tailwind-ui/phonenumbers
```

## 🎮 Demo

View the live [demo](https://stackblitz.com/edit/ngx-tailwind-ui) to see all components in action.

## 🛠️ Prerequisites

- Angular 17+ project
- Tailwind CSS (v3 or v4) configured in your project
- Package-specific prerequisites (such as Angular animations)

## 🚀 Quick Start

1. Install the package(s) you need:

```bash
npm install @ngx-tailwind-ui/bottom-sheet-modal @ngx-tailwind-ui/toast @ngx-tailwind-ui/phonenumbers
```

2. Import the components in your Angular application:

```typescript
import { TauiBottomSheetModalComponent } from "@ngx-tailwind-ui/bottom-sheet-modal";
import { TauiToastComponent } from "@ngx-tailwind-ui/toast";
import { TauiPhonenumbersDirective } from "@ngx-tailwind-ui/phonenumbers";
```

3. Configure Tailwind CSS to scan the library files for utility classes:

### For Tailwind CSS v4 (Recommended)
Add `@source` directives to your main stylesheet (e.g. `src/styles.scss` or `src/styles.css`):

```css
@import "tailwindcss";

@source "../node_modules/@ngx-tailwind-ui/**/*.{html,ts,js,mjs}";
```

### For Tailwind CSS v3
Add the library path to the `content` array in your `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/@ngx-tailwind-ui/**/*.{html,ts,js,mjs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 🌐 Browser Support

All components are tested and supported on:

- Chrome (latest)
- Safari (latest)
- Edge (latest)

## ⚡ Performance Considerations

- **Change Detection**: Optimized to minimize change detection cycles
- **Lazy Loading**: Supports lazy loading for better initial load performance
- **Bundle Size**: Minimal impact on bundle size
- **Memory Usage**: Efficient memory management

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTE.md](CONTRIBUTE.md) for guidelines on how to get started and contribute to this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/quedicesebas/ngx-tailwind-ui/main/LICENSE) file for details.
