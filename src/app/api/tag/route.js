import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()
        const newTag = await prisma.tag.create({
         data: {
            title: "222",
            metaTitle: "222",
            slug:"222",
            content:"222"
          
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
        const postList = await prisma.tag.findMany({
            where: {title: "222"},
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
        const updatepost = await prisma.tag.update({
        where: {id: 1},
        data: {title: '007'}
     })
        return NextResponse.json({updatepost})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}

export async function DELETE(req,res){

    try{
        const prisma = new PrismaClient()
        const deletepost = await prisma.tag.delete({
        where: {id: 1}
    })
        return NextResponse.json({deletepost})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}
