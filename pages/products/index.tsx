import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { RootState } from "../{lib}/store";
import Icons from "../{components}/Icons/Icon";

function ProductsPage() {
  const products = useSelector((state: RootState) => state.product.items)
  const router = useRouter();
  const { category } = router.query

  const filteredProducts = category
    ? products.filter((p) => p.category === category) : products

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [category])

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  return (
    <div className="mt-5 mb-5">
      <p className="max-w-7xl mx-auto px-8 text-2xl font-bold mb-6 ">
        {category ? category : "All Products"}
      </p>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentProducts.map((item) => (
          <Link key={item.id} href={`/Products/${item.id}`}>
            <div className="rounded-2xl flex flex-col w-70 text-[#4B5563]" >
              <img src={item.img} alt={item.title} className="w-full h-82.5 object-cover rounded-2xl" />
              <div className="flex justify-between items-center mt-3 font-bold text-[#111827]">
                <p >{item.title}</p>
                <p >${item.price}</p>
              </div>

              <p className=" text-sm">{item.category}</p>

              <div className="mt-2 flex items-center text-sm gap-1">
                <Icons icon="star" />
                <p>{item.rating}</p>
                <p>({item.reviews})</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <button onClick={handlePrev} disabled={currentPage === 1} className="cursor-pointer " >
          <Icons icon="prev" />
        </button>
        <span className="flex items-center">{currentPage} / {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages} className="cursor-pointer">
          <Icons icon="next" />
        </button>
      </div>
    </div>
  )
}

export default ProductsPage