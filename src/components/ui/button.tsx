import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "neuro-button text-gray-700 hover:text-gray-900 active:text-gray-600",
        destructive:
          "bg-red-500 text-white shadow-lg hover:bg-red-600 active:shadow-inner",
        outline:
          "neuro-button border-0 text-gray-700 hover:text-gray-900",
        secondary:
          "neuro-card text-gray-700 hover:text-gray-900",
        ghost: "hover:bg-gray-100 hover:text-gray-900 rounded-xl",
        link: "text-gray-700 underline-offset-4 hover:underline hover:text-gray-900",
      },
      size: {
        default: "h-12 px-6 py-3 rounded-xl",
        sm: "h-10 px-4 py-2 rounded-lg text-xs",
        lg: "h-14 px-8 py-4 rounded-2xl text-base",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }