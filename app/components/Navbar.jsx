"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="navbar py-6">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between ">
          <div className="logo">
            <h1 className="text-4xl font-bold">Spectrx.</h1>
          </div>
          <ul
            className={`menu flex items-center gap-12 md:static absolute ${
              active ? "top-18 opacity-100" : "top-12 opacity-0"
            } left-1/2 -translate-x-1/2 
          md:-translate-x-0 md:flex-row flex-col w-full md:w-auto md:bg-transparent backdrop-blur-xl 
          md:py-0 py-8 transition-all md:opacity-100 md:transition-none md:shadow-none shadow-[0_4px_6px_-4px_rgba(0,0,0,0.2)]`}
          >
            <li>
              <Link
                href={"#beranda"}
                className="text-black hover:text-[#2e82ff] transition-colors"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href={"#layanan"}
                className="text-black hover:text-[#2e82ff] transition-colors"
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                href={"#proyek"}
                className="text-black hover:text-[#2e82ff] transition-colors"
              >
                Proyek
              </Link>
            </li>
            <li>
              <Link
                href={"#kontak"}
                className="text-black hover:text-[#2e82ff] transition-colors"
              >
                Kontak
              </Link>
            </li>
          </ul>
          <div
            className="md:hidden block text-black hover:text-[#2e82ff] transition-colors"
            onClick={() => handleClick()}
          >
            <i className="ri-menu-3-line ri-xl font-bold"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
