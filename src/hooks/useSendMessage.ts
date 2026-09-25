import { useState } from "react";
import { sendMessage } from "../api/messages";
import type { IChatConfig } from "../types/chat";
import type { IMessageItem } from "../types/messages";
import { formatTime } from "../utils/formatTime";

interface IUseSendMessageParams {
  chatId?: string;
  chatConfig: IChatConfig | null;
  onMessage: (message: IMessageItem) => void;
}

export const useSendMessage = ({
  chatId,
  chatConfig,
  onMessage,
}: IUseSendMessageParams) => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const submitMessage = async (message: string) => {
    const trimmedMessage = message.trim();

    if (!chatId || !chatConfig || !trimmedMessage || isSending) {
      return false;
    }

    setIsSending(true);
    setError("");

    try {
      await sendMessage({
        apiUrl: import.meta.env.VITE_API_URL,
        ...chatConfig,
        chatId,
        message: trimmedMessage,
      });
      onMessage({
        id: crypto.randomUUID(),
        text: trimmedMessage,
        time: formatTime(new Date()),
      });
      return true;
    } catch (sendError) {
      setError(
        sendError instanceof Error
          ? sendError.message
          : "Не удалось отправить сообщение",
      );
      return false;
    } finally {
      setIsSending(false);
    }
  };

  return { isSending, error, submitMessage };
};