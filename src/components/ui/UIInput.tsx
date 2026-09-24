import type { InputHTMLAttributes } from "react";
import cn from "classnames";

interface UIInputProps extends InputHTMLAttributes<HTMLInputElement> {
  classname?: string;
  error?: boolean;
  variant: "formInput" | "messageInput";
}

const variants = {
  formInput: "h-13 bg-input-background",
  messageInput: "h-12 bg-surface",
};

export const UIInput = ({
  classname,
  error,
  variant,
  ...props
}: UIInputProps) => {
  return (
    <div className="w-full">
      <input
        className={cn(
          "px-3 py-1.5 rounded-2xl text-text-primary w-full border focus:outline-none",
          variants[variant],
          error && "border-action-danger focus:border-action-danger",
          !error && "border-transparent focus:border-transparent",
          classname,
        )}
        aria-invalid={Boolean(error)}
        {...props}
      />
    </div>
  );
};
