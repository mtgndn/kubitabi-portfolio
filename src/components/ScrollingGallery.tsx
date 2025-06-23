"use client"

import Image from "next/image"
import { useState } from "react"

const images = [
  "/products/necklace1.png",
  "/products/watch1.png",
  "/products/bracelet1.png",
  "/products/bracelet2.png",
  "/products/necklace2.png",
  "/products/watch2.png",
]

export default function ScrollingGallery() {
  // Her görsel için görünürlük durumunu tutalım
  const [visibleImages, setVisibleImages] = useState<boolean[]>(new Array(images.length * 2).fill(true))

  function handleError(index: number) {
    const newVisible = [...visibleImages]
    newVisible[index] = false
    setVisibleImages(newVisible)
  }

  return (
    <div className="relative overflow-hidden h-44 flex items-center bg-transparent">
      <div className="flex animate-scroll gap-10 whitespace-nowrap select-none">
        {images.concat(images).map((src, i) =>
          visibleImages[i] ? (
            <div key={i} className="relative h-36 w-[144px] rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500 overflow-hidden">
              <Image
                src={src}
                alt="Takı görseli"
                fill
                sizes="(max-width: 768px) 144px, 144px"
                style={{ objectFit: "cover" }}
                loading="lazy"
                draggable={false}
                onError={() => handleError(i)}
              />
            </div>
          ) : null
        )}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}
