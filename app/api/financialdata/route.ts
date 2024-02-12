import { db } from "@/lib/db";
import { initailUser } from "@/lib/initial-user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const Iam = await initailUser();
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 404 });
    }
    const body = await req.json();
    const {
      turnover,
      nprofit,
      oprofit,
      damorliztion,
      equityballocation,
      supplieraccounts,
      purchases,
      clientaccounts,
      stocks,
      total,
      reportId,
    } = body;
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 404 });
    }

    const financialData = await db.financialData.create({
      data: {
        turnover,
        nprofit,
        oprofit,
        damorliztion,
        equityballocation,
        supplieraccounts,
        purchases,
        clientaccounts,
        stocks,
        total,
        reportId,
      },
    });

    return NextResponse.json(financialData);
  } catch (error) {
    console.log("Error Come From financialData");
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
