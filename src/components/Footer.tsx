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
    <footer className="px-[9px] mt-[40px] lg:mt-[80px]">
      <div className="rounded-t-[20px] bg-[#FCF0E8] pt-[40px] md:pt-[70px] ">
        <div className="footer-top container flex flex-wrap lg:flex-nowrap !pb-[60px] ">
          <div className="w-[100%] md:w-[50%] lg:w-[35%]">
            <h2 className="text-[#e56f20] text-xl font-semibold mb-3 md:mb-7">Explore</h2>
            <ul className="p-0 m-0 flex flex-wrap gap-y-2 md:gap-y-5">
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
          <div className="w-[100%] pt-[20px] md:pt-0 md:w-[50%] lg:w-[35%]">
            <h2 className="text-[#e56f20] text-xl font-semibold mb-3 md:mb-7">Visit us</h2>
            <p className="text-[#212f33] text-base mb-2 md:mb-5">Max-Planck-Ring 4, 72076 Tübingen, Germany</p>
            <p className="text-[#212f33] text-base mb-2 md:mb-5">(+49) 1512 8950 793</p>
            <p className="text-[#212f33] text-base ">neurcg@gmail.com</p>
          </div>
          <div className="w-[100%] pt-[20px] lg:w-[35%] lg:pt-0">
          <h2 className="text-[#e56f20] text-xl font-semibold mb-3 md:mb-7">Sign Up</h2>
          <p className="text-[#212f33] text-base mb-2 md:mb-[17px]">Enter your email address to get the latest updates.</p>
          <label htmlFor="" className="flex flex-col items-center justify-between p-1 rounded-[10px] border border-[#b8b8b8] bg-white md:flex-row">
            <input type="email" name="" id="" placeholder="Your Email Address..."
            className="h-full px-[18px] py-3  w-full placeholder:tracking-[2px]"/>
            <button className="button !h-[47px] tracking-[1px] leading-[25px] !py-[10px] w-full md:w-auto ">Subscribe</button>
          </label>
          </div>
        </div>
        <div className="copyright pt-[31px] pb-[20.5px] px-[15px] bg-[#343434] mx-[15px] rounded-t-[20px] text-center gap-2 justify-center flex flex-wrap lg:flex-nowrap items-center md:justify-between md:px-[40px] lg:px-[70px] md:mx-[32px]">
          <Link href="/" className="nav-logo-link">
            <Image src={logo} alt="" className="max-w-[110px] "/>
          </Link>
          <p className="text-center text-white text-base leading-[25px] tracking-wide w-full md:w-auto">Copyright © 2020 - 2025 NeurCG</p>
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
