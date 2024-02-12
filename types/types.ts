import { Client, Order, Product } from "@prisma/client";

export type OrderWithClientAndProduct = Order & { client: Client } & {
  product: Product;
};
