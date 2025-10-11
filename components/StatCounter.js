'use client'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-[#ec7037]"
    >
      <span className="text-5xl font-bold ">{count.toLocaleString()}+</span>
      {label && <span className="text-lg mt-1 text-white font-bold">{label}</span>}
    </motion.div>
  );
}
