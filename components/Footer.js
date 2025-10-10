'use client'
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 flex bg-[#f0f2f6] text-gray-300 py-10 px-8">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-7">
        <div><Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          priority
          width={600}
          height={600}
          className="w-22 h-16"
        />
       </Link>
       </div>
       <div className="explore text-[#120e49] font-bold flex flex-col pl-10 pt-2 md:p-0">
        <h3 className="text-xl sm:text-2xl">Explore</h3>
        <ul className="flex flex-col">
        <li><Link className="text-[#ec7037] underline text-md" href={'/contact'}>
        Contact Us
        </Link></li>
        <li><Link className="text-[#ec7037] underline text-md" href={'/services'}>
        Services
        </Link></li>
        <li><Link className="text-[#ec7037] underline text-md" href={'/careeres'}>
        Careers
        </Link></li>
        </ul>
       </div>
       <div className="explore text-[#120e49] font-bold flex flex-col col-span-2">
        <h3 className="text-xl sm:text-2xl">Get in touch</h3>
        <ul className="flex flex-col">
        <li className="text-[#2e2e2e] text-md">
        📍Address: Plot #45, Industrial Estate Phase 2, Khanewal Road, Multan, Pakistan
        </li>
        <li className="text-[#2e2e2e] text-md">
        📞Phone: +92 300 1234567 
        </li>
        <li className="text-[#2e2e2e] text-md">
        ✉Email: info@wcelectrical.com
        </li>
        <li className="text-[#2e2e2e] text-md">
        ⏰Working Hours: Mon-Sat: 9:00 AM - 6:00 PM
        </li>     
        </ul>
       </div>
       <div className="flex flex-col md:flex-row col-span-2 md:col-span-4  gap-8 md:gap-0 md:justify-between">
       <div className="explore text-[#120e49] font-bold flex flex-col md:p-0">
        <h3 className="text-xl sm:text-2xl">Follow Us</h3>
        <div className="flex space-x-4 mt-4 text-2xl text-gray-700">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="hover:text-blue-600" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-700" />
      </a>
    </div>
        </div>
      <div className="text-[#2e2e2e] flex items-end">Privacy Policy / Accessibility Copyright&copy; 2025 W&C Electrical Inc. | All Rights Reserved</div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
