import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/pages/{lib}/store"
import { addToCart, increaseQty, decreaseQty } from "@/pages/{lib}/features/productSlice"
import Icons from "../Icons/Icon"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

function ProductH() {
  const dispatch = useDispatch()
  const router = useRouter()
  const allProducts = useSelector((state: RootState) => state.product.items)
  const cartItems = useSelector((state: RootState) => state.product.cart.items)

  const products = allProducts.slice(0, 36)
  const [current, setCurrent] = useState(0)

  const visibleSlides = 4
  const totalPages = Math.ceil(products.length / visibleSlides)

  const getCartItem = (productId: string) => cartItems.find(i => i.product.id === productId)

  return (
    <div className="mt-35">

      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center mb-8">
        <p className="text-4xl font-bold text-[#111827]">
          Recommendations.
          <span className="text-[#4B5563] font-semibold">
            {" "}Best matching products for you
          </span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }} >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="flex gap-8 min-w-full">
              {products.slice(pageIndex * visibleSlides, pageIndex * visibleSlides + visibleSlides).map(item => {
                const cartItem = getCartItem(item.id)
                return (
                  <div key={item.id} className="rounded-2xl flex flex-col w-70 text-[#4B5563]">
                    <div onClick={() => router.push(`/Products/${item.id}`)} className="relative">
                      <img src={item.img} alt={item.title} className="w-full h-82.5 object-cover rounded-2xl" />
                    </div>

                    <div className="flex justify-between items-center mt-3 font-bold text-[#111827]">
                      <p>{item.title}</p>
                      <p>${item.price}</p>
                    </div>

                    <p className="text-sm">{item.category}</p>

                    <div className="mt-2 flex items-center text-sm gap-1">
                      <Icons icon="star" className="block" />
                      <p>{item.rating}</p>
                      <p>({item.reviews})</p>
                    </div>

                    <div className=" flex items-center gap-2 translate-x-44 -translate-y-8">
                      {cartItem ? (
                        <div className="flex items-center gap-2 bg-[#F8F8F8] px-3 py-1 rounded-full">
                          <button onClick={() => dispatch(decreaseQty(item.id))}>
                            <Icons icon="decre" />
                          </button>
                          <span>{cartItem.quantity}</span>
                          <button onClick={() => dispatch(increaseQty(item.id))}>
                            <Icons icon="incre" />
                          </button>
                        </div>
                      ) : (
                        <button onClick={(e) => { e.stopPropagation(); dispatch(addToCart(item)) }} className="">
                          <Icons icon="addcart" />
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button key={index} onClick={() => setCurrent(index)} className={`h-2 rounded-full transition-all cursor-pointer ${current === index ? "w-2 bg-black" : "w-2 bg-gray-300"}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductH
