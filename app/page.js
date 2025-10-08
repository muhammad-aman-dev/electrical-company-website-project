"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
  };

  return (
    <>
    <div className="w-full h-[50vh] sm:h-[70vh] bg-amber-300 overflow-hidden relative">
      <div className="bg-black/60 absolute w-full h-full z-10"></div>
      <Slider {...settings}>
        {["/image-1.jpg", "/image-2.jpg", "/image-3.jpg", "/image-4.jpg"].map(
          (src, i) => (
            <div key={i} className="relative w-full h-[50vh] sm:h-[70vh]">
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                priority
                className="
                  object-cover
                  sm:object-fill
                  w-full h-auto max-h-[50vh] sm:max-h-[70vh]
                "
              />
            </div>
          )
        )}
      </Slider>
    </div>
    </>
  );
}
