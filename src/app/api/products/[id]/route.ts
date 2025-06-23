import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const client = await clientPromise
  const db = client.db("kubitabi_db")

  try {
    const product = await db.collection("products").findOne({ _id: new ObjectId(id) })
    if (!product) {
      return NextResponse.json({ error: "Ürün bulunamadı" }, { status: 404 })
    }
    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 })
  }
}
