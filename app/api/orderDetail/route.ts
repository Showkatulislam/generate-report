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
      customer,
      object,
      reference,
      priority,
      tongue,
      creditRequested,
      reportId,
    } = body;
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 404 });
    }

    const orderDetail = await db.orderDetail.create({
      data: {
        customer,
        object,
        reference,
        priority,
        tongue,
        creditRequested,
        reportId,
      },
    });

    return NextResponse.json(orderDetail);
  } catch (error) {
    console.log("Error Come From CorderDetail");
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
