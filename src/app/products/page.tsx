import ProductCard from "@/components/ProductCard"
import Navbar from "@/components/Navbar"
import PageTransition from "@/components/PageTransition"

const products = [
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

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="min-h-screen container mx-auto p-6 bg-gray-50">
          <h1 className="text-4xl font-bold mb-8 text-center text-navy-900">Ürünlerimiz</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </main>
      </PageTransition>
    </>
  )
}
