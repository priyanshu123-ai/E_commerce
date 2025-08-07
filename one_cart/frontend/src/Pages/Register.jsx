import React, { useContext, useState } from "react";
import Logo from "../assets/logo/vcart logo.png";
import google from "../assets/logo/Google.png";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import axios from "axios"
import { AuthDataContext } from "../context/authContext";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const {user,getCurrentUser} = useContext(UserContext);
  const {serverUrl} = useContext(AuthDataContext);
  const [show, setShow] = useState(false);
  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  const onhandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
       `${serverUrl}/api/user/register`,
       form,
       {withCredentials: true }
      )
      console.log(form);
      console.log(response)
      getCurrentUser()
      navigate("/")
      
    } catch (error) {
      console.log(error)
      
    }
  }

  const googleSignup = async () =>  {
    try {
      const response =  await signInWithPopup(auth,provider)
      const user = response.user
      const name = user.displayName
      const email = user.email
      
      const result = await axios.post(`${serverUrl}/api/user/googlelogin`,
        {name,email},
        {withCredentials:true}
      )
      console.log(result.data)
      getCurrentUser()
      navigate("/")
      
    } catch (error) {
      console.log(error)
      
    }
  }
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
        <span className="text-[25px] font-semibold">Registration Page</span>
        <span className="text-[16px]">
          Welcome to OneCart, Place your order
        </span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form
        onSubmit={onhandleSubmit}
          action=""
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px] relative"
        >
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer" onClick={googleSignup}>
            <img src={google} alt="" className="w-[20px]" />
            Registration with Google
          </div>
          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
            OR
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>
          <div className="w-[90%] mt-5 flex flex-col items-center justify-center gap-[15px]">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-[100%] h-[50px] border-[2px] border-[96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="UserName"
              required
            />
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
              onChange={handleChange}
              className="w-[100%] h-[50px] border-[2px] border-[96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password"
              required
            />
            {!show && (
              <IoEyeOutline
                className="w-[20px] h-[20px] cursor-pointer absolute right-[8%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {show && (
              <IoEye
                className="w-[20px] h-[20px] cursor-pointer absolute right-[8%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}

            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[]17px] font-semibold">
              Create Account
            </button>
            <p className="flex gap-[10px]">
              You have any account?{" "}
              <span
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
