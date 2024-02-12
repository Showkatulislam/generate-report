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
      importText,
      importTexSub,
      suppliersLocal,
      exportText,
      exporttextSub,
      clientsLocal,
      reportId,
    } = body;
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 404 });
    }

    const commercialModel = await db.commercialModel.create({
      data: {
        importText,
        importTexSub,
        suppliersLocal,
        exportText,
        exporttextSub,
        clientsLocal,
        reportId,
      },
    });

    return NextResponse.json(commercialModel);
  } catch (error) {
    console.log("Error Come From commercialModel Route");
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
