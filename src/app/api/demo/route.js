import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()
        const newUser = await prisma.user.create({
         data: {
            firstName: "01",
            middleName: "Mohammad",
            lastName: "Mojammel",
            mobile: "123456",
            email: "1@email.com",
            passwordHash:"123456",
            intro: "qwqwqw",
            profile: "wqqwqwqw"
          }
      })
        return NextResponse.json({newUser})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}

export async function GET(req,res){

    try{
        const prisma = new PrismaClient()
        const userList = await prisma.user.findMany({
            where: {email: "1@email.com"},
            select: {id: true}
      })
        return NextResponse.json({userList})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}

export async function PUT(req,res){

    try{
        const prisma = new PrismaClient()
        const updateUser = await prisma.user.update({
        where: {id: 2},
        data: {email: 'Jhon1@gmail.com', password: '123'}
     })
        return NextResponse.json({updateUser})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}

export async function DELETE(req,res){

    try{
        const prisma = new PrismaClient()
        const deleteUser = await prisma.user.delete({
        where: {id: 2}
    })
        return NextResponse.json({deleteUser})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}
