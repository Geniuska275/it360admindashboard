// Design System Components
// This file exports all the custom components for the IT360academy Admin Dashboard

// Core UI Components
export { Button, buttonVariants } from './ui/button';
export { Input } from './ui/input';
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

// Design System Colors
export const colors = {
  primary: '#FF6500',
  secondary: '#828282',
  success: '#01857C',
  destructive: '#DC2626',
  background: '#FFFFFF',
  foreground: '#373737',
  muted: '#828282',
  border: '#dddddd',
  input: '#dddddd',
};

// Design System Typography
export const typography = {
  fontFamily: {
    sans: 'font-lato',
  },
  fontSize: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  },
  fontWeight: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
};

// Design System Spacing
export const spacing = {
  xs: 'p-1',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
};

// Design System Shadows
export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
};

// Component Usage Examples
export const examples = {
  button: `
    // Primary button
    <Button>Save Changes</Button>
    
    // Destructive button
    <Button variant="destructive">Delete</Button>
    
    // Success button
    <Button variant="success">Approve</Button>
    
    // Outline button
    <Button variant="outline">Cancel</Button>
  `,

  input: `
    // Basic input
    <Input placeholder="Enter your name" />
    
    // Input with label
    <div>
      <label className="text-sm font-medium text-[#373737] mb-2 block">
        Email Address
      </label>
      <Input type="email" placeholder="Enter email" />
    </div>
  `,

  dialog: `
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  `,
};
