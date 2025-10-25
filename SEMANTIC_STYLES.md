# Semantic Style System

This document outlines the semantic CSS classes available throughout the application. These classes provide consistent, maintainable styling without hardcoding colors and sizes.

## Text Colors

### Primary Colors
- `.text-primary` - Main text color (`#373737`)
- `.text-secondary` - Secondary text color (`#71717A`)
- `.text-muted` - Muted text color (`#828282`)
- `.text-muted-light` - Light muted text color (`#9498A3`)

### Brand Colors
- `.text-brand` - Brand orange (`#FF6500`)
- `.text-success` - Success green (`#01857C`)
- `.text-destructive` - Error red (`#DC2626`)
- `.text-white` - White text

## Background Colors

### Primary Backgrounds
- `.bg-primary` - Main background (`#373737`)
- `.bg-secondary` - Secondary background (`#71717A`)
- `.bg-muted` - Muted background (`#828282`)
- `.bg-light-gray` - Light gray background (`#E0E0E0`)
- `.bg-border` - Border color background (`#dddddd`)

### Brand Backgrounds
- `.bg-brand` - Brand orange background (`#FF6500`)
- `.bg-success` - Success green background (`#01857C`)
- `.bg-destructive` - Error red background (`#DC2626`)

## Text Sizes

### Headings
- `.text-heading-xl` - Extra large heading (`30px`, bold)
- `.text-heading-lg` - Large heading (`2xl`, bold)
- `.text-heading-md` - Medium heading (`xl`, bold)
- `.text-heading-sm` - Small heading (`lg`, bold)
- `.text-heading-xs` - Extra small heading (`base`, bold)

### Paragraphs
- `.text-paragraph-lg` - Large paragraph (`lg`, `#4F4F4F`)
- `.text-paragraph-md` - Medium paragraph (`base`, `#4F4F4F`)
- `.text-paragraph-sm` - Small paragraph (`sm`, `#4F4F4F`)
- `.text-paragraph-xs` - Extra small paragraph (`xs`, `#4F4F4F`)
- `.text-caption` - Caption text (`xs` with muted color)

## Border Colors

- `.border-primary` - Primary border (`#373737`)
- `.border-secondary` - Secondary border (`#71717A`)
- `.border-muted` - Muted border (`#828282`)
- `.border-brand` - Brand border (`#FF6500`)
- `.border-light` - Light border (`#dddddd`)

## Spacing

- `.spacing-xs` - Extra small padding (`p-1`)
- `.spacing-sm` - Small padding (`p-2`)
- `.spacing-md` - Medium padding (`p-4`)
- `.spacing-lg` - Large padding (`p-6`)
- `.spacing-xl` - Extra large padding (`p-8`)

## Layout Containers

- `.container-main` - Main content container (`mx-5 bg-white h-screen overflow-y-scroll`)
- `.container-card` - Card container (`bg-white rounded-lg shadow-sm border border-light`)
- `.container-page` - Page container (`min-h-screen bg-gray-50`)

## Usage Examples

### Before (Hardcoded)
```jsx
<h1 className='text-[30px] my-5 font-bold'>Title</h1>
<p className='text-[#9498A3]'>Description</p>
<div className='bg-[#E0E0E0] w-8 h-8 rounded'>Button</div>
```

### After (Semantic)
```jsx
<h1 className='text-heading-xl my-5'>Title</h1>
<p className='text-muted-light'>Description</p>
<div className='bg-light-gray w-8 h-8 rounded'>Button</div>
```

## Benefits

1. **Consistency**: All components use the same color palette
2. **Maintainability**: Change colors in one place (index.css)
3. **Readability**: Semantic names are self-documenting
4. **Scalability**: Easy to add new semantic classes
5. **Design System**: Enforces design consistency across the app

## Migration Guide

When updating existing components:

1. Replace hardcoded colors with semantic classes
2. Replace hardcoded text sizes with semantic sizes
3. Use container classes for common layouts
4. Maintain the same visual appearance while improving maintainability

## Adding New Classes

To add new semantic classes, update the `@layer components` section in `src/index.css`:

```css
@layer components {
  .your-new-class {
    @apply your-tailwind-classes;
  }
}
```
