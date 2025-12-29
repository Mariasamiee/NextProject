import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/pages/{lib}/store"
import { setCategory } from "@/pages/{lib}/features/productSlice"
import { productCategories } from "@/pages/{core}/Arrays"

function CategoryFilter() {
    const dispatch = useDispatch()
    const selectedCategory = useSelector((state: RootState) => state.product.selectedCategory)

    return (
        <div className="flex flex-col gap-3 text-[#4B5563]">
            <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={selectedCategory === null} onChange={() => dispatch(setCategory(null))} />
                <span className="text-sm">All Products</span>
            </label>
            {productCategories.map((category) => (
                <label key={category.value} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" checked={selectedCategory === category.value} onChange={() => dispatch(setCategory(category.value))} />
                    <span className="text-sm">{category.label}</span>
                </label>
            ))}
        </div>
    )
}

export default CategoryFilter
