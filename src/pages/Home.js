import { useState } from "react";

import { useNavigate } from "react-router-dom";

import symlinkImg from '../assets/images/symlink_img.png';

const HomePage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleGetStartedButtonClick = () => {
    navigate("/chat");
  };

  return (
    <div className="h-screen flex flex-col bg-[#091219] text-white overflow-hidden">
      <header className="p-4">
        <nav className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Product
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-between px-4 h-full">
        <h1 className="text-[60px] font-base text-center leading-none mt-[60px]">
          <div>Protect Private Data</div> <div>From LLM's</div>
        </h1>
        <p className="text-lg text-[#F0F7F4] text-center">
          AI Middleware that Masks Sensitive Data Before LLMs, Ensuring Privacy
          and GDPR Compliance.
        </p>

        <div className="w-full flex flex-col items-center gap-6">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-2/5 p-3 bg-[#2B2C28] border border-[#091219] rounded-md focus:outline-none focus:border-[#FFFFFF]"
          />
          <button
            className="w-2/9 bg-[#4452FE] text-white font-base py-3 px-8 rounded-lg"
            onClick={handleGetStartedButtonClick}
          >
            Get Started
          </button>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={symlinkImg}
            alt="Dashboard Preview"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
