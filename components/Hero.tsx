"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [image1Style, setImage1Style] = useState("");
  const [image2Style, setImage2Style] = useState("rotate-90:animate transition ease-in-out duration-500 absolute left-1/2 top-3/4 -z-10");

  function handleProfileClick() {
    const hideStyle = "rotate-90:animate transition ease-in-out duration-500 absolute left-1/2 top-3/4 -z-10";
    image1Style === hideStyle ? setImage1Style("") : setImage1Style(hideStyle);
    image2Style === hideStyle ? setImage2Style("") : setImage2Style(hideStyle);
  }

  return (
    <div
      className="hero min-h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url(kaela-bg.jpg)",
      }}
    >
      <div className="hero-overlay backdrop-blur-xl"></div>
      <div className="hero-content flex-col items-center justify-between lg:flex-row w-full">
        <div className="rounded-full border-2 border-white relative overflow-hidden" onClick={handleProfileClick}>
          <Image src={"/ilham-syafik.png"} width={300} height={300} alt="ilham syafik" className={"rounded-full " + image1Style} />
          <Image src={"/deidey.jpg"} width={300} height={300} alt="ilham syafik" className={`rounded-full bg-red-500 ` + image2Style} />
        </div>
        <div className="bg-black py-8 w-3/4 space-y-2">
          <h1 className="text-5xl font-bold">M. Ilham Syafik</h1>
          <h2 className="text-lg mb-4">Web Developer | Prompter | Kobolonimbus</h2>
          <p className="text-xl">
            Hello! I am a front-end developer who is passionate about building responsive and user-friendly web interfaces. With experience in React, TypeScript, and backend integrations such as Supabase or Laravel, I am constantly learning
            and evolving to create efficient and impactful digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
