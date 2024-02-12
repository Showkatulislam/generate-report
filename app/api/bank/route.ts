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
        branch  ,
        comment ,
        reportId,
    } = body;
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 404 });
    }

    const bank = await db.bank.create({
      data: {
        name,    
        branch ,
        comment ,
        reportId,
      },
    });

    return NextResponse.json(bank);
  } catch (error) {
    console.log("Error Come From bank");
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
