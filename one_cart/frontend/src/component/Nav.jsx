import React, { useContext } from "react";
import logo from "../assets/logo/vcart logo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { UserContext } from "../context/UserContext";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AuthDataContext } from "../context/authContext";
import { FaHome } from "react-icons/fa";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";

const Nav = () => {
  const { user, getCurrentUser } = useContext(UserContext);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { serverUrl } = useContext(AuthDataContext);

  const handlelogOut = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/logout`, {
        withCredentials: true,
      });
      console.log(result.data);
      getCurrentUser();
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="w-[100vw] h-[90px] bg-[#ecfafaec] fixed top-0 z-50 shadow-md shadow-black border-b border-gray-300 flex items-center justify-between px-[30px]">
      <div className="flex items-center  gap-[10px]">
        <img src={logo} alt="" className="w-[40px]" />
        <h1 className="text-[25px] text-black font-sans">One Cart</h1>
      </div>
      <div className="hidden md:flex">
        <ul className="flex items-center justify-center gap-[10px] lg:gap-[19px] text-white">
          <li className="text-[12px] lg:text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            HOME
          </li>
          <li className="text-[12px] lg:text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            COLLECTIONS
          </li>
          <li className="text-[12px] lg:text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            ABOUT
          </li>
          <li className="text-[12px] lg:text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            CONTACT
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end gap-[20px]">
        {!showSearch && (
          <IoSearchCircleOutline
            className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}
        {showSearch && (
          <IoSearchCircleSharp
            className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}
        {!user && (
          <FaCircleUser
            className="w-[30px] h-[30px] text-[#000000] cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          />
        )}
        {user && (
          <div
            className="w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {user?.name.slice(0, 1)}
          </div>
        )}
        <MdOutlineShoppingCart className="w-[38px] h-[38px] text-[#000000] cursor-pointer hidden md:block" />
        <p className="absolute w-[20px] h-[20px] items-center justify-center bg-black px-[4px] py-[1px] text-white rounded-full text-[10px] top-[17px] right-[25px] cursor-pointer hidden md:block">
          10
        </p>
      </div>

      {showSearch && (
        <div className="w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center">
          <input
            type="text"
            className="w-[50%] h-[60%] bg-[#233533] text-white rounded-[30px] px-[30px] placeholder:text-white text-[18px]"
            placeholder="Search Here"
          />
        </div>
      )}

      {showProfile && (
        <div className="absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10">
          <ul className="w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-white">
            {!user && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}
            {user && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  handlelogOut();
                  setShowProfile(false);
                }}
              >
                LogOut
              </li>
            )}
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              Orders
            </li>
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              About
            </li>
          </ul>
        </div>
      )}
      <div className="w-[100vw] h-[90px] flex items-center justify-between px-[20px] text-[12px] fixed bottom-0 left-0 bg-[#191818] md:hidden">
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <FaHome className="w-[25px] h-[25px] text-white md:hidden" />
          Home
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <HiOutlineCollection className="w-[25px] h-[25px] text-white md:hidden" />
          Collections
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <FaHome className="w-[25px] h-[25px] text-white md:hidden" />
          About
        </button>
        <button className="text-white flex items-center justify-center flex-col gap-[2px]">
          <MdContacts className="w-[25px] h-[25px] text-white md:hidden" />
          Contact
        </button>
      </div>
    </div>
  );
};

export default Nav;
