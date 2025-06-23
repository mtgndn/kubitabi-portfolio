interface ProductCardProps {
  id: number | string
  name: string
  description: string
  price: number
  imageUrl: string
}

export default function ProductCard({ name, description, price, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-card p-5 flex flex-col hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-56 object-cover rounded-md mb-4"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold text-navy-900 mb-2">{name}</h3>
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      <div className="text-purple-700 font-bold text-lg">{price.toFixed(2)} ₺</div>
    </div>
  )
}
