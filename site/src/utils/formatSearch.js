export default function formatString(str) {
  const formatted = str
    .split(' ')
    .map((word) => word.replace(/[^0-9a-zA-Z]/g, ''))
    .filter((word) => word !== '')
    .join('+');

  return formatted.length > 50 ? formatted.substring(0, 50) : formatted;
}
