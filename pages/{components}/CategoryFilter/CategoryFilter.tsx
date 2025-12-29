import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/pages/{lib}/store"
import { setCategory } from "@/pages/{lib}/features/productSlice"

const productCategories = [
    { label: "All Products", value: null },
    { label: "Men's Fashion", value: "For Men's" },
    { label: "Women's Fashion", value: "For Women's" },
    { label: "Accessories", value: "Accessories" },
]

function CategoryFilter() {
    const dispatch = useDispatch()
    const selectedCategory = useSelector((state: RootState) => state.product.selectedCategory)

    return (
        <div className="flex flex-col gap-3 text-[#4B5563]">
            {productCategories.map((category) => (
                <label key={category.label} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" checked={selectedCategory === category.value} onChange={() => dispatch(setCategory(category.value))} />
                    <span className="text-sm">{category.label}</span>
                </label>
            ))}
        </div>
    )
}

export default CategoryFilter
