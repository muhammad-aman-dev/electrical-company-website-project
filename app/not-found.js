"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-[#f9fafb] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md"
      >
        <div className="relative w-40 h-40 mx-auto mb-6">
          <Image
            src="/404-illustration.svg" 
            alt="Page not found"
            fill
            className="object-contain"
          />
        </div>

        <h1 className="text-5xl font-bold text-[#120e49]">404</h1>
        <h2 className="mt-2 text-2xl font-semibold text-[#ec7037]">
          Page Not Found
        </h2>
        <p className="mt-3 text-gray-600">
          The page you’re looking for might have been moved or deleted.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-[#120e49] text-[#ec7037] px-5 py-3 rounded-xl font-semibold hover:bg-[#ec7037] hover:text-[#120e49] transition"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="bg-[#ec7037] text-[#120e49] px-5 py-3 rounded-xl font-semibold hover:bg-[#120e49] hover:text-[#ec7037] transition"
          >
            Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
