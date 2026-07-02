export async function handleNewCustomer(message) {
  await bot.sendText(
    message.chatId,
    "👋 Halo! ketik MENU untuk mulai."
  );

  await db.customer.update({
    where: { id: message.chatId },
    data: { state: "ACTIVE" }
  });
}
