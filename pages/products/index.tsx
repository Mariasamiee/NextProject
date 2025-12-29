import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/pages/{lib}/store"
import { setCategory } from "@/pages/{lib}/features/productSlice"
import Link from "next/link"
import Icons from "@/pages/{components}/Icons/Icon"
import CategoryFilter from "@/pages/{components}/CategoryFilter/CategoryFilter"
import SortFilter from "@/pages/{components}/SortFilter/SortFilter"
import { useRouter } from "next/router"

function ProductsPage() {
  const dispatch = useDispatch()
  const router = useRouter()

  const products = useSelector((state: RootState) => state.product.items)
  const selectedCategory = useSelector((state: RootState) => state.product.selectedCategory)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  useEffect(() => {
    if (router.query.category) {
      dispatch(setCategory(router.query.category as string))
    }
  }, [router.query.category])

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, products.length])

  return (
    <div className="mt-5 mb-16">
      <p className="max-w-7xl mx-auto px-8 text-2xl font-bold mb-6">
        {selectedCategory || "All Products"}
      </p>

      <div className="max-w-7xl mx-auto px-8 mb-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 flex flex-col gap-8">
          <div>
            <p className="font-bold mb-4 text-[#111827]">Categories</p>
            <CategoryFilter />
          </div>

          <div>
            <p className="font-bold mb-4 text-[#111827]">Sort order</p>
            <SortFilter />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map(item => (
              <Link key={item.id} href={`/Products/${item.id}`}>
                <div className="rounded-2xl flex flex-col w-70 text-[#4B5563] cursor-pointer">

                  <img src={item.img} alt={item.title} className="w-full h-82.5 object-cover rounded-2xl" />

                  <div className="flex justify-between items-center mt-3 font-bold text-[#111827]">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                  </div>

                  <p className="text-sm">{item.category}</p>

                  <div className="mt-2 flex items-center text-sm gap-1">
                    <Icons icon="star" />
                    <p>{item.rating}</p>
                    <p>({item.reviews})</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1} className="cursor-pointer">
          <Icons icon="prev" />
        </button>
        <span className="flex items-start">{currentPage} / {totalPages}</span>
        <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages} className="cursor-pointer">
          <Icons icon="next" />
        </button>
      </div>
    </div>
  )
}

export default ProductsPage