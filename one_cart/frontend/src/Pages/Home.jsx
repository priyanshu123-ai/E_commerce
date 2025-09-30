import React, { useEffect, useState } from "react";
import Hero from "../component/Hero";
import Background from "../component/Background";
import Nav from "../component/Nav";
import Product from "./Product";
import OurPolicy from "../component/OurPolicy";
import NewsLetter from "../component/NewsLetter";
import Footer from "../component/Footer";

const Home = () => {
  const [heroCount,setHeroCount] = useState(0); 

useEffect(() => {
  const interval = setInterval(() => {
    setHeroCount((prevCount) => (prevCount + 1) % heroData.length);
  }, 3000);

  return () => clearInterval(interval);
}, []); // ✅ Keep this empty so it runs only once
 // <- change here



  const heroData = [
    { text1: "30% OFF Limited Offer", text2: "Style that" },
    { text1: "Discover the Best of Bold Fashion", text2: "Limited Time Only!" },
    { text1: "Explore Our Best Collection", text2: "Shop Now!" },
    { text1: "Choose your Perfect Fashion Fit", text2: "Now " },
  ];

  return (
    <>
    <Nav />
  <div className="overflow-x-hidden relative top-[90px]">
      <div className="w-screen h-[60vh] md:h-[90vh] lg:min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025]">
       <Background heroCount={heroCount}/>
      <Hero heroCount = {heroCount}
      setHeroCount = {setHeroCount}
      heroData = {heroData}
      />
     
    </div>
    <Product />
    <OurPolicy />
    <NewsLetter />
    <Footer />
  </div>
  </>
  );
};

export default Home;
