"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href={"#beranda"}
      className={`fixed bottom-10 right-10 bg-[#2e82ff] text-white w-12 h-12 rounded-full 
      text-center hover:bg-[#256af9] cursor-pointer transition-all ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <i className="ri-arrow-up-line ri-2x"></i>
    </Link>
  );
};

export default ScrollToTop;
