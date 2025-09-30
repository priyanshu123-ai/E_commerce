import React, { useState, useContext } from "react";
import Title from "../component/Title";
import about1 from "../assets/logo/abot2.png";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const About = () => {
  const { user } = useContext(UserContext); // get logged-in user
  const [email, setEmail] = useState(user?.email || ""); // autofill if user exists
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/mail",
        { email },
        { withCredentials: true }
      );

      if (res.data.success) {
        setMessage("🎉 Subscription successful! Check your email for a discount code.");
        setEmail("");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center 
                    bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] 
                    pt-[90px] pb-[120px] md:pb-[30px] overflow-x-hidden relative">

      {/* Decorative Background Blur Circles */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-teal-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Title */}
      <Title text1={"ABOUT"} text2={"US"} />

      {/* Content Section */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-16 mt-10 relative z-10">
        {/* Image Section with 3D Effect */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="relative group">
            <img
              src={about1}
              alt="About"
              className="w-[100%] lg:w-[90%] rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
            />
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-500/40 to-purple-500/30 blur-2xl opacity-60 group-hover:opacity-80 transition"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full text-white flex flex-col gap-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Welcome to <span className="text-teal-400 font-semibold">OneCart</span>! 
            We are passionate about providing premium quality clothing for babies. 
            Our collection is designed to be <span className="font-semibold">stylish, breathable, and super comfortable</span>, 
            ensuring that your little ones feel cozy while looking great.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Every piece is crafted with care from the finest cotton fabrics, 
            making them durable yet soft on delicate skin. 
            Our mission is simple: to combine <span className="font-semibold">comfort, style, and care</span> in every outfit we create.
          </p>
          <button className="mt-4 px-8 py-3 bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-400 hover:to-purple-400 transition rounded-xl w-fit font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className="w-full max-w-7xl px-6 lg:px-16 mt-20 relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-10">
          WHY CHOOSE US
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Quality Assurance</h3>
            <p className="text-gray-200 leading-relaxed">
              We guarantee quality through strict checks, reliable sourcing, 
              and a commitment to customer satisfaction always.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Convenience</h3>
            <p className="text-gray-200 leading-relaxed">
              Shop easily with fast delivery, simple navigation, secure checkout, 
              and everything you need in one place.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Exceptional Customer Service</h3>
            <p className="text-gray-200 leading-relaxed">
              Our dedicated support team ensures quick responses, helpful solutions, 
              and a smooth shopping experience every time.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full max-w-5xl mt-20 px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/10 flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
            Join Our Newsletter & Get 20% Off!
          </h2>
          <p className="text-gray-200 max-w-2xl">
            Subscribe to receive exclusive offers, early access to sales, and special updates from our store.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-2xl"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-[65%] h-[48px] px-4 rounded-lg shadow-md text-gray-800 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-400 hover:to-purple-400 text-white px-6 py-3 rounded-lg shadow-lg font-semibold disabled:opacity-50 transform hover:scale-105 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Subscribe"}
            </button>
          </form>

          {message && (
            <p className="text-teal-300 mt-3">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
