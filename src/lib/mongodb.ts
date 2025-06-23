import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI!
const options = {}

// Global tip tanımı ekleyelim:
declare global {
  // global nesnesine _mongoClientPromise adında MongoClient Promise'i ekliyoruz
  // Eğer zaten varsa tekrar declare etmiyoruz
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI ortam değişkeni tanımlı değil!")
}

if (process.env.NODE_ENV === "development") {
  // Geliştirme ortamında global client cache için
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // Prod ortamı için
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
