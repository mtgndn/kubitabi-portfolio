import Link from "next/link"
import PageTransition from "@/components/PageTransition"
import ScrollingGallery from "@/components/ScrollingGallery"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <section className="relative bg-white flex flex-col justify-center items-center text-center min-h-[80vh] px-6">
          <div className="p-10 rounded-lg max-w-3xl shadow-lg">
            <h2 className="text-5xl font-extrabold mb-4 text-black">
              Şıklığın ve Kalitenin Yeni Adresi
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-gray-900">
              Kubitabi Accessories ile tarzınızı tamamlayın. En özel takılar ve aksesuarlar burada.
            </p>
            <Link
              href="/products"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 transition rounded-md px-8 py-3 font-semibold shadow-lg text-black"
            >
              Ürünleri Keşfet
            </Link>
          </div>
        </section>

        <div className="mt-12 mb-20 bg-gray-50 shadow-inner rounded-lg px-4 py-6 max-w-full overflow-hidden">
          <ScrollingGallery />
        </div>
      </PageTransition>
      <Footer />
    </>
  )
}
