import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const NewsLetter = () => {
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
        setMessage("Subscription successful! Check your email for a discount code.");
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
    <div className="w-full h-[50vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-[28px] md:text-[32px] text-[#a5faf7] font-bold">
        Join Our E-Commerce Newsletter & Get 20% Off!
      </h2>
      <p className="text-[14px] md:text-[18px] text-blue-100 max-w-[600px]">
        Subscribe to receive exclusive offers, early access to sales, and special updates from our store.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col md:flex-row gap-4 mt-4 items-center justify-center w-full max-w-[700px]"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-[60%] h-[45px] px-4 rounded-lg shadow-md placeholder:text-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#2e3030c9] hover:bg-slate-500 text-white px-6 py-3 rounded-lg shadow-md font-semibold disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {message && <p className="text-green-300 mt-3">{message}</p>}
    </div>
  );
};

export default NewsLetter;
