import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()
        const newPost = await prisma.post_comment.create({
         data: {
            title: "111",  
            content: "000"
          }
      })
        return NextResponse.json({newPost})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}

export async function GET(req,res){

    try{
        const prisma = new PrismaClient()
        const postList = await prisma.post_comment.findMany({
            where: {title: "111"},
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
        const updatepost = await prisma.post_comment.update({
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
        const deletepost = await prisma.post_comment.delete({
        where: {id: 1}
    })
        return NextResponse.json({deletepost})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}
