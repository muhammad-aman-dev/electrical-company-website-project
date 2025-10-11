"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import dynamic from "next/dynamic";
import StatCounter from "@/components/StatCounter";
import { useState, useEffect } from "react";


const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Home() {
const [slidesToShow, setSlidesToShow] = useState(3);

const updateSlides = () => {
    if (window.innerWidth < 768) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(3);
    }
  };

useEffect(() => {
    updateSlides();
    window.addEventListener("resize", updateSlides); 

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex justify-center items-center bg-[#ec7037] text-white p-3 rounded-full cursor-pointer hover:bg-[#120e49] duration-300"
    >
      <Image src={"/forward.svg"} alt="forward svg" width={24} height={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#ec7037] flex justify-center items-center text-white p-3 rounded-full cursor-pointer hover:bg-[#120e49] duration-300"
    >
      <Image src={"/backward.svg"} alt="backward svg" width={24} height={24} />
    </div>
  );
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
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: slidesToShow,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <motion.div
        className="w-full h-[50vh] sm:h-[70vh] overflow-hidden relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-gradient-to-t from-black/70 via-black/50 to-transparent absolute w-full h-full z-10">
          <div className="flex flex-col gap-3.5 h-full justify-center sm:items-center w-full pl-2">
            <h3 className="font-bold text-[#ec7037] p-1 text-4xl">
              W&C Electrical
            </h3>
            <span className="text-white font-bold text-md sm:text-2xl ">
              <Typewriter
                words={[
                  "Powering Progress with Precision & Safety",
                  "Where Construction Meets Innovation",
                  "From Blueprint to Bright Lights",
                  "Driven by Energy, Defined by Quality.",
                  "Wiring the Future, Building with Integrity",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={0.001}
                delaySpeed={1000}
              />
            </span>
            <div className="flex gap-4">
              <button className="bg-[#ec7037] text-[#120e49] font-bold py-3 px-6 rounded-xl hover:bg-white duration-300">
            Call Now
          </button>
          <button className="text-[#ec7037] font-bold py-3 px-6 rounded-xl hover:bg-[#ec7037] hover:text-[#120e49] bg-[#120e49] duration-300">
            Contact Us
          </button>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {["/image-1.jpg", "/image-2.jpg", "/image-3.jpg", "/image-4.jpg"].map(
            (src, i) => (
              <div key={i} className="relative w-full h-[50vh] sm:h-[70vh]">
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  fill
                  priority={i === 0}
                  quality={50}
                  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 70vw,
         50vw"
                  className="object-cover "
                />
              </div>
            )
          )}
        </Slider>
      </motion.div>
      <motion.div
        className="p-5 mt-6 w-full rounded-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
viewport={{ once: true }}
      >
        <div className="flex justify-center">
          <h2 className="mt-4 text-[#120e49] font-bold text-2xl sm:text-3xl relative">
            Our Vision
            <span
              className={`absolute left-0 -bottom-1 h-[3px] w-full bg-[#ec7037] transition-all duration-300`}
            ></span>
          </h2>
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="vision text-md flex sm:items-center sm:w-[40%] text-[#120e49] sm:pl-10 sm:text-xl"
viewport={{ once: true }}
          >
            Our vision is to become the leading force in Pakistan’s construction
            and electrical industry, delivering state-of-the-art infrastructure
            and innovative electrical solutions that combine safety,
            sustainability, and cutting-edge technology, while creating lasting
            value for our clients, empowering communities, and fostering a
            culture of excellence and integrity across every project we
            undertake.
          </motion.div>
          <span
            className={` bg-[#ec7037] hidden sm:block transition-all duration-300 w-1`}
          ></span>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="ceo sm:w-[40%] flex justify-center"
viewport={{ once: true }}
          >
            <Image
              src={"/ceo.png"}
              width={300}
              height={300}
              priority
              alt="ceo image"
              className="object-cover h-[300px]"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
  className="mt-10 bg-[#120e49]"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="flex justify-center mb-4 mt-8 pt-9 sm:pt-5">
    <h2 className="text-white font-bold text-2xl sm:text-3xl relative">
      Our Achievements
      <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ec7037] transition-all duration-300"></span>
    </h2>
  </div>

  <motion.div
    className="flex sm:flex-row flex-col justify-between gap-6 sm:gap-0 flex-wrap px-10 py-7 "
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <StatCounter target={300} label="Employees" />
    <span className="h-16 w-[2px] bg-[#ec7037]/50 hidden sm:block"></span>
    <StatCounter target={250} label="Projects" />
    <span className="h-16 w-[2px] bg-[#ec7037]/50 hidden sm:block"></span>
    <StatCounter target={30} label="Cities Covered" />
    <span className="h-16 w-[2px] bg-[#ec7037]/50 hidden sm:block"></span>
    <StatCounter target={15} label="Years Of Experience" />
  </motion.div>
</motion.div>
      <motion.div
  className="mt-6"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
        <div className="flex justify-center">
          <h2 className="mt-4 text-[#120e49] font-bold text-2xl sm:text-3xl relative">
            Our Projects
            <span
              className={`absolute left-0 -bottom-1 h-[3px] w-full bg-[#ec7037] transition-all duration-300`}
            ></span>
          </h2>
        </div>
        <div className="w-[90%] sm:w-[80%] mx-auto mt-6 relative">
          <div className="min-h-[220px] sm:min-h-[270px] bg-gray-600/5 relative">
          <h3 className="text-center -z-30 text-black text-2xl absolute top-5 right-[45%]">Loading...</h3>
          <Slider {...settings2}>
            {[
              {
                id: 1,
                img: "/project-1.jpg",
                title:
                  "G-11 Sector - Apartment Project Electrical Installation",
              },
              {
                id: 2,
                img: "/project-1.jpg",
                title: "Commercial Plaza Wiring and Lighting Setup",
              },
              {
                id: 3,
                img: "/project-1.jpg",
                title: "Smart Home Automation – DHA Islamabad",
              },
              {
                id: 4,
                img: "/project-1.jpg",
                title: "Industrial Power Distribution System – Lahore",
              },
              {
                id: 5,
                img: "/project-1.jpg",
                title: "Mall Electrical Fit-Out - Karachi",
              },
            ].map((project) => (
              <div
                key={project.id}
                className="p-4 flex flex-col items-center bg-white h-full rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] duration-200 cursor-pointer"
              >
                <div className="relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-[#120e49] mt-3 text-center text-lg">
                  {project.title}
                </h4>
                <p className="underline cursor-pointer text-[#ec7037] mt-1">
                  View details &gt;
                </p>
              </div>
            ))}
          </Slider>
          </div>
        </div>
      </motion.div>
     <motion.div
  className="mt-12 bg-[#f9fafb] py-12"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="flex justify-center">
    <h2 className="text-[#120e49] font-bold text-2xl sm:text-3xl relative">
      Our Process
      <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ec7037] transition-all duration-300"></span>
    </h2>
  </div>

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] sm:w-[80%] mx-auto">
    {[
      {
        step: "01",
        title: "Consultation",
        desc: "We begin by understanding your project goals, requirements, and constraints through detailed discussion and on-site assessments.",
      },
      {
        step: "02",
        title: "Planning & Design",
        desc: "Our team crafts tailored electrical layouts and construction plans focused on safety, efficiency, and sustainability.",
      },
      {
        step: "03",
        title: "Implementation",
        desc: "We execute the project using high-quality materials and skilled engineers — ensuring timely and flawless delivery.",
      },
      {
        step: "04",
        title: "Testing & Handover",
        desc: "Every installation is rigorously tested for safety and performance before final handover to the client.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 duration-300 text-center"
      >
        <div className="text-[#ec7037] text-4xl font-bold mb-3">{item.step}</div>
        <h4 className="text-[#120e49] font-bold text-xl mb-2">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.div>
    </>
  );
}
