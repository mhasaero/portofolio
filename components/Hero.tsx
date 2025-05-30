"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="hero"
      className="lg:min-h-screen bg-fixed bg-center bg-cover "
      style={{
        backgroundImage: "url(kaela-bg.jpg)",
      }}
    >
      <div className="pt-20 md:pt-24 lg:pt-none lg:min-h-screen backdrop-blur-md px-8 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center md:gap-8">
        <div className="rounded-full border-2 border-white relative overflow-hidden">
          <Image src={"/ilham-syafik.png"} width={500} height={500} alt="ilham syafik" className={"rounded-full w-64"} />
        </div>
        <div className=" py-8 w-3/4 space-y-2">
          <h1 className="text-2xl md:text-5xl font-bold">M. Ilham Syafik</h1>
          <h2 className="text-base md:text-lg mb-4">Web Developer | Prompter | Kobolonimbus</h2>
          <p className="md:block hidden text-xl mb-4">
            Hello! I am a front-end developer who is passionate about building responsive and user-friendly web interfaces. With experience in React, TypeScript, and backend integrations such as Supabase or Laravel, I am constantly learning
            and evolving to create efficient and impactful digital solutions.
          </p>
          <div className="flex items-center justify-between">
            <button className="btn ">Check UNSRI</button>
            <div className="flex items-center gap-4">
              <FaInstagram className="text-2xl text-white" />
              <FaWhatsapp className="text-2xl text-white" />
              <FaLinkedin className="text-2xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
