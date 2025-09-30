import React from 'react'
import Title from '../component/Title'
import contact from "../assets/logo/contact.png"
import NewsLetter from '../component/NewsLetter'

const Contact = () => {
  return (
    <div className="w-full pb-[200px] flex flex-col items-center justify-center bg-gradient-to-l from-[#141414] to-[#0c2025] gap-12 pt-[90px] px-4">
      
   
      <Title text1="CONTACT" text2="US" />

      
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
        
       
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <img 
            src={contact} 
            alt="Contact Illustration" 
            className="lg:w-[70%] w-[90%] max-w-[400px] shadow-md shadow-black rounded-sm"
          />
        </div>

        
        <div className="w-full flex flex-col items-start justify-center gap-5 mt-5 lg:mt-0 px-2">
          
          <h2 className="text-white font-bold lg:text-lg text-base">Our Store</h2>
          <div className="text-white md:text-base text-sm space-y-1">
            <p>12345 Random Station</p>
            <p>Random City, State, India</p>
          </div>

          <div className="text-white md:text-base text-sm space-y-1">
            <p>
              <a href="tel:+919876543210" className="hover:text-blue-400 transition">+91-9876543210</a>
            </p>
            <p>
              <a href="mailto:admin@onecart.com" className="hover:text-blue-400 transition">admin@onecart.com</a>
            </p>
          </div>

          <h3 className="text-white lg:text-lg text-base mt-3 font-bold">Careers at One Cart</h3>
          <button className="px-6 py-3 text-white border rounded-md hover:bg-slate-600 transition">
            Explore Jobs
          </button>
        </div>
      </div>

     
     <div className='pt-9'>
       <NewsLetter />
     </div>
    </div>
  )
}

export default Contact
