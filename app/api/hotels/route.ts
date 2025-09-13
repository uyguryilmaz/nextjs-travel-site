import prisma from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(request:Request) {
     const { searchParams } = new URL(request.url);
     const rating = searchParams.get("rating");
     const priceMin = searchParams.get("priceMin");
     const priceMax = searchParams.get("priceMax");

     const filters = [];

     if (priceMin || priceMax) {
        const priceFilter = {};
        if (priceMin) {
          priceFilter.gte = Number(priceMin);
        }
        if (priceMax) {
          priceFilter.lte = Number(priceMax);
        }
        filters.push({ pricePerNight: priceFilter });
     }

     if (rating) {
      filters.push({ rating: { gte: Number(rating) } });
    }
  

    try {
        const hotels = await prisma.hotel.findMany({
            where:filters.length > 0 ? {AND: filters} :{},
            include:{
                rooms:true,
            }
        })
        
        return NextResponse.json(hotels);

    } catch (error) {
        return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });

    }
    
}



// import prisma from "@/lib/db";
// import { NextResponse } from "next/server";


// export async function GET() {

//     try{
//         const hotels = await prisma.hotel.findMany({
//             include:{
//                 rooms:true,
//             }
//         })

//         return NextResponse.json(hotels);
        
//     }catch (error){
//             return NextResponse.json({error: "something went wrong!"} , {status:500})
//     }


// }