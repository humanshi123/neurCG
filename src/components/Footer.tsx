"use client"
import React from "react";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { TopButton } from "@/utils/svgicons";


const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <footer className="px-[9px] mt-[80px]">
      <div className="rounded-t-[20px] bg-[#FCF0E8] pt-[70px]  ">
        <div className="footer-top container flex pb-[60px] ">
          <div className="w-[30%]">
            <h2 className="text-[#e56f20] text-xl font-semibold mb-7">Explore</h2>
            <ul className="p-0 m-0 flex flex-wrap gap-y-5">
                <li className="w-1/2">
                <Link href="/" className="text-[#212f33] text-base ">Home</Link>
                </li>
                <li className="w-1/2">
                <Link href="/" className="text-[#212f33] text-base ">About Us</Link>
                </li>
                <li className="w-1/2">
                <Link href="/" className="text-[#212f33] text-base ">Use Cases</Link>
                </li>
                <li className="w-1/2">
                <Link href="/" className="text-[#212f33] text-base ">Pricing</Link>
                </li>
                <li className="w-1/2">
                <Link href="/" className="text-[#212f33] text-base ">Contact Us</Link>
                </li>
            </ul>
          </div>
          <div className="w-[35%]">
            <h2 className="text-[#e56f20] text-xl font-semibold mb-7">Visit us</h2>
            <p className="text-[#212f33] text-base mb-5">Max-Planck-Ring 4, 72076 Tübingen, Germany</p>
            <p className="text-[#212f33] text-base mb-5">(+49) 1512 8950 793</p>
            <p className="text-[#212f33] text-base ">neurcg@gmail.com</p>
          </div>
          <div className="w-[35%]">
          <h2 className="text-[#e56f20] text-xl font-semibold mb-7">Sign Up</h2>
          <label htmlFor="" className="flex items-center justify-between p-1 rounded-[10px] border border-[#b8b8b8] bg-white">
            <input type="email" name="" id="" placeholder="Your Email Address..."
            className="h-full px-[18px] py3 "/>
            <button className="button !h-[47px]">Subscribe</button>
          </label>
          </div>
        </div>
        <div className="copyright pt-[30px] pb-5 px-[70px] bg-[#343434] mx-[32px] rounded-t-[20px] flex items-center justify-between">
          <Link href="/" className="nav-logo-link">
            <Image src={logo} alt="" />
          </Link>
          <p className="text-center text-white text-base leading-[25px] tracking-wide">Copyright © 2020 - 2025 NeurCG</p>
        <div className="flex items-center gap-4">
        <p className="text-white text-base ">Back To Top</p>
       <button onClick={scrollToTop} className="cursor-pointer "><TopButton/></button> 
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
