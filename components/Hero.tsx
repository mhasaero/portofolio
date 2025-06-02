"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="hero" className="lg:min-h-screen bg-fixed bg-center bg-cover ">
      <div className=" lg:min-h-screen backdrop-blur-sm px-8 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center md:gap-8 pt-24 lg:pt-0 ">
        <div className="rounded-full relative overflow-hidden lg:w-1/2 backdrop-blur-sm shadow-[0px_0px_100px_100px_rgba(255,255,255,0.35)]">
          <Image src={"/ilham-syafik.png"} width={500} height={500} alt="ilham syafik" className={"rounded-full w-full "} />
        </div>
        <div className="py-8 w-full lg:w-3/4 lg:space-y-2 text-center lg:text-start">
          <h1 className="text-2xl md:text-7xl font-bold text-shadow-md">M. Ilham Syafik</h1>
          <h2 className="text-xs md:text-lg mb-4">Web Developer | Full Time Gamer | HoloHero Fans</h2>
          <p className="md:block hidden text-xl mb-4">
            Hello! I am a front-end developer who is passionate about building responsive and user-friendly web interfaces. With experience in React, TypeScript, and backend integrations such as Supabase or Laravel, I am constantly learning
            and evolving to create efficient and impactful digital solutions.
          </p>
          <div className="flex items-center justify-between">
            <button className="px-4 py-2 border-2 border-white rounded-md shadow-[5px_5px_5px_rgba(255,255,255,0.25)] hover:shadow-none transition-all duration-500 ease-in-out bg-linear-to-r from-cyan-500 to-blue-500/10">
              Check UNSRI
            </button>
            <div className="flex items-center gap-4">
              <FaInstagram className="text-2xl  text-white hover:text-primary transition-all duration-300 ease-in-out" />
              <FaWhatsapp className="text-2xl text-white hover:text-primary transition-all duration-300 ease-in-out" />
              <FaLinkedin className="text-2xl text-white hover:text-primary transition-all duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
