export const formatPhoneNumber = (value: string): string => {
	return value.replace(/\D/g, "");
};

export const formatChatPhone = (chatId?: string): string =>
  chatId?.replace("@c.us", "").replace(/^7/, "+7") ?? "";