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
      legalStatus,
      uniqueIdentifier,
      creationDate,
      startActivity,
      activityStatus,
      shareCapital,
      preShareCapital,
      reportId,
    } = body;
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 404 });
    }

    const officalInfo = await db.officalInfo.create({
      data: {
        legalStatus,
        uniqueIdentifier,
        creationDate,
        startActivity,
        activityStatus,
        shareCapital,
        preShareCapital,
        reportId,
      },
    });

    return NextResponse.json(officalInfo);
  } catch (error) {
    console.log("Error Come From officalInfo");
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
