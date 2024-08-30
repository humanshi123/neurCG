import { Facebook, Instagram, Linkedin } from "@/utils/svgicons";
import React from "react";

const Contact = () => {
  return (
<div className="container">
<div className="grid  gap-10 items-center lg:grid-cols-[minmax(0,_5.5fr)_minmax(0,_6.5fr)]">
        <div className="rounded-[20px] bg-[#FCF0E8] py-[30px] px-[15px] md:py-[60px] md:px-[40px]">
          <h2 className="text-[28px] text-[#E56F20] font-[700]  mb-[20px] md:mb-10 md:text-[48px]">
            Contact <span className="text-[#343434]">Us</span>
          </h2>
          <h3 className="text-[#e56f20] text-sm mb-[10px] uppercase">
            Location
          </h3>
          <p className="text-[#202c2f] text-xl font-semibold mb-7">
            Max-Planck-Ring 4, 72076 Tübingen, <br /> Germany
          </p>
          <h3 className="text-[#e56f20] text-sm mb-[10px] uppercase">
            Call Us
          </h3>
          <p className="text-[#202c2f] text-xl font-semibold mb-7">
            (+49) 1512 8950 793
          </p>
          <h3 className="text-[#e56f20] text-sm mb-[10px] uppercase">
            Mail Us
          </h3>
          <p className="text-[#202c2f] text-xl font-semibold mb-7">
            neurcg@gmail.com
          </p>
          <h3 className="text-[#e56f20] text-sm mb-[10px] uppercase">
            Follow Us
          </h3>
          <p className="flex items-center gap-[15px]">
            <Facebook /> <Instagram /> <Linkedin />{" "}
          </p>
        </div>
        <div className="right-section">
          <label htmlFor="" className="text-[#212f33] flex flex-col mb-[20px] md:mb-[33px] md:flex-row text-xl md:text-3xl">
            My Name Is
            <input
              type="text"
              name=""
              id=""
              placeholder="John Doe"
              className="placeholder:underline placeholder:text-[#C8C8C8]  m-1 md:mt-0 md:ml-3"
            />
          </label>
          <label htmlFor="" className="text-[#212f33] flex flex-col mb-[20px] md:mb-[33px] md:flex-row text-xl md:text-3xl">
            You can call me on
            <input
              type="number"
              name=""
              id=""
              placeholder="this phone number"
              className="placeholder:underline placeholder:text-[#C8C8C8]  m-1 md:mt-0 md:ml-3"
            />
          </label>
          <label htmlFor="" className="text-[#212f33] flex flex-col mb-[20px] md:mb-[33px] md:flex-row text-xl md:text-3xl">
            and email me at
            <input
              type="text"
              name=""
              id=""
              placeholder="this email address"
              className="placeholder:underline placeholder:text-[#C8C8C8]  m-1 md:mt-0 md:ml-3"
            />
          </label>
          <label htmlFor="" className="text-[#212f33] mb-[18px] flex flex-col md:flex-row text-xl md:text-3xl">
            I’d like to mention...
          </label>
          <textarea
            name=""
            id=""
            rows={3}
            className="w-full bg-[#F0F0F0] rounded-[10px] p-[14px] placeholder:text-[#B0B0B0] "
            placeholder="Type anything..."
          ></textarea>
          <button className="button mt-5 md:mt-[35px] md:px-[40px]">Submit</button>
        </div>
      </div>
</div>

  );
};

export default Contact;
