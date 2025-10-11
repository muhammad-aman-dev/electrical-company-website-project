'use client'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaUsers, FaCity, FaProjectDiagram, FaAward } from "react-icons/fa"; // 👈 react-icons

export default function StatCounter({ target = 1000, duration = 2, label }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  // Map icon based on label
  const getIcon = () => {
    const lower = label?.toLowerCase() || "";
    if (lower.includes("employee")) return <FaUsers className="text-[#ec7037]" size={36} />;
    if (lower.includes("project")) return <FaProjectDiagram className="text-[#ec7037]" size={36} />;
    if (lower.includes("city")) return <FaCity className="text-[#ec7037]" size={36} />;
    if (lower.includes("year")) return <FaAward className="text-[#ec7037]" size={36} />;
    return <FaAward className="text-[#ec7037]" size={36} />;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{
        scale: 1.08,
        y: -8,
        boxShadow: "0px 8px 20px rgba(236, 112, 55, 0.3)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center bg-white/10 rounded-2xl px-6 py-8 shadow-md hover:shadow-xl transition-all duration-300 border border-white/10 backdrop-blur-sm"
    >
      <div className="bg-[#ec7037]/15 p-4 rounded-full mb-3">{getIcon()}</div>
      <span className="text-5xl font-extrabold text-[#ec7037] drop-shadow-sm tracking-tight">
        {count.toLocaleString()}+
      </span>
      {label && (
        <span className="text-lg font-semibold text-white mt-1 tracking-wide">
          {label}
        </span>
      )}
    </motion.div>
  );
}