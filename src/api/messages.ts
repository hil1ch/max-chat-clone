interface SendMessageParams {
  apiUrl: string;
  idInstance: string;
  apiTokenInstance: string;
  chatId: string;
  message: string;
}

export const sendMessage = async ({
  apiUrl,
  idInstance,
  apiTokenInstance,
  chatId,
  message,
}: SendMessageParams) => {
  if (!apiUrl) {
    throw new Error("Не задана переменная VITE_API_URL");
  }

  const response = await fetch(
    `${apiUrl.replace(/\/$/, "")}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatId, message }),
    },
  );

  if (!response.ok) {
    throw new Error(`Не удалось отправить сообщение: ${response.status}`);
  }

  return response.json();
};
