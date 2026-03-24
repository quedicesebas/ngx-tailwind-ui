# Contributing to ngx-tailwind-ui

Thank you for your interest in contributing to `ngx-tailwind-ui`! This project is a workspace that contains 3 Angular libraries and a demo application.

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v24 or higher)
- [npm](https://www.npmjs.com/) (v10 or higher)
- Angular CLI (`npm install -g @angular/cli`)

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/quedicesebas/ngx-tailwind-ui.git
   cd ngx-tailwind-ui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 📂 Project Structure

The repository is organized as an Angular workspace:

- `projects/bottom-sheet-modal`: Responsive bottom sheet component.
- `projects/toast`: Flexible toast notification system.
- `projects/phonenumbers`: Phone number handling and validation.
- `projects/demo`: Demo application to test and showcase the libraries.

## 💻 Development Workflow

### 1. Running the Demo Application
The easiest way to develop is by running the demo application, which uses the libraries in real-time:
```bash
npm start
```
The application will be available at `http://localhost:4200/`.

### 2. Building the Libraries
To build all libraries at once:
```bash
npm run build:all
```
To build a specific library (e.g., toast):
```bash
ng build toast
```

### 4. Versioning and Releases
The project uses independent versioning for each library. To increment versions:

- **All libraries**: `npm run release:all <patch|minor|major>`
- **Specific library**: `npm run release:<library-name> <patch|minor|major>`
  - Example: `npm run release:toast patch`

These commands update the `package.json` files without creating git tags. Once you push the changes to `main`, the CI/CD pipeline will automatically publish the updated libraries to npm and create GitHub Releases.

## 🤝 How to Contribute

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-fix-name
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```bash
   git commit -m "feat: descriptive message about your change"
   ```
5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request** against the `main` branch.

## ✨ Code Style

- Follow the [Angular Style Guide](https://angular.io/guide/styleguide).
- Use **Tailwind CSS** for all styling.
- Ensure your code is properly documented and tested.

---

Thank you for helping make `ngx-tailwind-ui` better!
