export const truncateText = (text: string, length: number) =>
  text.length <= length ? text : text.substring(0, length) + "...";
