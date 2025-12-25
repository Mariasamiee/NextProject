import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../{lib}/store";
import Icons from "../{components}/Icons/Icon";

function ProductDetails() {
    const router = useRouter();
    const { id } = router.query;

    const product = useSelector((state: RootState) =>
        state.product.items.find((p) => p.id === id)
    );

    if (!product) return <div className="p-8">Product not found</div>;

    return (
        <div className="rounded-2xl flex flex-col text-[#4B5563] p-8 max-w-7xl mx-auto" >
            <img src={product.img} alt={product.title} className="w-87.5 h-96 object-cover rounded-2xl" />
            <div className="flex gap-5 items-center mt-3 font-bold text-[#111827]">
                <p >{product.title}</p>
                <p >${product.price}</p>
            </div>

            <p className=" text-sm">{product.category}</p>

            <div className="mt-2 flex items-center text-sm gap-1">
                <Icons icon="star" />
                <p>{product.rating}</p>
                <p>({product.reviews})</p>
            </div>
        </div>
    )
}

export default ProductDetails
