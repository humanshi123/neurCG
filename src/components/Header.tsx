"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ToggleClose, ToggleIcon } from "../utils/svgicons";
import logo from "@/assets/images/logo.png";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const handleToggleClose = () => {
    setIsToggleOpen(false);
  };

  return (
    //sticky top-[30px]
    <header className="px-[30px] mt-[30px] sticky top-[30px] z-10 ">
      <div className=" shadow-md nav-container w-full bg-white flex rounded-[7px] items-center justify-between py-[12.5px] px-[15px]  md:px-[30px]">
        <div className="nav_logo lg:w-[188px]">
          <Link href="/" className="nav-logo-link">
            <Image src={logo} alt="" />
          </Link>
        </div>
        <div className={`nav-menu ${isToggleOpen ? "open" : ""}`}>
          <ul className="lg:flex items-center gap-[36px] ">
            <button className="close-btn lg:hidden" onClick={handleToggleClose}>
              <ToggleClose />
            </button>
            <li>
              {/* className="nav-menu-list" */}
              <Link
                href="/"
                className={clsx(
                  "nav-menu-list", // default class
                  { active: isActive("/") } // conditional class
                )}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/use-case"
                className={clsx(
                  "nav-menu-list", // default class
                  { active: isActive("/use-case") } // conditional class
                )}
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="/therapistnetwork" className={clsx(
                  "nav-menu-list", // default class
                  { active: isActive("/contact") } // conditional class
                )}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className={clsx(
                  "nav-menu-list", // default class
                  { active: isActive("/about") } // conditional class
                )}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className={clsx(
                  "nav-menu-list", // default class
                  { active: isActive("/pricing") } // conditional class
                )}>
                Pricing
              </Link>
            </li>
            <li className="md:hidden mt-4">
              <Link
                href="/login"
                className="text-white text-sm bg-[#283C63] rounded-[30px] px-[30px] py-[13px]"
              >
                Login
              </Link>
            </li>
            <li className="md:hidden mt-4">
              <Link
                href="/login"
                className="text-white text-sm bg-[#283C63] rounded-[30px] px-[30px] py-[13px]"
              >
                Free Trial
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex gap-[30px] justify-end items-center">
          <p>
            <Link href="/contact" className="nav-menu-list">
              Login
            </Link>
          </p>
          <p>
            <Link
              href="/contact"
              className="nav-menu-list lg:!inline-block !text-white bg-[#E56F20] rounded-[4px] lg:!px-[30px] !py-[12px]"
            >
              Free Trial
            </Link>
          </p>
        </div>
        <p className="menuToggleBtn lg:hidden" onClick={handleToggleOpen}>
          <ToggleIcon />
        </p>
      </div>
    </header>
  );
};

export default Header;
