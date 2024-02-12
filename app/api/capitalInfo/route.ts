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
      sharecapital ,    
      sharecapitaltext, 
      socialcapital    ,
      socialcapitaltext,
      reportId        ,  
    } = body;
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 404 });
    }

    const capital = await db.capital.create({
      data: {
        sharecapital ,    
        sharecapitaltext, 
        socialcapital    ,
        socialcapitaltext,
        reportId        , 
      },
    });

    return NextResponse.json(capital);
  } catch (error) {
    console.log("Error Come From capital");
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
