"use client"
import ProductCard from "@/components/ProductCard"
import Navbar from "@/components/Navbar"
import PageTransition from "@/components/PageTransition"
import Footer from "@/components/Footer"

const products = [
  {
    id: 1,
    name: "AYA, Gaia Koleksiyonu",
    description: "Lavanta tarlaları, lila renginin büyüsü, rüyadan fırlamış bir sabahın huzuru...",
    price: 300,
    imageUrl: "/products/necklace1.png",
    buyUrl: ""
  },
  {
    id: 2,
    name: "ALBA, Gaia Koleksiyonu’nun ilk ışığı.",
    description: "Kristal kuvarsın arınmış enerjisiyle,beyazın o dingin, minimal gücü buluşuyor.",
    price: 300,
    imageUrl: "/products/watch1.png",
    buyUrl: "https://kubitabiaccessories.ikas.shop/alba-kolye"
  },
  {
    id: 3,
    name: "CORA, Gaia Koleksiyonu’nun yaz sıcağında açan kırmızı çiçeği.",
    description: "Gülüşlerin kırmızı ruj gibi cesur olduğu, gün batımında bir kadeh şarabın iyi geldiği,çiçekli elbiselerin dans ettiği o anlara eşlik etmesi için tasarlandı.",
    price: 300,
    imageUrl: "/products/bracelet1.png",
    buyUrl: "https://kubitabiaccessories.ikas.shop/cora-kolye"
  },
  {
    id: 4,
    name: "JAS, Gaia Koleksiyonu’nun toprağa dokunan sesi.",
    description: "Kızıl jasper taşıyla merkezlenen bu tasarım, doğanın sıcak tonlarını üzerinde taşır: kavrulmuş toprak, altın sarısı ışık, yakıcı bir günbatımı gibi… ",
    price: 300,
    imageUrl: "/products/bracelet2.png",
    buyUrl: "https://kubitabiaccessories.ikas.shop/jas-kolye"
  },
  {
    id: 5,
    name: "ZURI, Gaia Koleksiyonu’nun serin rüzgârı.",
    description: "Turkuaz taşların ferahlığı, kristalin parıltısı ve altın detayların dengesiyle tasarlandı. Adını “güzel” anlamına gelen Svahili kökenli bir kelimeden alan ZURI, güzelliğin yalınlıktan doğduğunu hatırlatıyor.",
    price: 300,
    imageUrl: "/products/necklace2.png",
    buyUrl: "https://kubitabiaccessories.ikas.shop/zuri"
  },
  {
    id: 6,
    name: "OLI, Gaia Koleksiyonu’nun zeytin dalı gibi uzanan parçası.",
    description: "Unakit jasper ve sedef taşlarının yumuşak dokunuşu, zeytin yeşili tonlarındaki fimo boncuklarla birleşerek OLI’yi hem sade hem karakterli bir kolyeye dönüştürüyor.",
    price: 300,
    imageUrl: "/products/watch2.png",
    buyUrl: "https://kubitabiaccessories.ikas.shop/oli-kolye"
  },
]

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="min-h-screen container mx-auto p-6 bg-white">
          <h1 className="text-4xl font-bold mb-8 text-center text-black">
            Ürünlerimiz
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                buyUrl={product.buyUrl}
              />
            ))}
          </div>
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}
