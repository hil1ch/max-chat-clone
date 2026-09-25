import { STORAGE_KEYS } from "../constants/storage";
import type { IMessageItem } from "../types/messages";

const getMessagesKey = (chatId: string) =>
  `${STORAGE_KEYS.messages}:${chatId}`;

const isMessageItem = (value: IMessageItem) => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const message = value;

  return (
    typeof message.id === "string" &&
    typeof message.text === "string" &&
    typeof message.time === "string" &&
    (message.isIncoming === undefined ||
      typeof message.isIncoming === "boolean")
  );
};

export const loadChatMessages = (chatId: string): IMessageItem[] => {
  const savedMessages = localStorage.getItem(getMessagesKey(chatId));

  if (!savedMessages) {
    return [];
  }

  try {
    const parsedMessages: IMessageItem = JSON.parse(savedMessages);

    return Array.isArray(parsedMessages)
      ? parsedMessages.filter(isMessageItem)
      : [];
  } catch {
    return [];
  }
};

export const saveChatMessages = (
  chatId: string,
  messages: IMessageItem[],
) => {
  localStorage.setItem(getMessagesKey(chatId), JSON.stringify(messages));
};
