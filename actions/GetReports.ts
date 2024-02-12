import { db } from "@/lib/db";
import { initailUser } from "@/lib/initial-user";

export const GetReports = async () => {
  try {
    const Iam = await initailUser();
    if (!Iam) {
      return null;
    }
    const reports = await db.report.findMany({
      include:{
        orderdetail:true
      }
    })
    return reports;
  } catch (error) {
    console.log("Report Error come from Action");
    return null;
  }
};
