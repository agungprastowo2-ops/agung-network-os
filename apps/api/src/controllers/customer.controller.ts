import { Request, Response } from "express";

import * as customerService from "../services/customer.service";

export async function getCustomers(
  req: Request,
  res: Response
) {
  const customers =
    await customerService.getAllCustomers();

  res.json(customers);
}

export async function createCustomer(
  req: Request,
  res: Response
) {
  const customer =
    await customerService.createCustomer(req.body);

  res.status(201).json(customer);
}

export async function updateCustomer(
  req: Request,
  res: Response
) {
  const customer =
    await customerService.updateCustomer(
      req.params.id,
      req.body
    );

  res.json(customer);
}

export async function deleteCustomer(
  req: Request,
  res: Response
) {
  await customerService.deleteCustomer(req.params.id);

  res.json({
    success: true,
  });
}
