import cn from "classnames";

interface UIInput {
  classname?: string;
  type: string;
  placeholder: string;
  variant: "formInput" | "messageInput";
  onChange?: () => void;
}

const variants = {
  formInput: "h-13 bg-input-background",
  messageInput: "h-12 bg-surface",
};

export const UIInput = ({
  classname,
  type,
  placeholder,
  variant,
  onChange,
}: UIInput) => {
  return (
    <input
      className={cn(
        "px-3 py-1.5 rounded-2xl text-text-primary w-full focus:border-transparent focus:outline-none",
        variants[variant],
        classname,
      )}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};
