import { type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn('rounded-xl border border-white/10 bg-card/80 p-6 backdrop-blur-sm', className)}
      {...props}
    />
  );
}
