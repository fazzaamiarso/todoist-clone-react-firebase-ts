export const getErrorMessage = (errorMessage: string) => {
  const message = errorMessage.slice(5).replaceAll("-", " ");
  const capitalizedMessage = message.replace(
    message[0],
    message[0].toUpperCase()
  );
  return capitalizedMessage;
};
