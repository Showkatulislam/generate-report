import { db } from "@/lib/db";
import { initailUser } from "@/lib/initial-user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const Iam = await initailUser();
    const body = await req.json();
    const { name, email, phone, address, contact1, contact2 } = body;
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 404 });
    }
    console.log(name);

    const client = await db.client.create({
      data: {
        name,
        email,
        phone,
        address,
        contact1,
        contact2,
      },
    });

    return NextResponse.json(client);
  } catch (error) {
    console.log("Error Come From Client");
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, address, contact1, contact2 } = body;
    const Iam = await initailUser();
    const { searchParams } = new URL(req.url);
    const clientId = searchParams.get("clientId");

    if (!Iam) {
      return new NextResponse("UnAthorized User", { status: 401 });
    }
    console.log(name, email, phone, address, contact1, contact2);

    const clients = await db.client.update({
      where: {
        id: clientId,
      },
      data: {
        name,
        email,
        phone,
        address,
        contact1,
        contact2,
      },
    });
    return NextResponse.json(clients);
  } catch (error) {
    console.log("Error Come From Client");
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
    const clientId = searchParams.get("clientId");
    const client = await db.client.delete({
      where: {
        id: clientId,
      },
    });
    return NextResponse.json(client);
  } catch (error) {
    console.log("Error Come From Client");
    return new NextResponse("Internal Error", { status: 501 });
  }
}
