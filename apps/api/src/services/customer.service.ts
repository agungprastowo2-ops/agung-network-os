import prisma from "../lib/prisma";

export async function getAllCustomers() {
  return prisma.customer.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getCustomer(id: string) {
  return prisma.customer.findUnique({
    where: {
      id,
    },
  });
}

export async function createCustomer(data: any) {
  return prisma.customer.create({
    data,
  });
}

export async function updateCustomer(
  id: string,
  data: any
) {
  return prisma.customer.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteCustomer(id: string) {
  return prisma.customer.delete({
    where: {
      id,
    },
  });
}
