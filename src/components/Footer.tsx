import React from 'react';
import logo from "@/assets/images/logo.png"
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className='px-[9px]'>
        <div className='rounded-t-[20px] bg-[#FCF0E8]'>
<div className='footer-top'>
<div>
    <h2>Explore</h2>
</div>
</div>
<div className='copyright bg-[#343434] mx-[32px] rounded-t-[20px]'>
<Link href="/" className="nav-logo-link">
            <Image src={logo} alt="" />
          </Link>
</div>
        </div>
        </footer>
    );
}

export default Footer;
