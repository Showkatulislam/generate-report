import { db } from "@/lib/db";
import { initailUser } from "@/lib/initial-user";
export const GetClients = async () => {
  try {
    const Iam = await initailUser();
    if (!Iam) {
      return null;
    }
    const clients = await db.client.findMany({});
    return clients;
  } catch (error) {
    console.log("Error from GetClients");
    return null;
  }
};
