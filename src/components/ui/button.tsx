import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-white shadow-sm hover:bg-[var(--color-primary-dark)] focus-visible:ring-[var(--color-primary)]/30 dark:bg-[var(--color-primary-light)] dark:hover:bg-[var(--color-primary)] dark:text-white",
        destructive:
          "bg-[var(--color-error)] text-white shadow-sm hover:bg-[var(--color-error)]/90 focus-visible:ring-[var(--color-error)]/30 dark:bg-[var(--color-error)]/90 dark:hover:bg-[var(--color-error)] dark:text-white",
        outline:
          "border-2 border-[var(--color-border)] bg-transparent shadow-sm hover:bg-[var(--color-background-muted)] hover:text-[var(--color-text)] focus-visible:ring-[var(--color-primary)]/30 dark:border-[var(--color-border-dark)] dark:hover:bg-[var(--color-background-alt)] dark:hover:text-white dark:text-[var(--color-text-muted)]",
        secondary:
          "bg-[var(--color-secondary)] text-white shadow-sm hover:bg-[var(--color-secondary-dark)] focus-visible:ring-[var(--color-secondary)]/30 dark:bg-[var(--color-secondary-light)] dark:hover:bg-[var(--color-secondary)] dark:text-white",
        ghost:
          "hover:bg-[var(--color-background-muted)] hover:text-[var(--color-text)] focus-visible:ring-[var(--color-primary)]/30 dark:hover:bg-[var(--color-background-alt)] dark:hover:text-white dark:text-[var(--color-text-muted)]",
        link: "text-[var(--color-primary)] underline-offset-4 hover:underline hover:text-[var(--color-primary-dark)] focus-visible:ring-[var(--color-primary)]/30 dark:text-[var(--color-primary-light)] dark:hover:text-[var(--color-primary)]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-6 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }), "cursor-pointer")}
      {...props}
    />
  );
}

export { Button, buttonVariants };
