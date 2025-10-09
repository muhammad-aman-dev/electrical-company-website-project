"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
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
    <motion.div className="w-full h-[50vh] sm:h-[70vh] overflow-hidden relative" 
    initial={{ opacity: 0, y: 30 }}    
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.8, ease: "easeOut" }} 
    >
      <div className="bg-black/60 absolute w-full h-full z-10">
      <div className="flex flex-col gap-3.5 h-full justify-center sm:items-center w-full pl-2"><h3 className="font-bold text-[#ec7037] p-1 text-4xl">W&C Electrical</h3><span className="text-white font-bold text-lg sm:text-2xl"><Typewriter
            words={[
      "Powering Progress with Precision & Safety",
      "Where Construction Meets Innovation",
      "From Blueprint to Bright Lights",
      "Driven by Energy, Defined by Quality.",
      "Wiring the Future, Building with Integrity"]}
            loop={true}                
            cursor
            cursorStyle="|"            
            typeSpeed={80}             
            deleteSpeed={50}           
            delaySpeed={1000}          
          /></span><div className="flex gap-4"><button className="font-bold outline-none w-max bg-[#120e49] text-[#ec7037] py-3 px-5 hover:bg-[#ec7037] hover:text-[#120e49] duration-300 cursor-pointer rounded-xl">
        Call Now
      </button>
      <button className="font-bold outline-none w-max hover:bg-[#120e49] hover:text-[#ec7037] py-3 px-5 bg-[#ec7037] text-[#120e49] duration-300 cursor-pointer rounded-xl">
        Contact Us
      </button>
      </div>
      </div></div>
      <Slider {...settings}>
        {["/image-1.jpg", "/image-2.jpg", "/image-3.jpg", "/image-4.jpg"].map(
          (src, i) => (
            <div key={i} className="relative w-full h-[50vh] sm:h-[70vh]">
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                priority
                quality={25}
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
    </motion.div>
   <motion.div
   className="bg-[#120e49] p-5 mt-6 w-full rounded-2xl"
   initial={{opacity:0,y:30}}
   animate={{opacity:1,y:0}}
   transition={{ duration: 0.8, ease: "easeOut" }} 
   >
    <h2 className="mt-4 text-center text-[#ec7037] font-bold text-2xl p-3 sm:text-3xl">Our Vision</h2>
    <div className="flex sm:flex-row flex-col justify-between">
    <motion.div
    initial={{opacity:0,x:-30}}
   animate={{opacity:1,x:0}}
   transition={{ duration: 0.8, ease: "easeOut" }} 
    className="vision text-md font-bold flex sm:items-center sm:w-[40%] text-white sm:text-xl">To be Pakistan's leading provider of innovative and sustainable construction and electrical solutions, delivering quality, safety, and reliability in every project.</motion.div>
    <span className={` h-[300px] bg-[#ec7037] transition-all duration-300 w-1`} ></span>
    <motion.div
    initial={{opacity:0,x:30}}
   animate={{opacity:1,x:0}}
   transition={{ duration: 0.8, ease: "easeOut" }} 
    className="ceo sm:w-[40%]">
      <Image src={'/ceo.png'} width={300} height={300} alt="ceo image" className="object-cover h-[300px]"/>
    </motion.div>
    </div>
    </motion.div>   
    </>
  );
}
