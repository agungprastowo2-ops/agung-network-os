import { getOrCreateCustomer, updateCustomer } from "./services/customerService";
import { handleNewCustomer } from "./handlers/newCustomer";
import { handleOrderFlow } from "./handlers/orderFlow";
import { handleMainMenu } from "./handlers/mainMenu";

bot.onMessage(async (message) => {
  const chatId = message.chatId;
  const text = message.text?.toLowerCase();

  const customer = await getOrCreateCustomer(chatId);

  await updateCustomer(chatId, {
    lastSeen: new Date(),
    lastMessage: text
  });

  switch (customer.state) {
    case "NEW":
      return handleNewCustomer(message);

    case "ORDERING":
      return handleOrderFlow(message, customer);

    case "ACTIVE":
      return handleMainMenu(message, customer);
  }
});
