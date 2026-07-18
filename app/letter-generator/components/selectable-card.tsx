'use client';

import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

interface SelectableCardProps {
  value: string;
  label: string;
  description?: string;
}

export function SelectableCard({ value, label, description }: SelectableCardProps) {
  return (
    <RadioGroupPrimitive.Item
      value={value}
      className={cn(
        'relative cursor-pointer rounded-lg p-3.5 text-left transition-all duration-200',
        'border border-transparent bg-white hover:bg-neutral/10',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        'data-[state=checked]:border-accent data-[state=checked]:bg-accent-light data-[state=checked]:shadow-md',
      )}
    >
      <span
        aria-hidden="true"
        className="absolute top-3 right-3 flex h-4 w-4 items-center justify-center rounded-full border border-muted-foreground/50 bg-white"
      >
        <RadioGroupPrimitive.Indicator className="h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="block space-y-1 pr-7">
        <span className="block text-sm font-medium text-foreground">{label}</span>
        {description && (
          <span className="block text-sm text-muted-foreground/90 leading-relaxed">
            {description}
          </span>
        )}
      </span>
    </RadioGroupPrimitive.Item>
  );
}
