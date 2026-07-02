export async function handleOrderFlow(message, customer) {
  const text = message.text;

  if (text.includes("beli")) {
    await db.order.create({
      data: {
        orderId: crypto.randomUUID(),
        customerId: customer.id,
        items: [text],
        status: "PENDING",
        createdAt: new Date()
      }
    });

    return bot.sendText(message.chatId, "✅ Order masuk!");
  }

  return bot.sendText(message.chatId, "Ketik: beli <produk>");
}
