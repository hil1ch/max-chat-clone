import type { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface IUIButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classname?: string;
  variant: "primary" | "danger" | "outline";
}

const variants = {
  primary: "bg-action-primary text-on-action hover:bg-action-primary-hover",
  danger: "bg-action-danger text-on-action",
  outline: "border border-action bg-transparent text-action-primary",
};

export const UIButton = ({
  children,
  classname,
  variant,
  ...props
}: IUIButton) => {
  return (
    <button
      className={cn(
        "font-medium cursor-pointer rounded-2xl w-full py-4",
        variants[variant],
        classname,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
