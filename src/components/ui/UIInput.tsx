import cn from "classnames";

interface UIInput {
  classname?: string;
  type: string;
  placeholder: string;
  onChange?: () => void;
}

export const UIInput = ({
  classname,
  type,
  placeholder,
  onChange,
}: UIInput) => {
  return (
    <input
      className={cn(
        "px-3 py-1.5 rounded-2xl text-[#060708] bg-[#0909090d] w-full h-13 focus:border-transparent focus:outline-none",
        classname,
      )}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};
