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
      denomination,
      address,
      such,
      fax,
      cellPhone,
      email,
      website,
      reportId
    } = body;
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 404 });
    }

    const companyInfo = await db.cContact.create({
      data: {
        denomination,
        address,
        such,
        fax,
        cellPhone,
        email,
        website,
        reportId
      },
    });

    return NextResponse.json(companyInfo);
  } catch (error) {
    console.log("Error Come From companyInfo");
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
