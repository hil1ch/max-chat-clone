import { ChatHeader } from "../../components/ChatHeader";
import { MessageList } from "../../components/MessageList";
import { UIInput } from "../../components/ui/UIInput";

export const ChatPage = () => {
  return (
    <div className="h-dvh max-w-183 w-full flex flex-col py-8 overflow-hidden">
      <ChatHeader name={"Илья"} />
      <div className="flex flex-1 min-h-0 items-end flex-col pl-4">
        <MessageList />
        <UIInput
          type="text"
          placeholder="Сообщение"
          classname="h-12! bg-white mt-4 shrink-0"
        />
      </div>
    </div>
  );
};
