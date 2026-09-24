import { useState, type ChangeEvent } from "react";
import { ChatHeader } from "../../components/ChatHeader";
import { MessageList } from "../../components/MessageList";
import { UIInput } from "../../components/ui/UIInput";

export const ChatPage = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  };

  return (
    <div className="h-dvh max-w-183 w-full flex flex-col py-8 overflow-hidden">
      <ChatHeader name={"Илья"} />
      <div className="flex flex-1 min-h-0 items-end flex-col pl-4">
        <MessageList />
        <UIInput
          type="text"
          placeholder="Сообщение"
          classname="mt-4 shrink-0"
          variant="messageInput"
          value={message}
          onChange={handleMessageChange}
        />
      </div>
    </div>
  );
};
