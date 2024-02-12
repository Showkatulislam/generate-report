import { db } from "@/lib/db";
import { initailUser } from "@/lib/initial-user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const Iam = await initailUser();
    if (!Iam) {
      return new NextResponse("Unathorize User", { status: 501 });
    }
    const body = await req.json();
    const { clientId, productId, dob, priority } = body;
    const order = await db.order.create({
      data: {
        clientId,
        productId,
        dob,
        priority,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.log("Error coming from order route");
    return new NextResponse("Internal Error", { status: 501 });
  }
}

export async function DELETE(req: Request) {
  try {
    const Iam = await initailUser();
    if (!Iam) {
      return new NextResponse("UnAthorized User", { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId");
    const order = await db.order.delete({
      where: {
        id: orderId,
      },
    });
    return NextResponse.json(order);
  } catch (error) {
    console.log("Error coming from Order route");

    return new NextResponse("Internal Error", { status: 501 });
  }
}
