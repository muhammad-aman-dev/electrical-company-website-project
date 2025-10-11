'use client';
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaCity,
  FaProjectDiagram,
  FaAward,
} from "react-icons/fa";

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
    if (l.includes("employee")) return <FaUsers size={42} />;
    if (l.includes("project")) return <FaProjectDiagram size={42} />;
    if (l.includes("city")) return <FaCity size={42} />;
    if (l.includes("year")) return <FaAward size={42} />;
    return <FaAward size={42} />;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(236,112,55,0.35)",
        background: "linear-gradient(145deg, #1e1a63, #0e0b3d)",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-white/5 border border-[#ec7037]/20 rounded-2xl p-8 text-center backdrop-blur-md shadow-lg transition-all duration-500 hover:border-[#ec7037]/60 hover:shadow-[#ec7037]/20"
    >
      {/* Glow ring behind icon */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#ec7037]/10 rounded-full blur-2xl"></div>

      <motion.div
        className="relative text-[#ec7037] mb-4 flex justify-center"
        whileHover={{ rotate: 10, scale: 1.15 }}
        transition={{ type: "spring", stiffness: 200, damping: 8 }}
      >
        {getIcon()}
      </motion.div>

      <AnimatePresence>
        <motion.span
          key={count}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1.2, 1] }}
          transition={{ duration: 0.4 }}
          className="block text-5xl font-extrabold text-[#ec7037] tracking-tight"
        >
          {count.toLocaleString()}+
        </motion.span>
      </AnimatePresence>

      <p className="mt-2 text-white text-lg font-semibold tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}