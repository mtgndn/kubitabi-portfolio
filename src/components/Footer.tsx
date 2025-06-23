"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900">Kubitabi Accessories</h2>
          <p className="text-gray-600 max-w-sm">
            Şıklığın ve kalitenin yeni adresi. En özel takılar ve aksesuarlar burada.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Hızlı Linkler</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-600 transition-colors">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-yellow-600 transition-colors">
                Ürünler
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-600 transition-colors">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Bizi Takip Edin</h3>
          <div className="flex space-x-4 text-gray-600">
            <a
              href="https://www.instagram.com/kubitabiaccessories/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com/kubitabi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-600 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com/kubitabi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-yellow-600 transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © 2025 Kubitabi Accessories. Tüm hakları saklıdır.
      </div>
    </footer>
  )
}
