import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("kubitabi_db")
    const products = await db.collection("products").find().toArray()
    return NextResponse.json(products)
  } catch (error) {
    console.error("GET /api/products error:", error)
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("kubitabi_db")

    const body = await request.json()
    if (!body.name || !body.price || !body.imageUrl) {
      return NextResponse.json({ error: "Eksik alanlar var" }, { status: 400 })
    }

    const result = await db.collection("products").insertOne(body)
    return NextResponse.json(result)
  } catch (error) {
    console.error("POST /api/products error:", error)
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("kubitabi_db")
    const body = await request.json()

    if (!body._id) {
      return NextResponse.json({ error: "ID gerekli" }, { status: 400 })
    }

    const id = new ObjectId(body._id)
    delete body._id

    const result = await db.collection("products").updateOne({ _id: id }, { $set: body })
    return NextResponse.json(result)
  } catch (error) {
    console.error("PUT /api/products error:", error)
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("kubitabi_db")
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    if (!id) {
      return NextResponse.json({ error: "ID gerekli" }, { status: 400 })
    }
    const result = await db.collection("products").deleteOne({ _id: new ObjectId(id) })
    return NextResponse.json(result)
  } catch (error) {
    console.error("DELETE /api/products error:", error)
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 })
  }
}
