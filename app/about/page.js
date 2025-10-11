"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-[#120e49]">
      <motion.section
        className="relative h-[50vh] sm:h-[70vh] flex justify-center items-center overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/about-banner.jpg"
          alt="About W&C Electrical"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col justify-center items-center z-10 text-center px-4">
          <h1 className="text-[#ec7037] font-bold text-4xl sm:text-5xl">
            About Us
          </h1>
          <p className="text-white mt-4 max-w-2xl text-lg sm:text-xl">
            Empowering Communities Through Reliable Energy.
          </p>
        </div>
      </motion.section>

      {/* ===== COMPANY OVERVIEW ===== */}
      <motion.section
        className="py-12 px-6 sm:px-16 bg-[#f9fafb]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold relative inline-block">
          Who We Are
          <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ec7037]"></span>
        </h2>
        <p className="text-center mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Founded with a vision to redefine Pakistan’s electrical and
          construction landscape, <span className="font-semibold">W&C Electrical</span> specializes in
          delivering high-quality, safe, and sustainable infrastructure
          solutions. From residential and commercial installations to
          large-scale industrial projects, our team of skilled engineers,
          project managers, and technicians ensures every job is completed with
          precision, professionalism, and passion.
        </p>
      </motion.section>

      {/* ===== MISSION & VALUES ===== */}
      <motion.section
        className="py-12 px-6 sm:px-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold relative inline-block">
          Our Mission & Values
          <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ec7037]"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Our Mission",
              desc: "To power progress through reliable, innovative, and energy-efficient electrical solutions that uplift communities and businesses.",
            },
            {
              title: "Integrity",
              desc: "We believe in transparency, accountability, and doing what’s right — even when no one is watching.",
            },
            {
              title: "Excellence",
              desc: "Quality isn’t an act, it’s our standard. Every project reflects our dedication to perfection.",
            },
            {
              title: "Sustainability",
              desc: "We adopt eco-friendly technologies that minimize waste and maximize energy efficiency.",
            },
            {
              title: "Customer Focus",
              desc: "Our clients are at the heart of what we do — every decision revolves around their satisfaction.",
            },
            {
              title: "Teamwork",
              desc: "We thrive through collaboration, uniting skilled minds to deliver world-class results.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[#ec7037] font-bold text-xl mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        className="py-12 px-6 sm:px-16 bg-[#120e49] text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold relative inline-block">
          Our Journey
          <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ec7037]"></span>
        </h2>
        <div className="mt-10 space-y-6 max-w-3xl mx-auto">
          {[
            { year: "2010", text: "Founded as a small electrical contracting firm." },
            { year: "2015", text: "Expanded operations into commercial construction." },
            { year: "2018", text: "Launched our Smart Automation Division." },
            { year: "2022", text: "Completed our 250th project milestone across 30+ cities." },
            { year: "2025", text: "Continuing to lead with advanced electrical infrastructure projects nationwide." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-white/10 p-4 rounded-xl hover:bg-[#ec7037]/20 duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-[#ec7037] text-xl font-bold min-w-[70px]">
                {item.year}
              </span>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== WHY CHOOSE US ===== */}
      <motion.section
        className="py-12 px-6 sm:px-16 bg-[#f9fafb]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl sm:text-4xl font-bold relative inline-block">
          Why Choose Us
          <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#ec7037]"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {[
            { label: "15+ Years Experience" },
            { label: "250+ Completed Projects" },
            { label: "300+ Skilled Employees" },
            { label: "Nationwide Service" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#ec7037] font-bold text-xl">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== CTA SECTION ===== */}
      <motion.section
        className="bg-[#120e49] py-16 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Let’s Build Something Great Together
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-300">
          Whether it’s powering your next construction project or upgrading your
          electrical infrastructure — we’re here to make it happen.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-[#ec7037] text-[#120e49] font-bold py-3 px-6 rounded-xl hover:bg-white duration-300">
            Call Now
          </button>
          <button className="border-2 border-[#ec7037] text-[#ec7037] font-bold py-3 px-6 rounded-xl hover:bg-[#ec7037] hover:text-[#120e49] duration-300">
            Contact Us
          </button>
        </div>
      </motion.section>
    </div>
  );
}
