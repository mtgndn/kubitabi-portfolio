"use client"

import Image from "next/image"
import PageTransition from "@/components/PageTransition"

interface Product {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
}

const products: Product[] = [
  {
    id: 1,
    name: "AYA, Gaia Koleksiyonu",
    description: "El işçiliği ile hazırlanmış şık ve zarif kolye.",
    price: 250,
    imageUrl: "/products/necklace1.png",
  },
  {
    id: 2,
    name: "ALBA, Gaia Koleksiyonu’nun ilk ışığı.",
    description: "Günlük kullanıma uygun, kaliteli materyallerden yapılmış saat.",
    price: 450,
    imageUrl: "/products/watch1.png",
  },
  {
    id: 3,
    name: "CORA, Gaia Koleksiyonu’nun yaz sıcağında açan kırmızı çiçeği.",
    description: "Her stile uyum sağlayan sade bileklik.",
    price: 180,
    imageUrl: "/products/bracelet1.png",
  },
]

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id))

  if (!product) return <div className="p-8">Ürün bulunamadı.</div>

  return (
    <PageTransition>
      <main className="container mx-auto p-6 min-h-screen">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-1/2 h-96 md:h-auto rounded-lg shadow overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-navy-900 mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <div className="text-2xl font-semibold text-secondary mb-6">{product.price} ₺</div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}
