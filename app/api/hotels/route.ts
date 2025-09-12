import prisma from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {

    try{
        const hotels = await prisma.hotel.findMany({
            include:{
                rooms:true,
            }
        })

        return NextResponse.json(hotels);
        
    }catch (error){
            return NextResponse.json({error: "something went wrong!"} , {status:500})
    }


}