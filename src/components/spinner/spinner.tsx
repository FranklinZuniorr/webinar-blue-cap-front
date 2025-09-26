import React, { HTMLAttributes } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {}

export const Spinner = ({ className = '', ...props }: SpinnerProps) => {
  return <div className={`pi pi-spin pi-spinner ${className}`} {...props} />;
};
