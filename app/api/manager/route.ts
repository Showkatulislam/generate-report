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
        name,      
        companyName,
        fuction    ,
        nationatity,
        reportId   ,
    } = body;
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 404 });
    }

    const managers = await db.managers.create({
      data: {
        name,      
        companyName,
        fuction    ,
        nationatity,
        reportId   , 
      },
    });

    return NextResponse.json(managers);
  } catch (error) {
    console.log("Error Come From managers");
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
