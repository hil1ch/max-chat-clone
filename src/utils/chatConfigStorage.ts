import { STORAGE_KEYS } from "../constants/storage";
import type { IChatConfig } from "../types/chat";

const getChatConfigKey = (chatId: string) =>
  `${STORAGE_KEYS.chatConfig}:${chatId}`;

const isChatConfig = (value: unknown): value is IChatConfig => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const config = value as Record<string, unknown>;

  return (
    typeof config.idInstance === "string" &&
    typeof config.apiTokenInstance === "string"
  );
};

export const loadChatConfig = (chatId: string): IChatConfig | null => {
  const savedConfig = sessionStorage.getItem(getChatConfigKey(chatId));

  if (!savedConfig) {
    return null;
  }

  try {
    const parsedConfig: unknown = JSON.parse(savedConfig);
    return isChatConfig(parsedConfig) ? parsedConfig : null;
  } catch {
    return null;
  }
};

export const saveChatConfig = (chatId: string, config: IChatConfig) => {
  sessionStorage.setItem(getChatConfigKey(chatId), JSON.stringify(config));
};