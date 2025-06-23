"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Anasayfa" },
    { href: "/products", label: "Ürünler" },
    { href: "/admin", label: "Admin" },
    { href: "/contact", label: "İletişim" },
  ]

  return (
    <nav className="bg-black shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-extrabold text-primary cursor-default select-none">
          Kubitabi Accessories
        </h1>
        <ul className="flex space-x-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    relative px-2 py-1 font-semibold transition
                    ${isActive ? "text-secondary" : "text-gray-600 hover:text-secondary"}
                  `}
                >
                  {label}
                  <span
                    className={`
                      absolute left-0 -bottom-1 w-full h-[2px] bg-secondary
                      transition-all duration-300 ease-in-out
                      ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
