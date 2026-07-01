import {prismaclient} from "prisma/client";
const prisma=new prismaclient();
export async function POST (req){
    const body=await req.json()
    const updatedUser=await prisma.user.update({
        where:{
            email:body.email
        },
        data:{
            password:body.password
        }
    })
    console.log(updatedUser)
    return Response.json({
        success:true,
        message:"password updated successfully"
    })
}