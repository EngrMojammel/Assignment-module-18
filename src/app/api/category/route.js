import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req,res){

    try{
        const prisma = new PrismaClient()
        const newTag = await prisma.category.create({
         data: {
            title:"888",
            metaTitle:"888",
            slug:"888",
            content:"888",
          
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
        const postList = await prisma.category.findMany({
            where: {title:"888"},
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
        const updatepost = await prisma.category.update({
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
        const deletepost = await prisma.category.delete({
        where: {id: 1}
    })
        return NextResponse.json({deletepost})

    }catch(e){
        return NextResponse.json({status:"fail", data:e})
    }
}
