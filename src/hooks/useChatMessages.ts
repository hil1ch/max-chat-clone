import { useCallback, useEffect, useState } from "react";
import type { IMessageItem } from "../types/messages";
import {
  loadChatMessages,
  saveChatMessages,
} from "../utils/chatMessagesStorage";

export const useChatMessages = (chatId?: string) => {
  const [messages, setMessages] = useState<IMessageItem[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMessages(chatId ? loadChatMessages(chatId) : []);
  }, [chatId]);

  const addMessage = useCallback(
    (message: IMessageItem) => {
      if (!chatId) {
        return;
      }

      setMessages((currentMessages) => {
        const updatedMessages = [...currentMessages, message];
        saveChatMessages(chatId, updatedMessages);
        return updatedMessages;
      });
    },
    [chatId],
  );

  return { messages, addMessage };
};