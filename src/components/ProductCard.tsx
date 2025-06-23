"use client"
import { useState } from "react"
import Image from "next/image"

interface ProductCardProps {
  id: number | string
  name: string
  description: string
  price: number
  imageUrl: string
  buyUrl: string
}

export default function ProductCard({ name, description, price, imageUrl, buyUrl }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`bg-white rounded-lg shadow-md p-5 cursor-pointer transform transition-all duration-300 
        hover:-translate-y-2 hover:shadow-lg`}
    >
      <div className="relative w-full h-56 mb-4 rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 100%"
          priority={false}
        />
      </div>

      <h3 className="text-xl font-semibold text-black mb-2">{name}</h3>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          expanded ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-800 mb-2">{description}</p>
        <div className="flex items-center gap-4">
          <div className="text-yellow-600 font-bold text-lg">{price.toFixed(2)} ₺</div>

          <a
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md text-sm font-semibold transition"
            onClick={(e) => e.stopPropagation()}
          >
            Satın Al
          </a>
        </div>
      </div>
    </div>
  )
}
