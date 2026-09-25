import { useEffect, useState } from "react";
import { deleteNotification, receiveNotification } from "../api/notifications";
import type { IChatConfig } from "../types/chat";
import type { IMessageItem } from "../types/messages";
import { formatTime } from "../utils/formatTime";

interface IUseChatNotificationsParams {
  chatId?: string;
  chatConfig: IChatConfig | null;
  onMessage: (message: IMessageItem) => void;
}

export const useChatNotifications = ({
  chatId,
  chatConfig,
  onMessage,
}: IUseChatNotificationsParams) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (!chatId || !chatConfig) {
      return;
    }

    let isCancelled = false;
    let timeoutId: number | undefined;

    const pollNotifications = async () => {
      try {
        const notification = await receiveNotification({
          apiUrl: import.meta.env.VITE_API_URL,
          ...chatConfig,
        });

        if (notification) {
          const messageData = notification.body.messageData;
          const text = messageData?.textMessageData?.textMessage;

          if (
            messageData?.typeMessage === "textMessage" &&
            text?.trim() &&
            !isCancelled
          ) {
            onMessage({
              id: String(notification.receiptId),
              text,
              time: formatTime(notification),
              isIncoming: true,
            });
          }

          await deleteNotification({
            apiUrl: import.meta.env.VITE_API_URL,
            ...chatConfig,
            receiptId: notification.receiptId,
          });
        }
      } catch (pollError) {
        if (!isCancelled) {
          setError(
            pollError instanceof Error
              ? pollError.message
              : "Не удалось получить уведомление",
          );
        }
      } finally {
        if (!isCancelled) {
          timeoutId = window.setTimeout(pollNotifications, 1000);
        }
      }
    };

    void pollNotifications();

    return () => {
      isCancelled = true;
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [chatConfig, chatId, onMessage]);

  return error;
};
