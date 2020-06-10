export function formatDateTime(date) {
  const formatDateTime = date.toLocaleString("en-US", { hour12: true });
  return formatDateTime;
}

export function formatDate(date) {
  if (date === undefined) {
    return undefined;
  } else {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formatDate = date.toLocaleDateString("en-US", options);
    return formatDate;
  }
}

// {`${el.messages[el.messages.length - 1].message.substr(
//   0,
//   50
// )} ...`}

export function formatMessage(messages) {
  const message = messages[messages.length - 1].message.substr(0, 50);

  if (messages[messages.length - 1].message.length > 50) {
    return message + "...";
  }
  return message;
}
