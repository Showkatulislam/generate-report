import { db } from "@/lib/db";
import { initailUser } from "@/lib/initial-user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const Iam = await initailUser();
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 401 });
    }
    const body = await req.json();
    const {
      riskRating,
      paymentExperience,
      recommendCredit,
      recommendCreditText,
      equivalentToCredit,
      equivalentToCreditText,
      NaceGroup,
      industrialSector,
      secondaryEstablishment,
      officailpublication,
      largeScaleAffair,
      reportId,
    } = body;

    const anayasisdata = await db.analaysisModal.create({
      data: {
        riskRating,
        paymentExperience,
        recommendCredit,
        recommendCreditText,
        equivalentToCredit,
        equivalentToCreditText,
        NaceGroup,
        industrialSector,
        secondaryEstablishment,
        officailpublication,
        largeScaleAffair,
        reportId,
      },
    });

    return NextResponse.json(anayasisdata);
  } catch (error) {
    console.log("Error Comming From Analaysis Model");
    return new NextResponse("Error Comming From Analaysis Data Route", {
      status: 501,
    });
  }
}
