import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'flex h-9 w-full rounded-md border border-[#dddddd] bg-white px-3 py-3 text-sm shadow-sm transition-colors ',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'placeholder:text-[#828282]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6500] focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-[#DC2626] aria-invalid:ring-[#DC2626]',
        className
      )}
      {...props}
    />
  );
}

export { Input };
