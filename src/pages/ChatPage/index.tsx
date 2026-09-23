import { ChatHeader } from "../../components/ChatHeader";
import { MessageList } from "../../components/MessageList";
import { UIInput } from "../../components/ui/UIInput";

export const ChatPage = () => {
  return (
    <div className="min-h-dvh max-w-183 w-full flex flex-col py-8">
      <ChatHeader name={"Илья"} />
      <div className="flex flex-1 items-end flex-col px-4">
        <MessageList />
        <UIInput
          type="text"
          placeholder="Сообщение"
          classname="h-12! bg-white mt-4"
        />
      </div>
    </div>
  );
};
