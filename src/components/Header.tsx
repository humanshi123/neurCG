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

  // Handle link click to close the sidebar
  const handleLinkClick = () => {
    setIsToggleOpen(false);
  };

  return (
    <header className="px-[15px] mt-[10px] sticky top-[10px] z-10 lg:mt-[30px] lg:px-[30px] lg:top-[30px]">
      <div className="shadow-md nav-container w-full bg-white flex rounded-[7px] items-center justify-between py-[12.5px] px-[15px] md:px-[30px]">
        <div className="nav_logo lg:w-[188px]">
          <Link href="/" className="nav-logo-link">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={`nav-menu ${isToggleOpen ? "open" : ""}`}>
          <ul className="lg:flex items-center gap-[36px]">
            <button className="close-btn lg:hidden" onClick={handleToggleClose}>
              <ToggleClose />
            </button>
            <li>
              <Link
                href="/"
                className={clsx(
                  "nav-menu-list", 
                  { active: isActive("/") }
                )}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/use-case"
                className={clsx(
                  "nav-menu-list",
                  { active: isActive("/use-case") }
                )}
                onClick={handleLinkClick}
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={clsx(
                  "nav-menu-list",
                  { active: isActive("/contact") }
                )}
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={clsx(
                  "nav-menu-list",
                  { active: isActive("/about") }
                )}
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className={clsx(
                  "nav-menu-list",
                  { active: isActive("/pricing") }
                )}
                onClick={handleLinkClick}
              >
                Pricing
              </Link>
            </li>
            <li className="md:hidden">
              <Link
                href="/contact"
                className="nav-menu-list"
                onClick={handleLinkClick}
              >
                Free Trial
              </Link>
            </li>
            <li className="md:hidden">
              <Link
                href="/contact"
                className="nav-menu-list"
                onClick={handleLinkClick}
              >
                Login
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
