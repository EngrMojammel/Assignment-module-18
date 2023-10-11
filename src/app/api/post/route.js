import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()
        const newPost = await prisma.post.create({
         data: {
            title: "001",
            metaTitle: "qazwsx",
            slug: "abcd",
            summary: "bangla",
            content: "good"
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
        const postList = await prisma.post.findMany({
            where: {title: "001"},
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
        const updatepost = await prisma.post.update({
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
        const deletepost = await prisma.post.delete({
        where: {id: 1}
    })
        return NextResponse.json({deletepost})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}
