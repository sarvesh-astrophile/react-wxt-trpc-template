# React WXT Chrome Extension

A modern Chrome extension built with React 18, TypeScript, tRPC, and WXT framework. This extension demonstrates best practices for building type-safe, scalable Chrome extensions with a React-based popup UI.

## 🚀 Features

- **Type-safe communication** between extension components using tRPC
- **Modern React 18** with hooks and concurrent features
- **TailwindCSS** for utility-first styling
- **Shadcn UI components** for consistent design system
- **Chrome Extension Manifest V3** compliance
- **Hot reload** development experience with WXT
- **End-to-end type safety** from popup to background script

## 🛠️ Technology Stack

- **Framework**: [WXT](https://wxt.dev/) - Modern web extension framework
- **UI Library**: React 18 with TypeScript
- **Styling**: TailwindCSS + Shadcn UI components
- **Type Safety**: TypeScript 5.x with strict mode
- **API Layer**: tRPC for type-safe communication
- **Package Manager**: Bun
- **Code Quality**: Biome for linting and formatting

## 📁 Project Structure

```
simple-chrome-extension-wxt/
├── entrypoints/              # Extension entry points
│   ├── background.ts       # Service worker/background script
│   ├── content.ts           # Content script for web page injection
│   └── popup/               # Extension popup UI (React app)
├── src/                     # Shared source code
│   ├── components/        # Reusable React components
│   ├── trpc/               # tRPC client and routers
│   ├── lib/               # Shared utilities
│   └── types/             # TypeScript definitions
├── public/                # Static assets and icons
└── assets/                # Source assets
```

## 🚦 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) package manager
- Chrome browser for testing

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd simple-chrome-extension-wxt
```

2. Install dependencies:
```bash
bun install
```

3. Start development server:
```bash
bun dev
```

4. Load the extension in Chrome:
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select `.output/chrome-mv3-dev/`

## 🧪 Development Commands

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server with hot reload |
| `bun build` | Build extension for production |
| `bun preview` | Preview built extension |
| `bun zip` | Create extension package for store submission |

## 🔧 Core Components

### Background Script (`entrypoints/background.ts`)
- Service worker for extension lifecycle management
- Handles storage operations and cross-origin requests
- Manages extension-wide state

### Content Script (`entrypoints/content.ts`)
- Injected into web pages
- Enables DOM manipulation and page interaction
- Communicates with background script

### Popup UI (`entrypoints/popup/`)
- React-based popup interface
- Uses tRPC for type-safe communication with background
- Shadcn UI components for consistent styling

## 📡 tRPC Integration

The extension uses tRPC for type-safe communication between components:

- **Client**: `src/trpc/client.ts` - tRPC client setup
- **Routers**: `src/trpc/routers/` - Procedure definitions
- **Types**: Shared types between client and server

Example usage in popup:
```typescript
const { data: tabs } = trpc.tabs.list.useQuery();
const { mutate: updateStorage } = trpc.storage.update.useMutation();
```

## 🎨 Styling

### TailwindCSS (v4) Setup & Usage

This project uses TailwindCSS v4 with the official Vite plugin, already wired into WXT.

- **Plugin configuration** (`wxt.config.ts`):

```ts
import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
```

- **Global stylesheet** (`src/styles/globals.css`):

```css
@import "tailwindcss";
```

- **Import globals in UI entrypoints** (popup example `entrypoints/popup/main.tsx`):

```ts
import '/src/styles/globals.css';
```

- **Using utilities in components**:

```tsx
export default function ButtonExample() {
  return (
    <button className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
      Click
    </button>
  );
}
```

Notes for Tailwind v4:
- No `tailwind.config.js` is required by default; the plugin handles configuration.
- Content scanning configuration is not needed.
- Use responsive and state variants (`sm:`, `md:`, `hover:`, `focus:`) as usual.
- Dark mode: use `dark:` modifiers; to force dark mode in the popup, toggle the `dark` class on `document.documentElement`.

### Shadcn UI

- Shadcn components are styled with Tailwind utilities and work out of the box.
- Prefer Tailwind utilities for layout/spacing; keep component-level overrides minimal in `entrypoints/popup/App.css`.
- Refer to the Shadcn documentation for component usage and customization.

## 🧪 Testing

Run tests with:
```bash
bun test
```

## 🚀 Building for Production

```bash
bun build
```

The built extension will be in `.output/chrome-mv3/` ready for Chrome Web Store submission.

## 📦 Chrome Web Store Submission

1. Build the extension: `bun build`
2. Create package: `bun zip`
3. Upload the generated `.zip` file to Chrome Web Store Developer Dashboard

## 🔒 Permissions

The extension uses minimal required permissions:
- `storage` - For storing extension data
- `activeTab` - For current tab access
- `tabs` - For tab management features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make changes and test thoroughly
4. Commit changes: `git commit -am 'Add feature'`
5. Push to branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- [WXT Documentation](https://wxt.dev/)
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/mv3/)
- [tRPC Documentation](https://trpc.io/)

## 🔄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and updates.
