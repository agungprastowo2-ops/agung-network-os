import { db } from "../db";

export async function getOrCreateCustomer(chatId: string) {
  let customer = await db.customer.findUnique({
    where: { id: chatId }
  });

  if (!customer) {
    customer = await db.customer.create({
      data: {
        id: chatId,
        state: "NEW",
        lastSeen: new Date()
      }
    });
  }

  return customer;
}

export async function updateCustomer(chatId: string, data: any) {
  return db.customer.update({
    where: { id: chatId },
    data
  });
}
