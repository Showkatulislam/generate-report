import { db } from "@/lib/db";
import { initailUser } from "@/lib/initial-user";
import { NextResponse } from "next/server";

export async function GET(req:Request,{ params }: { params: { reportId: string } }){
    try {
        const Iam=await initailUser()
        if(!Iam){
            return new NextResponse("Unauthorized Error",{status:401})
        }
        const report=await db.report.findUnique({
            where:{
                id:params.reportId
            },
            include:{
                orderdetail:true,
                cContact:true,
                officalInfo:true,
                capital:true,
                shareholder:true,
                managers:true,
                financialData:true,
                bank:true,
                commercialModel:true,
                analaysisModal:true
            }
        })

        return NextResponse.json(report)
    } catch (error) {
        console.log("Error Comming from Report Id");
        return new NextResponse("Internal Server Error",{status:501})
        
    }
}