import { useRouter } from "next/router";
import { products } from "@/pages/{core}/Arrays";
import { useState, useEffect } from "react";
import Icons from "../{components}/Icons/Icon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/pages/{lib}/store";
import { addToCart, increaseQty, decreaseQty, removeFromCart, } from "@/pages/{lib}/features/productSlice";

function ProductDetails() {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();

    if (!router.isReady || !id || Array.isArray(id)) return null;

    const productId = id;

    const product = products.find((p) => p.id === productId);
    if (!product) return null;

    const [activeImg, setActiveImg] = useState(product.img);
    const [size, setSize] = useState("S");

    const cartItem = useSelector((state: RootState) =>
        state.product.cart.items.find((i) => i.product.id === productId)
    );
    const count = cartItem?.quantity || 1;

    useEffect(() => {
        setActiveImg(product.img);
    }, [product]);

    const images = [product.img, product.img2, product.img3, product.img4];

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleIncrement = () => {
        if (cartItem) {
            dispatch(increaseQty(productId));
        } else {
            dispatch(addToCart(product));
        }
    };

    const handleDecrement = () => {
        if (cartItem) {
            dispatch(decreaseQty(productId));
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-8 pt-10 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                <div className="flex lg:flex-col gap-4">
                    {images.map((img, index) => (
                        <button key={index} onClick={() => setActiveImg(img)} className={`w-25 h-30 rounded-2xl border ${activeImg === img ? "border-blue-500" : "border-gray-200"}`}>
                            <img src={img} alt="thumb" className="w-full h-full object-cover rounded-2xl" />
                        </button>
                    ))}
                </div>

                <div className="h-133.5 w-140 flex -translate-x-75">
                    <img src={activeImg} alt={product.title} className="object-cover w-full h-full rounded-2xl" />
                </div>

                <div className="border border-[#E5E7EB] rounded-2xl w-122.5 h-95 -translate-x-28 p-6 space-y-6">
                    <div className="flex justify-between items-center">

                        <span className="text-sm text-gray-500 flex items-center ">
                            <Icons icon="star" className="block" />
                            {product.rating} · {product.reviews} reviews
                        </span>

                        <div className="text-right">
                            <p className="text-2xl font-semibold text-[#111827] "> ${product.price} </p>
                            <p className="text-sm line-through text-gray-400">{product.price}</p>
                        </div>

                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-medium">Size: {size}</p>
                        <div className="flex gap-2">
                            {["S", "M", "L", "XL", "2XL"].map((s) => (
                                <button key={s} onClick={() => setSize(s)} className={`px-4 py-2 rounded-xl border ${size === s ? "bg-blue-500 text-white border-blue-500" : "border-[#E5E7EB]"}`} > {s} </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-[#F8F8F8] px-3 py-2 rounded-full">

                            <button onClick={handleDecrement} className="cursor-pointer">
                                <Icons icon="decre" />
                            </button>

                            <span>{count}</span>

                            <button onClick={handleIncrement} className="cursor-pointer">
                                <Icons icon="incre" />
                            </button>

                        </div>

                        <button onClick={handleAddToCart} className="bg-gray-900 text-white px-6 py-3 rounded-full" > Add to cart</button>
                    </div>

                    <div className="text-sm text-[#4B5563] space-y-1">

                        <div className="flex justify-between">
                            <span>${product.price} × {count}</span>
                            <span>${(product.price * count).toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Tax estimate</span>
                            <span>$0</span>
                        </div>

                        <div className="flex justify-between font-medium text-[#111827] mt-5 py-3 border-t border-[#E5E7EB] ">
                            <span className="">Total</span>
                            <span>${(product.price * count).toFixed(2)}</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-16 max-w-2xl border-t border-[#E5E7EB]">

                <p className="text-3xl font-bold text-[#111827] mb-4 mt-10">{product.title}</p>
                <p className="text-[#4B5563] leading-relaxed">
                    The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had
                    previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic
                    wooden canoes in Valley Park, Missouri ceased in 1978.
                </p>

                <div className="mt-8 mb-20 space-y-4">
                    <div className="mb-10">
                        <p className="text-2xl font-bold text-[#111827] mb-1">Fabric + Care</p>
                        <p className="text-sm text-[#4B5563]">Material: Soft wool blend</p>
                        <p className="text-sm text-[#4B5563]">Color: Various</p>
                    </div>

                    <div className="mb-10">
                        <p className="text-2xl font-bold text-[#111827] mb-1">Sale performance</p>
                        <p className="text-sm text-[#4B5563]">Sales: 0</p>
                        <p className="text-sm text-[#4B5563]">Review Count: -</p>
                        <p className="text-sm text-[#4B5563]">Review Average: -</p>
                    </div>

                    <div>

                        <p className="text-2xl font-bold text-[#111827]">Keywords</p>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {["men's fashion", "winter hat", "colorful accessory", "warm headwear"].map((k) => (
                                <span key={k} className="px-3 py-2 text-xs rounded-full border border-[#E5E7EB] text-[#4B5563] flex items-center">
                                    <Icons icon="stark" className="block" />
                                    {k}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <div className="overflow-hidden">

                <p className="text-4xl font-bold text-[#111827] mb-8">Recommended products</p>

                <div className="flex gap-8 min-w-full">
                    {products.slice(0, 4).map((item) => (
                        <div key={item.id} className="rounded-2xl flex flex-col text-[#4B5563]">

                            <div className="relative">
                                <button className="absolute top-3 right-3 z-10" >
                                    <Icons icon="addcart" className="block" />
                                </button>

                                <img src={item.img} alt={item.title} className="w-full h-82.5 object-cover rounded-2xl" />
                            </div>

                            <div className="flex justify-between items-center mt-3 font-bold text-[#111827]">
                                <p>{item.title}</p> <p>${item.price}</p>
                            </div>

                            <p className="text-sm">{item.category}</p>

                            <div className="mt-2 flex items-center text-sm gap-1">
                                <Icons icon="star" className="block" />
                                <p>{item.rating}</p>
                                <p>({item.reviews})</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProductDetails
