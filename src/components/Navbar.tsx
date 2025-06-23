"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react" 

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Anasayfa" },
    { href: "/products", label: "Ürünler" },
    { href: "/contact", label: "İletişim" },
  ]

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center cursor-pointer select-none space-x-3">
          <Image src="/logo.png" alt="Kubitabi Logo" width={106} height={106} />
          <h1 className="text-2xl font-extrabold text-black">Kubitabi Accessories</h1>
        </Link>

        {/* Hamburger icon - mobilde görünür, masaüstünde gizli */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menü - masaüstünde yatay, mobilde açılır/kapanır */}
        <ul
          className={`
            fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-8
            md:static md:flex-row md:space-x-8 md:space-y-0 md:bg-transparent md:h-auto md:w-auto
            transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
          onClick={() => setIsOpen(false)} 
        >
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    block px-4 py-2 font-semibold transition-colors duration-300
                    ${isActive ? "text-yellow-500" : "text-gray-800 hover:text-yellow-500"}
                  `}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
