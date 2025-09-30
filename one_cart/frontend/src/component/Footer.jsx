import React from "react";
import logo from "../assets/logo/vcart logo.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-auto md:mt-0">
      {/* Top Section */}
      <div className="w-full bg-[#dbfcfc] flex flex-col md:flex-row items-start justify-between md:px-[60px] px-[20px] py-[40px] gap-8">
        
       
        <div className="md:w-[35%] w-full flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="OneCart Logo"
              className="md:w-[45px] md:h-[45px] w-[35px]"
            />
            <p className="text-[22px] font-bold text-black">OneCart</p>
          </div>
          <p className="text-[15px] leading-relaxed text-[#1e2223]">
            OneCart is your all-in-one online shopping destination, offering
            top-quality products, unbeatable deals, and fast delivery — all
            backed by trusted service designed to make your life easier every day.
          </p>
        </div>

        {/* MIDDLE SECTION - Company Links */}
        <div className="md:w-[20%] w-full flex flex-col items-center text-center">
          <p className="text-[20px] text-[#1e2223] font-semibold mb-3">
            COMPANY
          </p>
          <ul className="space-y-2">
            <li className="text-[15px] text-[#1e2223] hover:text-blue-600 cursor-pointer transition">
              Home
            </li>
            <li className="text-[15px] text-[#1e2223] hover:text-blue-600 cursor-pointer transition">
              About us
            </li>
            <li className="text-[15px] text-[#1e2223] hover:text-blue-600 cursor-pointer transition">
              Delivery
            </li>
            <li className="text-[15px] text-[#1e2223] hover:text-blue-600 cursor-pointer transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION - Get in Touch */}
        <div className="md:w-[25%] w-full flex flex-col items-center text-center">
          <p className="text-[20px] text-[#1e2223] font-semibold mb-3">
            GET IN TOUCH
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-[15px] text-[#1e2223]">
              <FaPhoneAlt /> +91-9876543210
            </li>
            <li className="flex items-center gap-2 text-[15px] text-[#1e2223]">
              <FaEnvelope /> contact@onecart.com
            </li>
            <li className="flex items-center gap-2 text-[15px] text-[#1e2223]">
              <FaPhoneAlt /> +1-123-456-7890
            </li>
            <li className="flex items-center gap-2 text-[15px] text-[#1e2223]">
              <FaEnvelope /> admin@onecart.com
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-slate-300"></div>

      {/* Bottom Copyright */}
      <div className="w-full bg-[#dbfcfcec] flex items-center justify-center py-4">
        <p className="text-[14px] md:text-[15px] text-[#1e2223] text-center font-medium">
          © 2025 OneCart.com — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
