import { useState } from "react";
import Icons from "../Icons/Icon";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border-b border-[#E7E7E7]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <div className="text-[#111827] leading-4">
          <p className="text-[24px] font-extrabold tracking-[-4px]">NEXTON</p>
          <p className="text-[11px] text-right tracking-[-1px]">eCommerce</p>
        </div>

        <div className="hidden md:flex flex-1 justify-center px-8">
          <div className="relative w-full max-w-120 ">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Icons icon="search" />
            </div>
            <input type="text" placeholder="Search in products..." className="w-100 rounded-full bg-[#F8F8F8] py-3 pl-12 pr-4 text-[11px] outline-none focus:ring-2 focus:ring-gray-300 text-[#4B5563] placeholder:text-[#4B5563]" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Icons icon="profile" />
          <Icons icon="cart" />
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} >
          <Icons icon="menu" />
        </button>
      </div>

      <div className="md:hidden absolute px-4 -translate-y-14 translate-x-25 ">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Icons icon="search" />
          </div>
          <input type="text" placeholder="Search in products..." className="w-50  rounded-full bg-[#F8F8F8] py-3 pl-12 pr-4 text-sm outline-none text-[#4B5563] placeholder:text-[#4B5563]" />
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#E7E7E7] px-4 py-4 space-y-4">
          <Icons icon="profile" />
          <Icons icon="cart" />
        </div>
      )}
    </div>
  )
}

export default Navbar
