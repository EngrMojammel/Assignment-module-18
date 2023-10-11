import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()
        const newTag = await prisma.post_meta.create({
         data: {
            key: "666",
            content: "666"
          
          }
      })
        return NextResponse.json({newTag})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}

export async function GET(req,res){

    try{
        const prisma = new PrismaClient()
        const postList = await prisma.post_meta.findMany({
            where: {key: "666"},
            select: {id: true}
      })
        return NextResponse.json({postList})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}

export async function PUT(req,res){

    try{
        const prisma = new PrismaClient()
        const updatepost = await prisma.post_meta.update({
        where: {id: 1},
        data: {key: '007'}
     })
        return NextResponse.json({updatepost})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}

export async function DELETE(req,res){

    try{
        const prisma = new PrismaClient()
        const deletepost = await prisma.post_meta.delete({
        where: {id: 1}
    })
        return NextResponse.json({deletepost})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}
