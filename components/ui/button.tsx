"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkProps = BaseProps & { href: string; type?: never };
type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-white text-brand border border-brand/25 hover:border-brand",
  ghost: "bg-transparent text-slate-700 hover:text-brand"
};

const common =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-500 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50";

export function Button(props: LinkProps | NativeButtonProps) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(common, variants[variant], className);

  if ("href" in props) {
    return (
      <motion.div whileTap={{ scale: 0.98 }}>
        <Link href={props.href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button whileTap={{ scale: 0.98 }} className={classes} {...props}>
      {children}
    </motion.button>
  );
}
