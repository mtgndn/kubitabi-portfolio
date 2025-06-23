"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"

interface Product {
  _id?: string
  name: string
  description: string
  price: number
  imageUrl: string
}

const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS || "1234"

export default function AdminPage() {
  const [inputPass, setInputPass] = useState("")
  const [authorized, setAuthorized] = useState(false)

  const [products, setProducts] = useState<Product[]>([])
  const [form, setForm] = useState<Product>({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  })
  const [editId, setEditId] = useState<string | null>(null)

  async function fetchProducts() {
    const res = await fetch("/api/products")
    const data = await res.json()
    setProducts(data)
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (inputPass === ADMIN_PASS) {
      setAuthorized(true)
      fetchProducts()
    } else {
      alert("Şifre yanlış!")
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (editId) {
      await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _id: editId }),
      })
    } else {
      await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
    }

    setForm({ name: "", description: "", price: 0, imageUrl: "" })
    setEditId(null)
    fetchProducts()
  }

  function handleEdit(product: Product) {
    setForm(product)
    if (product._id) setEditId(product._id)
  }

  async function handleDelete(id?: string) {
    if (!id) return
    await fetch(`/api/products?id=${id}`, {
      method: "DELETE",
    })
    fetchProducts()
  }

  if (!authorized) {
    return (
      <>
        <Navbar />
        <main className="flex justify-center items-center min-h-screen bg-gray-50">
          <form onSubmit={handleLogin} className="bg-black p-8 rounded shadow max-w-sm w-full">
            <h1 className="text-2xl font-bold mb-6 text-center text-white">Admin Girişi</h1>
            <input
              type="password"
              placeholder="Şifre"
              value={inputPass}
              onChange={(e) => setInputPass(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#b08900] text-black"
            />
            <button
              type="submit"
              className="w-full bg-[#b08900] hover:bg-[#9c7500] text-white py-3 rounded font-semibold transition-colors duration-300"
            >
              Giriş Yap
            </button>
          </form>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6 min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold mb-8 text-[#222222] text-center">Admin Paneli - Ürün Yönetimi</h1>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow mb-12">
          <h2 className="text-2xl mb-4 text-[#222222]">{editId ? "Ürünü Güncelle" : "Yeni Ürün Ekle"}</h2>

          <input
            type="text"
            name="name"
            placeholder="Ürün Adı"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:border-[#b08900] focus:ring-2 focus:ring-[#b08900] transition mb-4 text-black"
          />

          <textarea
            name="description"
            placeholder="Açıklama"
            value={form.description}
            onChange={handleChange}
            required
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-md focus:border-[#b08900] focus:ring-2 focus:ring-[#b08900] transition mb-4 text-black"
          />

          <input
            type="number"
            name="price"
            placeholder="Fiyat"
            value={form.price || ""}
            onChange={handleChange}
            required
            min={0}
            step={0.01}
            className="w-full p-3 border border-gray-300 rounded-md focus:border-[#b08900] focus:ring-2 focus:ring-[#b08900] transition mb-4 text-black"
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="Resim URL'si"
            value={form.imageUrl}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:border-[#b08900] focus:ring-2 focus:ring-[#b08900] transition mb-6 text-black"
          />

          <button
            type="submit"
            className="bg-[#b08900] hover:bg-[#9c7500] text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300"
          >
            {editId ? "Güncelle" : "Ekle"}
          </button>
        </form>

        <section>
          <h2 className="text-2xl mb-4 text-center text-[#222222]">Ürün Listesi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-card p-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold text-[#222222]">{product.name}</h3>
                <p className="text-gray-600 flex-grow">{product.description}</p>
                <div className="mt-2 font-bold text-[#b08900]">{product.price.toFixed(2)} ₺</div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-[#b08900] hover:bg-[#9c7500] text-white px-3 py-1 rounded-md font-semibold transition-colors duration-300"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md font-semibold transition-colors duration-300"
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
