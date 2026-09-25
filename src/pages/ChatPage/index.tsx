import { useState, type SyntheticEvent } from "react";
import { ChatHeader } from "../../components/ChatHeader";
import { MessageList } from "../../components/MessageList";
import { UIInput } from "../../components/ui/UIInput";
import { useParams } from "react-router";
import { useChatConfig } from "../../hooks/useChatConfig";
import { useChatMessages } from "../../hooks/useChatMessages";
import { useChatNotifications } from "../../hooks/useChatNotifications";
import { useSendMessage } from "../../hooks/useSendMessage";
import { formatChatPhone } from "../../utils/formatPhoneNumber";

export const ChatPage = () => {
  const [message, setMessage] = useState("");
  const { chatId } = useParams<{ chatId: string }>();
  const chatConfig = useChatConfig(chatId);
  const { messages, addMessage } = useChatMessages(chatId);
  const notificationError = useChatNotifications({
    chatId,
    chatConfig,
    onMessage: addMessage,
  });
  const {
    isSending,
    error: sendError,
    submitMessage,
  } = useSendMessage({
    chatId,
    chatConfig,
    onMessage: addMessage,
  });

  const phone = formatChatPhone(chatId);

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (await submitMessage(message)) {
      setMessage("");
    }
  };

  return (
    <div className="h-dvh max-w-183 w-full flex flex-col py-8 overflow-hidden">
      <ChatHeader name={phone} />
      <div className="flex flex-1 min-h-0 items-end flex-col pl-4">
        <MessageList messages={messages} />
        <form className="w-full" onSubmit={handleSubmit}>
          <UIInput
            type="text"
            placeholder="Сообщение"
            classname="mt-4 shrink-0"
            variant="messageInput"
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
            disabled={!chatConfig || isSending}
          />
          {(sendError || notificationError) && (
            <p className="text-action-danger">
              {sendError || notificationError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
