import { useState } from "react"
import { categories, features } from "../../{core}/Arrays"
import Icons from "../Icons/Icon"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { setCategory } from "@/pages/{lib}/features/productSlice"

function ExploreSection() {
  const [current, setCurrent] = useState(0)
  const dispatch = useDispatch()
  const visibleSlides = 3
  const totalPages = Math.ceil(categories.length / visibleSlides)

  const handleClick = (category: string) => {
    dispatch(setCategory(category))
  }

  return (
    <div className="mt-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="rounded-2xl border-2 border-[#E5E7EB] grid grid-cols-1 md:grid-cols-4  divide-x-2 divide-[#E5E7EB] divide-dashed">
          {features.map((item) => (
            <div key={item.id} className="flex items-center gap-4 py-4 px-7">
              <Icons icon={item.icon} />
              <div>
                <p className="font-bold text-[#111827]">{item.title}</p>
                <p className="text-xs text-[#4B5563]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-35">
        <p className="text-4xl font-bold text-[#111827]">
          Start exploring.
          <span className="text-[#4B5563] font-semibold">
            {" "}Good things are waiting for you
          </span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-8 overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }} >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-full">
              {categories.slice(
                pageIndex * visibleSlides,
                pageIndex * visibleSlides + visibleSlides
              ).map((item) => (
                <Link key={item.id} href={`/Products?category=${encodeURIComponent(item.title)}`} onClick={() => handleClick(item.title)} className="rounded-2xl border-2 border-[#E5E7EB] py-6 px-8 flex items-center justify-between hover:shadow-md transition  cursor-pointer" >
                  <div>
                    <p className="font-bold text-[24px]">{item.title}</p>
                    <p className="text-sm font-semibold text-[#4B5563]">{item.subtitle}</p>
                  </div>
                  <button className="text-sm font-medium text-[#111827] flex items-center gap-2">
                    SHOP NOW <Icons icon="flash" />
                  </button>
                </Link>
              ))}
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

export default ExploreSection
