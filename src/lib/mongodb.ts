import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI!
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI ortam değişkeni tanımlı değil!")
}

if (process.env.NODE_ENV === "development") {
  // Geliştirme ortamında global client cache için
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options)
    ;(global as any)._mongoClientPromise = client.connect()
  }
  clientPromise = (global as any)._mongoClientPromise
} else {
  // Prod ortamı için
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
