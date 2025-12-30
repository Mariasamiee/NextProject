import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/pages/{lib}/store";
import Icons from "../Icons/Icon";
import { useState } from "react";

function ProductH2() {
 const allProducts = useSelector((state: RootState) => state.product.items);
  const products = allProducts.slice(0, 36);
  const [current, setCurrent] = useState(0);

  const visibleSlides = 4;
  const totalPages = Math.ceil(products.length / visibleSlides);


  return (
    <div className="mt-35 mb-4">

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
              {products.slice(pageIndex * visibleSlides, pageIndex * visibleSlides + visibleSlides).map((item) => (
                  <Link key={item.id} href={`/Products/${item.id}`}>
                    <div className="rounded-2xl flex flex-col w-70 text-[#4B5563]">
                      <div className="relative">
                        <Icons icon="addcart" className="absolute top-3 right-3 z-10 block" />
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
                    </div>
                  </Link>
                ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-16">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button key={index} onClick={() => setCurrent(index)} className={`h-2 rounded-full transition-all cursor-pointer ${ current === index ? "w-2 bg-black" : "w-2 bg-gray-300" }`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductH2
