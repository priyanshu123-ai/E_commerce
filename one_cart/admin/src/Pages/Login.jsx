import React, { useState, useContext } from "react";
import Logo from "../assets/vcart logo.png";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEye } from "react-icons/io5";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { adminDataContext } from "../context/AdminContext";

const Login = () => {
  const navigate = useNavigate();
  const { serveUrl } = useContext(authDataContext);
  const [show, setShow] = useState(false);
  const {adminData,getAdmin} = useContext(adminDataContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serveUrl}/api/user/adminLogin`,
        {
          email: form.email,
          password: form.password,
        },
        { withCredentials: true }
      );
      getAdmin();
      navigate("/")

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-[40px]" src={Logo} alt="" />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-semibold">Login Page</span>
        <span className="text-[16px]">
          Welcome to OneCart, Apply to Admin Login
        </span>
      </div>

      <div className="max-w-[600px] w-[90%] h-[300px] bg-[#00000025] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px] relative"
        >
          <div className="w-[90%] mt-5 flex flex-col items-center justify-center gap-[15px]">
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-[100%] h-[50px] border-[2px] border-[96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              required
            />
            <input
              type={show ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-[100%] h-[50px] border-[2px] border-[96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password"
              required
            />

            {!show ? (
              <IoEyeOutline
                className="w-[20px] h-[20px] bottom-[55%] cursor-pointer absolute right-[8%]"
                onClick={() => setShow((prev) => !prev)}
              />
            ) : (
              <IoEye
                className="w-[20px] h-[20px] cursor-pointer bottom-[55%] absolute right-[8%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}

            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
