"use client"
import Navbar from "@/components/Navbar"
import PageTransition from "@/components/PageTransition"
import Footer from "@/components/Footer"

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
      <path d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8" />
      <path d="M21 8L12 13 3 8" />
    </svg>
  )
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 7a15 15 0 0015 15l3-3a2 2 0 00-2-2h-1a11 11 0 01-11-11v-1a2 2 0 00-2-2z" />
    </svg>
  )
}

function ShopIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 010 20" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="min-h-screen bg-[#fffbea] flex flex-col items-center justify-center p-10 text-black">
          <h1 className="text-5xl font-extrabold mb-16 tracking-wide">İletişim</h1>

          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mail */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center space-y-6 hover:shadow-yellow-300 transition-shadow duration-300">
              <MailIcon className="w-20 h-20 text-yellow-500" />
              <h2 className="text-2xl font-semibold">E-posta</h2>
              <a
                href="mailto:info@kubitabi.com"
                className="text-yellow-600 font-medium hover:underline hover:text-yellow-700 transition"
              >
                info@kubitabi.com
              </a>
            </div>

            {/* Telefon */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center space-y-6 hover:shadow-yellow-300 transition-shadow duration-300">
              <PhoneIcon className="w-20 h-20 text-yellow-500" />
              <h2 className="text-2xl font-semibold">Telefon</h2>
              <a
                href="tel:+905555555555"
                className="text-yellow-600 font-medium hover:underline hover:text-yellow-700 transition"
              >
                +90 555 555 55 55
              </a>
            </div>

            {/* Satış Sitesi */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center space-y-6 hover:shadow-yellow-300 transition-shadow duration-300">
              <ShopIcon className="w-20 h-20 text-yellow-500" />
              <h2 className="text-2xl font-semibold">Satış Sitesi</h2>
              <a
                href="https://kubitabiaccessories.ikas.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 font-medium hover:underline hover:text-yellow-700 transition"
              >
                kubitabi.com
              </a>
            </div>
          </div>
        </main>
      </PageTransition>
	  <Footer />
    </>
  )
}
