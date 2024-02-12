import { db } from "@/lib/db";
import { initailUser } from "@/lib/initial-user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const Iam = await initailUser();
    if (!Iam) {
      return new NextResponse("Unauthorized User", { status: 404 });
    }
    const report = await db.report.create({
        data:{}
    });
    return NextResponse.json(report);
  } catch (error) {
    console.log("Error Coming From Report");
    return new NextResponse("Internal Error", { status: 501 });
  }
}
