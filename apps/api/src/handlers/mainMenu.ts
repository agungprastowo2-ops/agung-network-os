export async function handleMainMenu(message, customer) {
  const text = message.text;

  if (text === "menu") {
    return bot.sendText(
      message.chatId,
      "1. Order\n2. Cek status\n3. CS"
    );
  }

  return bot.sendText(message.chatId, "Ketik MENU");
}
