import type { IMessageItem } from "../../types/messages";
import cn from "classnames";

export const Message = ({ text, time, isIncoming }: IMessageItem) => {
  return (
    <div
      className={cn(
        "relative pt-2 px-2.5 pb-2.5 bg-message-background max-w-3/4 w-fit mb-1 flex rounded-2xl text-left text-message-text",
        isIncoming ? "self-start bg-surface" : "self-end",
      )}
    >
      <p className="wrap-break-word whitespace-pre-wrap after:inline-block after:h-(--metaHeight) after:w-8 after:content-['']">
        {text}
      </p>
      <span className="text-message-meta text-[11px] absolute bottom-1 right-2.5">
        {time}
      </span>
    </div>
  );
};
