import type { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface IUIButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classname?: string;
  variant: "primary" | "danger" | "outline";
}

const variants = {
  primary: "bg-[#007aff] text-white hover:bg-[#479fff]",
  danger: "bg-red text-white",
  outline: "border border-[#007aff] bg-transparent text-[#007aff]",
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
        "font-medium cursor-pointer rounded-2xl max-w-84 w-full py-4",
        variants[variant],
        classname,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
