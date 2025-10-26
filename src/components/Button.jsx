import React from 'react';
import { Button as ShadcnButton } from './ui/button';

function Button({
  children,
  onClick,
  width,
  variant = 'default',
  size = 'default',
}) {
  return (
    <ShadcnButton
      variant={variant}
      size={size}
      onClick={onClick}
      className={width ? `w-[${width}]` : ''}
    >
      {children}
    </ShadcnButton>
  );
}

export default Button;
