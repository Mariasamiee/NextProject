import { useDispatch } from "react-redux"
import { sortMostExpensive, sortCheapest, sortBestRating, resetSort } from "@/pages/{lib}/features/productSlice"

const sortOptions = [
    { label: "Default", action: resetSort },
    { label: "Price High - Low", action: sortMostExpensive },
    { label: "Price Low - High", action: sortCheapest },
    { label: "Best Rating", action: sortBestRating },
]

function SortFilter() {
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col gap-3 text-[#4B5563]">
            {sortOptions.map((options, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" onChange={() => dispatch(options.action())} />
                    <span className="text-sm">{options.label}</span>
                </label>
            ))}
        </div>
    )
}

export default SortFilter