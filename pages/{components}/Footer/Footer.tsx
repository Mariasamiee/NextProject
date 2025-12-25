import Link from "next/link";
import Icons from "../Icons/Icon";

function Footer() {
  return (
    <div className="w-full border-t border-[#E7E7E7]">
      <div className="mx-auto max-w-7xl px-8 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          <div className="space-y-4">
            <div className="text-[#111827] leading-4">
              <p className="text-[24px] font-bold tracking-[-3px]">NEXTON</p>
              <p className="text-[11px] tracking-[-1px] translate-x-8">eCommerce</p>
            </div>

            <ul className="space-y-3 text-[15px] text-[#4B5563]">
              <li className="flex items-center gap-2">
                <Icons icon="Facebook" />
                Facebook
              </li>
              <li className="flex items-center gap-2">
                <Icons icon="Youtube" />
                Youtube
              </li>
              <li className="flex items-center gap-2">
                <Icons icon="Telegram" />
                Telegram
              </li>
              <li className="flex items-center gap-2">
                <Icons icon="Twitter" />
                Twitter
              </li>
            </ul>
          </div>

          <div className="font-medium">
            <p className="mb-4">Getting started</p>
            <ul className="space-y-3 text-sm text-[#4B5563]">
              <li><Link href="#">Release Notes</Link></li>
              <li><Link href="#">Upgrade Guide</Link></li>
              <li><Link href="#">Browser Support</Link></li>
              <li><Link href="#">Dark Mode</Link></li>
            </ul>
          </div>

          <div className="font-medium">
            <p className="mb-4">Explore</p>
            <ul className="space-y-3 text-sm text-[#4B5563]">
              <li><Link href="#">Prototyping</Link></li>
              <li><Link href="#">Design systems</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Security</Link></li>
            </ul>
          </div>

          <div className="font-medium">
            <p className="mb-4">Community</p>
            <ul className="space-y-3 text-sm text-[#4B5563]">
              <li><Link href="#">Discussion Forums</Link></li>
              <li><Link href="#">Code of Conduct</Link></li>
              <li><Link href="#">Contributing</Link></li>
              <li><Link href="#">API Reference</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" border-t border-[#E7E7E7]" />
      <div className="mx-auto max-w-7xl px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-[16px] font-medium text-[#4B5563]"> Nexton eCommerce. © 2024</p>

          <div className="flex items-center gap-3">
           <img src="/images/payment-icons.png" alt="" />
          </div>
        </div>

      </div>
    </div>

  )
}

export default Footer
