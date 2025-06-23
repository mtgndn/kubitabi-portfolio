import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const id = url.pathname.split("/").pop()
    if (!id) {
      return NextResponse.json({ error: "ID gerekli" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("kubitabi_db")
    const product = await db.collection("products").findOne({ _id: new ObjectId(id) })

    if (!product) {
      return NextResponse.json({ error: "Ürün bulunamadı" }, { status: 404 })
    }
    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 })
  }
}

export async function PUT(request: Request) {
  try {
    const url = new URL(request.url)
    const id = url.pathname.split("/").pop()
    if (!id) {
      return NextResponse.json({ error: "ID gerekli" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("kubitabi_db")

    const body = await request.json()
    delete body._id // id'yi body'den sil

    const result = await db.collection("products").updateOne({ _id: new ObjectId(id) }, { $set: body })
    return NextResponse.json(result)
  } catch (error) {
    console.error("PUT /api/products/[id] error:", error)
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url)
    const id = url.pathname.split("/").pop()
    if (!id) {
      return NextResponse.json({ error: "ID gerekli" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("kubitabi_db")

    const result = await db.collection("products").deleteOne({ _id: new ObjectId(id) })
    return NextResponse.json(result)
  } catch (error) {
    console.error("DELETE /api/products/[id] error:", error)
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 })
  }
}
