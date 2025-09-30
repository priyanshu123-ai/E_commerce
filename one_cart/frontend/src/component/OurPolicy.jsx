import React from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

const OurPolicy = () => {
  return (
    <div className='w-[100vw] min-h-[70vh] flex flex-col items-center justify-start bg-gradient-to-l from-[#141414] to-[#0c2025] py-16 gap-12'>
      
      {/* Title Section */}
      <div className='text-center'>
        <Title text1={"OUR"} text2={"POLICY"} />
        <p className='w-full m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100'>
          Customer-Friendly Policies - Committed to Your Satisfaction and Safety.
        </p>
      </div>

      {/* Policy Cards */}
      <div className='w-full flex flex-wrap items-center justify-center gap-8 px-4 md:px-0'>
        
        {/* Card 1 */}
        <div className='w-[300px] md:w-[350px] lg:w-[400px] bg-[#1a2a35] border border-[#90b9ff4d] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-3 
                        hover:scale-105 hover:shadow-xl hover:border-[#90b9ff] transition-all duration-300 ease-in-out'>
          <RiExchangeFundsLine className='md:w-[60px] w-[40px] h-[40px] md:h-[60px] text-[#90b9ff]'/>
          <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]'>Easy Exchange Policy</p>
          <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue]'>
            Exchange Made Easy - Quick, Simple, and Customer-Friendly Process.
          </p>
        </div>

        {/* Card 2 */}
        <div className='w-[300px] md:w-[350px] lg:w-[400px] bg-[#1a2a35] border border-[#90b9ff4d] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-3 
                        hover:scale-105 hover:shadow-xl hover:border-[#90b9ff] transition-all duration-300 ease-in-out'>
          <TbRosetteDiscountCheckFilled className='md:w-[60px] w-[40px] h-[40px] md:h-[60px] text-[#90b9ff]'/>
          <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]'>7 Days Return Policy</p>
          <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue]'>
            Shop with Confidence - 7 Days Easy Return Guarantee.
          </p>
        </div>

        {/* Card 3 */}
        <div className='w-[300px] md:w-[350px] lg:w-[400px] bg-[#1a2a35] border border-[#90b9ff4d] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-3 
                        hover:scale-105 hover:shadow-xl hover:border-[#90b9ff] transition-all duration-300 ease-in-out'>
          <RiCustomerService2Fill className='md:w-[60px] w-[40px] h-[40px] md:h-[60px] text-[#90b9ff]'/>
          <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]'>Best Customer Support</p>
          <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue]'>
            Trusted Customer Support - Your Satisfaction Is Our Priority.
          </p>
        </div>

      </div>
    </div>
  )
}

export default OurPolicy
