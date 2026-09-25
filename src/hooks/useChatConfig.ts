import { useState, useEffect } from "react";
import type { IChatConfig } from "../types/chat";
import { loadChatConfig } from "../utils/chatConfigStorage";

export const useChatConfig = (chatId?: string) => {
  const [chatConfig, setChatConfig] = useState<IChatConfig | null>(null);

  useEffect(() => {
    if (!chatId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChatConfig(null);
      return;
    }
    setChatConfig(loadChatConfig(chatId));
  }, [chatId]);

  return chatConfig;
};
