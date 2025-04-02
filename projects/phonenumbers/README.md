# 📱 @ngx-tailwind-ui/phonenumbers

A powerful Angular directive for phone number validation and formatting using the [Google libphonenumber library](https://github.com/google/libphonenumber). This package provides a seamless way to handle phone number inputs in your Angular applications with built-in validation, formatting, and accessibility features.

## ✨ Features

- 🔍 **Smart Validation**: Robust validation using Google's libphonenumber library
- 🌍 **Country Code Detection**: Automatic detection and formatting of country codes
- 📱 **Formatting Options**: Format to international or national format
- 🔄 **Two-Way Binding**: Seamless integration with Angular's template-driven forms
- ♿ **Accessibility**: ARIA labels and keyboard navigation support
- 🎨 **Dark Mode**: Built-in support for dark mode themes
- 🎯 **Error Handling**: Clear validation errors and feedback
- 🔧 **Customizable**: Easy to integrate and customize

## 🎮 Demo

View the live [demo](https://stackblitz.com/edit/ngx-tailwind-ui) to see the component in action.

## 🛠️ Prerequisites

- Angular 17+ project
- TailwindCSS 3 configured in your project
- Angular forms

## 📦 Installation

```bash
npm install @ngx-tailwind-ui/phonenumbers
```

## 🚀 Usage

### 1. Import the Directive

Add the `TauiPhonenumbersDirective` to your component imports. If you're using template-driven forms, also import `FormsModule`:

```typescript
import { FormsModule } from '@angular/forms';
import { TauiPhonenumbersDirective } from '@ngx-tailwind-ui/phonenumbers';

@Component({
  // ...
  imports: [FormsModule, TauiPhonenumbersDirective],
})
```

### 2. Use in Template

Add the directive to your input field:

```html
<input type="tel" phonenumber defaultCountryCode="+1" [countryCodeControl]="countryCodeControl" [(ngModel)]="phoneNumber" />
```

## 📚 API Reference

### Inputs

| Input                | Type            | Required | Description                                                                                          |
| -------------------- | --------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| `defaultCountryCode` | string          | No       | Sets the default country code for the input (e.g., "+1" for US). Can include or omit the '+' prefix. |
| `countryCodeControl` | AbstractControl | No       | Binds the country code to a form control for two-way binding support.                                |

### Validation

The directive automatically adds the following validators:

- `required`: Ensures the input is not empty
- `phoneNumber`: Validates the phone number format using libphonenumber

### Error Messages

The directive provides built-in error messages for:

- Required field validation: "Phone number is required"
- Invalid phone number format: "Please enter a valid phone number"

## 💡 Examples

### Basic Usage

Simple phone number input with default country code:

```html
<input type="tel" phonenumber defaultCountryCode="+1" [(ngModel)]="phoneNumber" />
```

### With Country Code Control

Split input for country code and phone number:

```html
<div class="flex gap-2">
  <!-- Country code input -->
  <input type="text" [(ngModel)]="countryCode" readonly class="w-20" />

  <!-- Phone number input -->
  <input type="tel" phonenumber defaultCountryCode="+57" [countryCodeControl]="countryCodeControl" [(ngModel)]="phoneNumber" />
</div>
```

### With Form Validation

Complete form example with validation and error messages:

```html
<form #phoneForm="ngForm">
  <input type="tel" name="phone" phonenumber defaultCountryCode="+57" [(ngModel)]="phoneNumber" required #phone="ngModel" />

  <div *ngIf="phone.invalid && (phone.dirty || phone.touched)">
    <div *ngIf="phone.errors?.['required']">Phone number is required</div>
    <div *ngIf="phone.errors?.['phoneNumber']">Please enter a valid phone number</div>
  </div>

  <button type="submit" [disabled]="!phoneForm.valid">Submit</button>
</form>
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
  - @angular/forms: ^19.2.0
  - awesome-phonenumber: ^7.2.0
- **Runtime Dependencies**:
  - tslib: ^2.3.0

## ⚡ Performance Considerations

- **Change Detection**: Optimized to minimize change detection cycles
- **Validation**: Efficient phone number validation
- **Bundle Size**: Minimal impact on bundle size
- **Memory Usage**: Efficient memory management

## ♿ Accessibility

The component includes built-in accessibility features:

- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Mobile-friendly input

## 🤝 Contributing

Contributions are welcome!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://raw.githubusercontent.com/quedicesebas/ngx-tailwind-ui/main/LICENSE) file for details.
