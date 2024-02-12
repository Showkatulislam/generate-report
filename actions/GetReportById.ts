import { db } from "@/lib/db";
import { initailUser } from "@/lib/initial-user";

export const GetReportById = async (reportId: string) => {
  try {
    const Iam = await initailUser();
    if (!Iam) {
      null;
    }
    const report = await db.report.findUnique({
      where: {
        id: reportId,
      },
      include: {
        orderdetail: true,
        cContact: true,
        officalInfo: true,
        capital: true,
        shareholder: true,
        managers: true,
        financialData: true,
        bank: true,
        commercialModel: true,
        analaysisModal: true,
      },
    });

    return report;
  } catch (error) {
    console.log("Error Comming from Report Id");
    return null;
  }
};
