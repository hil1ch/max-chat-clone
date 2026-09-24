export interface IReceiveNotificationParams {
  apiUrl: string;
  idInstance: string;
  apiTokenInstance: string;
}

export interface IReceiveNotification {
  receiptId: number;
  body: {
    timestamp?: number;
    senderData?: {
      chatId?: string;
    };
    messageData?: {
      typeMessage?: string;
      textMessageData?: {
        textMessage?: string;
      };
    };
  };
}

const getNotificationsUrl = ({
  apiUrl,
  idInstance,
}: IReceiveNotificationParams) => {
  if (!apiUrl) {
    throw new Error("Не задана переменная VITE_API_URL");
  }

  return `${apiUrl.replace(/\/$/, "")}/waInstance${idInstance}`;
};

export const receiveNotification = async (
  params: IReceiveNotificationParams,
): Promise<IReceiveNotification | null> => {
  const response = await fetch(
    `${getNotificationsUrl(params)}/receiveNotification/${params.apiTokenInstance}`,
  );

  if (!response.ok) {
    throw new Error(`Не удалось получить уведомление: ${response.status}`);
  }

  return response.json();
};

export const deleteNotification = async ({
  apiUrl,
  idInstance,
  apiTokenInstance,
  receiptId,
}: IReceiveNotificationParams & { receiptId: number }) => {
  const response = await fetch(
    `${getNotificationsUrl({ apiUrl, idInstance, apiTokenInstance })}/deleteNotification/${apiTokenInstance}/${receiptId}`,
    { method: "DELETE" },
  );

  if (!response.ok) {
    throw new Error(`Не удалось удалить уведомление: ${response.status}`);
  }
};
