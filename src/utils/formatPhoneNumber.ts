export const formatPhoneNumber = (value: string): string => {
	return value.replace(/\D/g, "");
};