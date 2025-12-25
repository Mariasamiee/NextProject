import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/pages/{lib}/store";
import Icons from "../Icons/Icon";

function ProductH2() {

  const products = useSelector((state: RootState) => state.product.items.slice(0, 4));

  return (
    <div className="mt-35 mb-4">

      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center mb-8">
        <p className="text-4xl font-bold text-[#111827]">
          Recommendations.
          <span className="text-[#4B5563] font-semibold">
            {" "}Best matching products for you
          </span>
        </p>
        <Link href="/Products" className="text-[#111827] font-bold text-[18px] hover:underline">
          More
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <Link key={item.id} href={`/Products/${item.id}`}>
            <div className="rounded-2xl flex flex-col w-70 text-[#4B5563]" >
              <img src={item.img} alt={item.title} className="w-full h-82.5  object-cover rounded-2xl" />
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
    </div>
  )
}

export default ProductH2
