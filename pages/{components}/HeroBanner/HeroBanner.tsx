import Image from "next/image";
import Link from "next/link";
import { heroBanner } from "@/pages/{core}/Arrays";

function HeroBanner() {
    return (
        <div className="max-w-7xl mx-auto px-8 mt-36 mb-12">
            <div className="relative bg-[#F7F7F8] rounded-3xl h-90 md:h-105 overflow-hidden flex items-center">

                <div className="pl-25 max-w-xl">
                    <span className="text-[20px] text-[#4B5563] font-semibold">
                        {heroBanner.badge}
                    </span>

                    <h1 className="mt-3 text-4xl font-bold text-[#111827] leading-10">
                        {heroBanner.title}
                    </h1>

                    <p className="mt-5 text-[20px] text-[#4B5563] font-semibold">
                        {heroBanner.price}
                    </p>

                    <Link href="/Products">
                        <button className="mt-6 bg-black text-white px-8 py-3.25 rounded-full text-[15px] hover:bg-gray-800 transition cursor-pointer">
                            {heroBanner.buttonText}
                        </button>
                    </Link>
                </div>

                <div className="absolute right-14 bottom-0 top-0 w-[45%]">
                    <Image src={heroBanner.image} alt="" fill priority className="object-cover object-bottom" />
                </div>

            </div>
        </div>
    )
}

export default HeroBanner
