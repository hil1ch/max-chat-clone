import { Message } from "../Message";
import type { MessageItem } from "../../types/messages";

interface MessageListProps {
  messages: MessageItem[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="chat-scrollbar w-full flex-1 min-h-0 overflow-y-auto pr-2">
      <div className="min-h-full flex flex-col justify-end items-end">
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </div>
    </div>
  );
};
