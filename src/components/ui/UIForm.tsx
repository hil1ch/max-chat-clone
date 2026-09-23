import type { FormHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface UIFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  classname?: string;
}

export const UIForm = ({ children, classname, ...props }: UIFormProps) => {
  return (
    <form
      className={cn(
        "flex h-47.5 flex-col items-center gap-3 max-w-90 w-full",
        classname,
      )}
      {...props}
    >
      {children}
    </form>
  );
};
