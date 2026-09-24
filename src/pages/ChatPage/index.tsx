import { useEffect, useState, type SyntheticEvent } from "react";
import { ChatHeader } from "../../components/ChatHeader";
import { MessageList } from "../../components/MessageList";
import { UIInput } from "../../components/ui/UIInput";
import { useParams } from "react-router";
import { sendMessage } from "../../api/messages";
import { STORAGE_KEYS } from "../../constants/storage";
import type { MessageItem } from "../../types/messages";

interface ChatConfig {
  idInstance: string;
  apiTokenInstance: string;
}

export const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [chatConfig, setChatConfig] = useState<ChatConfig | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const { chatId } = useParams<{ chatId: string }>();

  const phone = chatId?.replace("@c.us", "").replace(/^7/, "+7") ?? "";

  useEffect(() => {
    if (!chatId) {
      return;
    }

    const savedConfig = sessionStorage.getItem(
      `${STORAGE_KEYS.chatConfig}:${chatId}`,
    );

    if (!savedConfig) {
      return;
    }

    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChatConfig(JSON.parse(savedConfig) as ChatConfig);
    } catch {
      setChatConfig(null);
    }
  }, [chatId]);

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!chatId || !chatConfig || !trimmedMessage || isSending) {
      return;
    }

    setIsSending(true);
    setSendError("");

    try {
      await sendMessage({
        apiUrl: import.meta.env.VITE_API_URL,
        ...chatConfig,
        chatId,
        message: trimmedMessage,
      });
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: crypto.randomUUID(),
          text: trimmedMessage,
          time: new Date().toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setMessage("");
    } catch (error) {
      setSendError(
        error instanceof Error
          ? error.message
          : "Не удалось отправить сообщение",
      );
    } finally {
      setIsSending(false);
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
          {sendError && <p className="text-action-danger">{sendError}</p>}
        </form>
      </div>
    </div>
  );
};
