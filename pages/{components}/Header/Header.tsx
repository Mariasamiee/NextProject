import { useState, useEffect } from "react";
import { headerSlides } from "../../{core}/Arrays";
import Icons from "../Icons/Icon";

function Header() {
  const [current, setCurrent] = useState(0);
  const length = headerSlides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 8000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="w-full h-120 md:h-130 overflow-hidden relative">
      {headerSlides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"} flex items-center px-6 md:px-12`} style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }} >
          <div className="absolute inset-0" />

          <div className="flex-1 max-w-xl text-left mb-6 md:mb-0 px-8">
            <p className="text-[16px] text-[#4B5563] mb-4">{slide.price}</p>
            <p className="text-4xl md:text-5xl font-bold leading-tight mb-6">{slide.title} <br /> {slide.subtitle}</p>

            <button className="bg-[#0f172a] text-white px-8 py-4 rounded-full flex items-center gap-3 justify-start">
              {slide.button}
              <Icons icon="search2" />
            </button>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-6 md:left-1/2 md:-translate-x-1/2 flex gap-2 z-20">
        {headerSlides.map((_, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)} className={`h-2 rounded-full transition-all duration-300  cursor-pointer ${idx === current ? "bg-black w-9" : "bg-black/50 w-2"}`} />
        ))}
      </div>
    </div>
  )
}

export default Header
