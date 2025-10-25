# IT360academy Admin Dashboard - Design System

## Overview

This design system provides consistent, accessible, and customizable UI components built with shadcn/ui, Radix UI primitives, and Tailwind CSS.

## Installation & Setup

The design system is already configured and ready to use. All components are located in `src/components/ui/`.

## Core Components

### Button

A versatile button component with multiple variants and sizes.

```jsx
import { Button } from '@/components/ui/button'

// Primary button (default)
<Button>Save Changes</Button>

// Destructive button
<Button variant="destructive">Delete</Button>

// Success button
<Button variant="success">Approve</Button>

// Outline button
<Button variant="outline">Cancel</Button>

// Secondary button
<Button variant="secondary">Secondary</Button>

// Ghost button
<Button variant="ghost">Ghost</Button>

// Link button
<Button variant="link">Link</Button>
```

**Variants:**

- `default` - Primary orange button (#FF6500)
- `destructive` - Red button (#DC2626)
- `success` - Green button (#01857C)
- `outline` - Outlined button
- `secondary` - Gray button (#828282)
- `ghost` - Transparent button
- `link` - Link-style button

**Sizes:**

- `default` - Standard size
- `sm` - Small size
- `lg` - Large size
- `icon` - Square icon button

### Input

A styled input component with consistent styling.

```jsx
import { Input } from '@/components/ui/input'

// Basic input
<Input placeholder="Enter your name" />

// Input with label
<div>
  <label className="text-sm font-medium text-[#373737] mb-2 block">
    Email Address
  </label>
  <Input type="email" placeholder="Enter email" />
</Input>
</div>
```

**Features:**

- Consistent border styling (#dddddd)
- Focus ring with brand color (#FF6500)
- Error states with red styling (#DC2626)
- Placeholder text styling (#828282)

### Dialog

A modal dialog component for overlays and confirmations.

```jsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant='outline'>Cancel</Button>
      <Button variant='destructive'>Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>;
```

### Select

A dropdown select component.

```jsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

<Select>
  <SelectTrigger className='w-[180px]'>
    <SelectValue placeholder='Select a fruit' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value='apple'>Apple</SelectItem>
    <SelectItem value='banana'>Banana</SelectItem>
    <SelectItem value='blueberry'>Blueberry</SelectItem>
    <SelectItem value='grapes'>Grapes</SelectItem>
    <SelectItem value='pineapple'>Pineapple</SelectItem>
  </SelectContent>
</Select>;
```

## Design Tokens

### Colors

```jsx
export const colors = {
  primary: '#FF6500', // Brand orange
  secondary: '#828282', // Gray
  success: '#01857C', // Green
  destructive: '#DC2626', // Red
  background: '#FFFFFF', // White
  foreground: '#373737', // Dark gray
  muted: '#828282', // Muted gray
  border: '#dddddd', // Light gray border
  input: '#dddddd', // Input border
};
```

### Semantic CSS Classes

Instead of hardcoding colors and sizes, use these semantic classes:

#### Text Colors
- `.text-primary` - Main text (`#373737`)
- `.text-secondary` - Secondary text (`#71717A`)
- `.text-muted` - Muted text (`#828282`)
- `.text-muted-light` - Light muted (`#9498A3`)
- `.text-brand` - Brand orange (`#FF6500`)
- `.text-success` - Success green (`#01857C`)
- `.text-destructive` - Error red (`#DC2626`)

#### Text Sizes
- `.text-heading-xl` - Extra large heading (`30px`, bold)
- `.text-heading-lg` - Large heading (`2xl`, bold)
- `.text-heading-md` - Medium heading (`xl`, bold)
- `.text-heading-sm` - Small heading (`lg`, bold)
- `.text-heading-xs` - Extra small heading (`base`, bold)
- `.text-paragraph-lg` - Large paragraph (`lg`, `#4F4F4F`)
- `.text-paragraph-md` - Medium paragraph (`base`, `#4F4F4F`)
- `.text-paragraph-sm` - Small paragraph (`sm`, `#4F4F4F`)
- `.text-paragraph-xs` - Extra small paragraph (`xs`, `#4F4F4F`)

#### Background Colors
- `.bg-primary` - Main background (`#373737`)
- `.bg-secondary` - Secondary background (`#71717A`)
- `.bg-muted` - Muted background (`#828282`)
- `.bg-brand` - Brand orange background (`#FF6500`)
- `.bg-success` - Success green background (`#01857C`)
- `.bg-destructive` - Error red background (`#DC2626`)
- `.bg-light-gray` - Light gray background (`#E0E0E0`)
- `.bg-input-light` - Input light background (`#F3F3F3`)

#### Layout Containers
- `.container-main` - Main content container
- `.container-card` - Card container with shadow and border
- `.container-page` - Full page container

### Typography

- **Font Family**: Lato (font-lato)
- **Font Sizes**: Use semantic classes instead of hardcoded sizes
- **Font Weights**: light, normal, medium, semibold, bold

## Migration Guide

### From HTML Inputs to Design System Inputs

**Before:**

```jsx
<input
  placeholder='Enter Firstname...'
  className='border border-[#dddddd] py-1 text-md rounded w-[350px] p-2'
/>
```

**After:**

```jsx
import { Input } from '@/components/ui/input';

<Input placeholder='Enter Firstname...' className='w-[350px]' />;
```

### From Custom Buttons to Design System Buttons

**Before:**

```jsx
<button className='bg-[#FF6500] font-lato font-bold shadow-md text-white px-6 py-2 rounded hover:bg-[#FF6500] cursor-pointer'>
  Save Changes
</button>
```

**After:**

```jsx
import { Button } from '@/components/ui/button';

<Button>Save Changes</Button>;
```

### From Radix AlertDialog to Design System Dialog

**Before:**

```jsx
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <button>Delete</button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <!-- content -->
  </AlertDialog.Content>
</AlertDialog.Root>
```

**After:**

```jsx
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'

<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </DialogTrigger>
  <DialogContent>
    <!-- content -->
  </DialogContent>
</Dialog>
```

## Best Practices

1. **Consistency**: Always use design system components instead of custom HTML elements
2. **Accessibility**: All components are built with accessibility in mind
3. **Customization**: Use className prop for additional styling when needed
4. **Variants**: Use semantic variants (destructive, success) instead of custom colors
5. **Composition**: Combine components to create complex UI patterns

## File Structure

```
src/
├── components/
│   ├── ui/                 # Design system components
│   │   ├── button.jsx
│   │   ├── input.jsx
│   │   ├── dialog.jsx
│   │   └── select.jsx
│   ├── design-system.js    # Design system exports
│   └── Button.jsx         # Legacy component (updated)
├── lib/
│   └── utils.js           # Utility functions
└── index.css              # Design system CSS variables
```

## Next Steps

1. **Gradual Migration**: Replace HTML inputs and custom buttons with design system components
2. **Component Library**: Add more components as needed (Card, Badge, etc.)
3. **Documentation**: Keep this documentation updated as components evolve
4. **Testing**: Ensure all components work across different browsers and devices
