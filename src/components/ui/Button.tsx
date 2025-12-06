"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { getSoundManager } from "@/lib/soundEffects";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_10px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]",
                destructive: "bg-red-500 text-destructive-foreground hover:bg-red-500/90",
                outline: "border border-primary/50 bg-background hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                neon: "bg-transparent border border-primary text-primary shadow-[0_0_5px_rgba(6,182,212,0.5),inset_0_0_5px_rgba(6,182,212,0.2)] hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.8),inset_0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, onClick, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            // Play button click sound
            const soundManager = getSoundManager();
            soundManager.playButtonClick();

            // Call original onClick if provided
            if (onClick) {
                onClick(e);
            }
        };

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                onClick={handleClick}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
