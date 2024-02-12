import { db } from "@/lib/db";
import { initailUser } from "@/lib/initial-user";

export const GetOrders = async () => {
  try {
    const Iam = await await initailUser();
    if (!Iam) {
      return null;
    }
    const orders = await db.order.findMany({
      include: {
        client: true,
        product: true,
      },
    });
    return orders;
  } catch (error) {
    console.log("Error From GetOrder");
    return null;
  }
};
