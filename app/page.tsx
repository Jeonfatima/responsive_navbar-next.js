"use client"
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-300">
      {/* Navbar */}
      <div className="flex items-center justify-between bg-gray-800 text-white p-4">
        <div className="text-xl font-bold">My Website</div>
        <button
          className="lg:hidden block p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons"><TiThMenuOutline /></span> {/* Hamburger Icon */}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:justify-evenly lg:flex-row md:grid md:grid-cols-2 flex flex-col gap-4 p-5`}
      >
        {/* First box */}
        <div className="bg-pink-500 p-5 flex items-center justify-center text-center w-full font-bold text-3xl rounded-3xl md:col-span-2">
        "Dream big, work hard, achieve more."
        </div>
        {/* Second box */}
        <div className="bg-purple-500 p-5  w-full flex items-center text-center justify-center font-bold text-3xl rounded-3xl">
        "Success starts with self-belief."
        </div>
        {/* Third box */}
        <div className="bg-blue-400 p-5 w-full flex items-center text-center justify-center font-bold text-3xl rounded-3xl">
        "Every step forward is progress."
        </div>
      </div>
    </div>
  );
}
