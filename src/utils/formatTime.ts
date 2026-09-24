import type { IReceiveNotification } from "../api/notifications";

export const formatTime = (value: Date | IReceiveNotification): string => {
  const date =
    value instanceof Date
      ? value
      : new Date((value.body.timestamp ?? Date.now() / 1000) * 1000);

  return date.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
