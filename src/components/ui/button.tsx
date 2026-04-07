import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(139,92,246,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
      className
    )}
    {...props}
  />
));

Button.displayName = 'Button';

export { Button };
