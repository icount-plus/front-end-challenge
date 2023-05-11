export const getDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
