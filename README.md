# IT360academy Admin Dashboard

A modern React admin dashboard built with Vite, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Design System**: Consistent components and styling throughout
- **Code Quality**: ESLint and Prettier for code formatting and linting

## Development

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Code Formatting

This project uses Prettier for consistent code formatting.

### Available Scripts

```bash
# Format all files
pnpm format

# Check formatting without making changes
pnpm format:check

# Lint code
pnpm lint
```

### VS Code Integration

The project includes VS Code settings for automatic formatting on save. Make sure you have the Prettier extension installed.

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI primitives
- **React Router** - Client-side routing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   └── Shared/         # Shared components
├── pages/              # Page components
├── lib/                # Utilities and constants
└── assets/             # Static assets
```

## Contributing

1. Follow the existing code style
2. Use Prettier for formatting
3. Run ESLint before committing
4. Follow the design system guidelines
