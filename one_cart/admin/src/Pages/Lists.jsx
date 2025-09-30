import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { ImCross } from "react-icons/im";

const Lists = () => {
  const [list, setList] = useState([]);
  const { serveUrl } = useContext(authDataContext);

  const fetchList = async () => {
    try {
      const result = await axios.get(`${serveUrl}/api/product/list`);
      console.log(result.data);
      setList(result.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const removeList = async (id) => {
    try {
      const result = await axios.post(`${serveUrl}/api/product/remove/${id}`,
        {},
        {withCredentials:true}
      )

       setList((prevList) => prevList.filter((item) => item._id !== id));
      
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2020] text-white overflow-x-hidden relative">
      <Nav />
      <Sidebar />
      <div className="w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px]">
        <div className="w-[82%] flex items-center justify-start overflow-x-hidden absolute right-0">
          <div className="w-[100%] md:w-[90%] h-[100%] mt-[0px] flex flex-col gap-[30px]  px-[30px] md:px-[60px]">
            <div className="w-[440px]  text-[25px] md:text-[40px] text-white">
              All Listed Products
            </div>

            {list && list.length > 0 ? (
              list.map((item, index) => {
                return (
                  <div
                    className="w-[90%] md:h-[120px] h-[90px] bg-slate-600 rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px]"
                    key={index}
                  >
                    <img
                      src={item.image1}
                      alt=""
                      className="w-[30%] md:w-[120px] h-[90%] rounded-lg"
                    />
                    <div className="w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px]">
                      <div className="w-[100%] md:text-[20px] text-[15px] text-[#bef3da]">
                        {item.name}
                      </div>
                      <div className="md:text-[17px] text-[15px] text-[#bef3da]">
                        {item.category}
                      </div>
                      <div className="md:text-[17px] text-[15px] text-[#bef3da]">
                        ₹{item.price}
                      </div>
                    </div>
                    <div className="w-[10%] h-[100%] bg-transparent flex items-center justify-center">
                      <ImCross className="text-white text-3xl md:hover:bg-red-300 md:hover:text-black cursor-pointer p-1 rounded-md" onClick={() => removeList(item._id)}/>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-white text-lg">No Product Available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
