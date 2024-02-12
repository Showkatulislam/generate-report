import { db } from "@/lib/db";
import { initailUser } from "@/lib/initial-user";
export const GetProduct = async () => {
  try {
    const Iam = await initailUser();
    if (!Iam) {
      return null;
    }
    const products = await db.product.findMany({});
    return products;
  } catch (error) {
    console.log("Error from GetProduct");
    return null
  }
};

