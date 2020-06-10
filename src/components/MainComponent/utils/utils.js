export function addNewMessage(
  chats,
  currentChatIdx,
  value,
  incomming,
  scrollContainer
) {
  const newChats = chats.slice();
  newChats[currentChatIdx].messages = [
    ...newChats[currentChatIdx].messages,
    { incomming: incomming, message: value, time: new Date() },
  ];
  scrollToEnd(scrollContainer);
  return newChats;
}

function scrollToEnd(el) {
  setTimeout(() => {
    el.scrollTo(0, el.scrollHeight);
  }, 0);
}
