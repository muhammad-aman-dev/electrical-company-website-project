'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [phoneMenu, setphoneMenu] = useState(false)

  function alterPhoneMenu(){
    setphoneMenu(!phoneMenu)
  }

  return (
    <>
    <header className="flex p-2 items-center justify-between top-[0.1px] bg-white sticky">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={600}
          height={600}
          className="w-18 h-14"
        />
      </Link>
      <div className="links hidden sm:flex">
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className={`relative inline-block font-bold duration-300 group ${
                pathname === "/" ? "text-[#ec7037]" : "text-[#120e49] hover:text-[#ec7037]"
              }`}
            >
              Home
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ec7037] transition-all duration-300 ${
                  pathname === "/" ? "w-3/4" : "group-hover:w-3/4"
                }`}
              ></span>
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={`relative inline-block font-bold duration-300 group ${
                pathname === "/about" ? "text-[#ec7037]" : "text-[#120e49] hover:text-[#ec7037]"
              }`}
            >
              About
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ec7037] transition-all duration-300 ${
                  pathname === "/about" ? "w-3/4" : "group-hover:w-3/4"
                }`}
              ></span>
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              className={`relative inline-block font-bold duration-300 group ${
                pathname === "/projects" ? "text-[#ec7037]" : "text-[#120e49] hover:text-[#ec7037]"
              }`}
            >
              Projects
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ec7037] transition-all duration-300 ${
                  pathname === "/projects" ? "w-3/4" : "group-hover:w-3/4"
                }`}
              ></span>
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`relative inline-block font-bold duration-300 group ${
                pathname === "/contact" ? "text-[#ec7037]" : "text-[#120e49] hover:text-[#ec7037]"
              }`}
            >
              Contact
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ec7037] transition-all duration-300 ${
                  pathname === "/contact" ? "w-3/4" : "group-hover:w-3/4"
                }`}
              ></span>
            </Link>
          </li>
        </ul>
      </div>
      <button className="font-bold outline-none hidden sm:block bg-[#120e49] text-[#ec7037] py-1 px-3 hover:bg-[#ec7037] hover:text-[#120e49] duration-300 cursor-pointer rounded-xl">
        Call Now
      </button>
      <Image src={'/menu.svg'} alt="menu" width={300} height={300} className="w-12 h-12 sm:hidden" onClick={(e)=>{e.stopPropagation();alterPhoneMenu();}}/>
    </header>
   <div
  className={`fixed top-0 left-0 z-50 h-screen w-full bg-white sm:hidden flex flex-col items-start pl-2 py-7
  duration-500 ease-in-out gap-12
  ${phoneMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
>
  <Image
    src="/close.svg"
    alt="close"
    width={300}
    height={300}
    className="w-12 h-12 absolute top-4 right-4 cursor-pointer"
    onClick={(e)=>{e.stopPropagation();alterPhoneMenu();}}
  />
  <ul className="flex flex-col gap-6">
          <li>
            <Link
              href="/"
              onClick={alterPhoneMenu}
              className={`relative text-2xl inline-block font-bold duration-300 group ${
                pathname === "/" ? "text-[#ec7037]" : "text-[#120e49] hover:text-[#ec7037]"
              }`}
            >
              Home
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ec7037] transition-all duration-300 ${
                  pathname === "/" ? "w-3/4" : "group-hover:w-3/4"
                }`}
              ></span>
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              onClick={alterPhoneMenu}
              className={`relative text-2xl inline-block font-bold duration-300 group ${
                pathname === "/about" ? "text-[#ec7037]" : "text-[#120e49] hover:text-[#ec7037]"
              }`}
            >
              About
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ec7037] transition-all duration-300 ${
                  pathname === "/about" ? "w-3/4" : "group-hover:w-3/4"
                }`}
              ></span>
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              onClick={alterPhoneMenu}
              className={`relative text-2xl inline-block font-bold duration-300 group ${
                pathname === "/projects" ? "text-[#ec7037]" : "text-[#120e49] hover:text-[#ec7037]"
              }`}
            >
              Projects
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ec7037] transition-all duration-300 ${
                  pathname === "/projects" ? "w-3/4" : "group-hover:w-3/4"
                }`}
              ></span>
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={alterPhoneMenu}
              className={`relative text-2xl inline-block font-bold duration-300 group ${
                pathname === "/contact" ? "text-[#ec7037]" : "text-[#120e49] hover:text-[#ec7037]"
              }`}
            >
              Contact
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ec7037] transition-all duration-300 ${
                  pathname === "/contact" ? "w-3/4" : "group-hover:w-3/4"
                }`}
              ></span>
            </Link>
          </li>
        </ul>
        <button className="font-bold outline-none bg-[#120e49] text-[#ec7037] py-2 px-6 hover:bg-[#ec7037] hover:text-[#120e49] duration-300 cursor-pointer text-2xl rounded-xl w-52 h-12">
        Call Now
      </button>
      <div className="flex flex-col gap-1">
      <Image
          src="/logo.png"
          alt="logo"
          width={600}
          height={600}
          className="w-18 h-14"
        />
        <p className="text-[#120e49]">W&C Electrical Pvt. Ltd. | Since 2010</p>
</div>
</div>

        </>
        );
}
