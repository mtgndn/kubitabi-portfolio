"use client"

const images = [
  "/products/necklace1.png",
  "/products/watch1.png",
  "/products/bracelet1.png",
  "/products/bracelet2.png",
  "/products/necklace2.png",
  "/products/watch2.png",
]

export default function ScrollingGallery() {
  // Görsellerin toplam genişliğini tahmini hesaplamak için (h-36 + gap-10)
  // h-36 = 9rem ~ 144px, gap-10 = 2.5rem ~ 40px, toplam 184px * görsel sayısı
  // Bu değerler animasyonun düzgün çalışması için önemli.

  return (
    <div className="relative overflow-hidden h-44 flex items-center bg-transparent">
      <div className="flex animate-scroll gap-10 whitespace-nowrap select-none">
        {images.concat(images).map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Takı görseli"
            className="h-36 rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500"
            loading="lazy"
            draggable={false}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        ))}
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
