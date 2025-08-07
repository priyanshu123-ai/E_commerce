import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/vcart logo.png";
import axios from "axios";
import { adminDataContext } from "../context/AdminContext";

const Nav = () => {
  const navigate = useNavigate();
  const {getAdmin} = useContext(adminDataContext)

  const LogOut = async () => {
    try {
      const result = await axios.get("http://localhost:4000/api/user/logout",{
        withCredentials:true
      })
      console.log(result.data);
      getAdmin()
      navigate("/login");

      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div
      className="w-[100vw] h-[90px] bg-[#ecfafaec] fixed top-0 z-50 shadow-md shadow-black border-b border-gray-300 flex items-center justify-between px-[30px]"
      onClick={() => navigate("/")}
    >
      <div
        className="w-[30%] flex items-center justify-start gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="" className="w-[30px]" />
        <h1 className="text-[25px] text-black font-sans">OneCart</h1>
      </div>

      <button className="text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white" onClick={LogOut}>
        LogOut
      </button>
    </div>
  );
};

export default Nav;
