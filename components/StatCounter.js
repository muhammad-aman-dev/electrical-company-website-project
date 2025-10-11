'use client';
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaUsers, FaCity, FaProjectDiagram, FaAward } from "react-icons/fa";

export default function StatCounter({ target = 1000, duration = 2, label }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  const getIcon = () => {
    const l = label?.toLowerCase() || "";
    if (l.includes("employee")) return <FaUsers size={40} />;
    if (l.includes("project")) return <FaProjectDiagram size={40} />;
    if (l.includes("city")) return <FaCity size={40} />;
    if (l.includes("year")) return <FaAward size={40} />;
    return <FaAward size={40} />;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{
        boxShadow: "0 0 20px rgba(236,112,55,0.25)",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-md rounded-2xl px-6 py-8 shadow-md border border-white/10 hover:border-[#ec7037]/40 transition-all duration-300"
    >
      <div className="text-[#ec7037] mb-3">{getIcon()}</div>
      <div className="h-[60px] flex items-center justify-center">
        <span className="text-5xl font-extrabold text-[#ec7037] tracking-tight">
          {count.toLocaleString()}+
        </span>
      </div>
      <p className="mt-2 text-white text-lg font-semibold tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}