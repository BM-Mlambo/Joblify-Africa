import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST (req){
    const body=await req.json()
    const user=await prisma.user.findUnique({
        where:{
            email:body.email
        }
    })
    if(!user){
        return Response.json({
            success:false,
            message:"user not found"
        })
    }
     return Response.json({
            success:true,
            message:"user found"
        })
}