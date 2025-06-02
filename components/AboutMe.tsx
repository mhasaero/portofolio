"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const aboutus = [
  {
    title: "Web Developer",
    description: `I'm a frontend-oriented web developer who enjoys bringing user interfaces to life with clean code and thoughtful design. I specialize in building responsive and interactive web applications using Next.js with TypeScript, and
            I've worked with both Firebase and Supabase as backend-as-a-service platforms to power real-time features and user authentication. My focus lies in creating seamless user experiences—whether it's crafting intuitive dashboards,
            building admin panels, or integrating third-party APIs. I love solving frontend problems and turning complex ideas into elegant, user-friendly interfaces. For me, frontend is not just about visuals—it's about how users feel when
            interacting with your product.`,
    card: "card1",
  },
  {
    title: "Full-Time Gamer",
    description: `Gaming is more than just a hobby—it's part of who I am. I dive deep into RPGs like Zenless Zone Zero (ZZZ) and Wuthering Waves (Wuwa), where I can get lost in the worldbuilding, characters, and immersive combat systems. These
            days, I spend most of my time on Valorant, sharpening my aim, communicating with teammates, and learning from every match. I enjoy both casual and competitive games, across a wide range of genres, because I believe every game
            has something unique to offer. Gaming helps me unwind, learn, and think strategically in ways that even carry over to how I approach coding.`,
    card: "card2",
  },
  {
    title: "Kobolonimbus",
    description: `I'm a passionate fan of Hololive, and my heart belongs to none other than Kobo Kanaeru. As a proud Kobolonimbus, I follow her chaotic streams, her music, and her journey as an Indonesian VTuber who's full of surprises, memes,
            and unfiltered fun. Kobo's energy and creativity inspire me—not just as a fan, but also in my own work. Her blend of humor, authenticity, and community spirit fuels my love for internet culture and reminds me why I love being
            part of fandoms that bring people together from all over the world.`,
    card: "card3",
  },
];

const webImgCard = [
  {
    src: "/nextjs.png",
    alt: "Next.js",
  },
  {
    src: "/typescript.png",
    alt: "TypeScript",
  },
  {
    src: "/react.png",
    alt: "React",
  },
  {
    src: "/supabase.png",
    alt: "Supabase",
  },
  {
    src: "/firebase.png",
    alt: "Firebase",
  },
  {
    src: "/laravel.png",
    alt: "Laravel",
  },
  {
    src: "/tailwind.png",
    alt: "Tailwind CSS",
  },
];

const gameImgCard = [
  {
    src: "/valorant.png",
    alt: "Valorant",
  },
  {
    src: "/zzz.png",
    alt: "Zenless Zone Zero",
  },
  {
    src: "/wuwa.png",
    alt: "Wuthering Waves",
  },
  {
    src: "/honkaiimpact3.png",
    alt: "Honkai Impact 3rd",
  },
];

const vtuberImgCard = [
  {
    src: "/kobo.png",
    alt: "Kobo Kanaeru",
  },
  {
    src: "/kaela.png",
    alt: "Kaela Kovalskia",
  },
  {
    src: "/zeta.png",
    alt: "Vestia Zeta",
  },
  {
    src: "/hololive.png",
    alt: "Hololive",
  },
];

export default function AboutMe() {
  const [hide, setHide] = useState<{ [key: string]: string }>({ card1: "", card2: "", card3: "" });
  const [flex, setBlock] = useState<{ [key: string]: string }>({ card1: "hidden", card2: "hidden", card3: "hidden" });
  const [hfit, setHfit] = useState<{ [key: string]: string }>({ card1: "", card2: "", card3: "" });

  const toggleHide = (keyCard: string) => {
    setHide((prev) => ({
      ...prev,
      [keyCard]: prev[keyCard] === "" ? "hidden" : "",
    }));
    setBlock((prev) => ({
      ...prev,
      [keyCard]: prev[keyCard] === "hidden" ? "flex" : "hidden",
    }));
    setHfit((prev) => ({
      ...prev,
      [keyCard]: prev[keyCard] === "" ? "h-fit" : "",
    }));
  };

  return (
    <section id="about-me" className="space-y-16 py-32  backdrop-blur-sm bg-background/80 px-8 md:px-12 lg:px-16 ">
      <h1 className="text-5xl text-center font-semibold ">About Me</h1>
      <div className="flex justify-evenly flex-wrap gap-6">
        {aboutus.map((item, index) => (
          <div key={index} className={`${hfit[item.card]} border-2 border-white px-6 py-4 w-88 overflow-hidden gap-4 flex flex-col rounded-md md:h-126`}>
            <h1 className="text-lg font-bold">{item.title}</h1>
            <p className={`${hide[item.card]} text-sm`}>{item.description}</p>
            <div className={`${flex[item.card]} flex-wrap gap-y-8 justify-between items-center `}>
              {item.title === "Web Developer" &&
                webImgCard.map((img, imgIndex) => (
                  <Link key={imgIndex} href="#" target="_blank" rel="noopener noreferrer" className="group hover:shadow-[0_0_10px_10px_rgba(143,36,38,0.25)] transition-all ease-in-out duration-500 rounded-md">
                    <Image src={img.src} width={500} height={500} alt={img.alt} className={"w-20 group-hover:scale-125 rounded-md duration-300 transition-all ease-in-out"} />
                    <span className="relative">Next JS</span>
                  </Link>
                ))}
              {item.title === "Full-Time Gamer" &&
                gameImgCard.map((img, imgIndex) => (
                  <Link key={imgIndex} href="#" target="_blank" rel="noopener noreferrer" className="group hover:shadow-[0_0_10px_10px_rgba(143,36,38,0.25)] transition-all ease-in-out duration-500 rounded-md">
                    <Image src={img.src} width={500} height={500} alt={img.alt} className={"w-20 group-hover:scale-125 rounded-md duration-300 transition-all ease-in-out"} />
                  </Link>
                ))}
              {item.title === "Kobolonimbus" &&
                vtuberImgCard.map((img, imgIndex) => (
                  <Link key={imgIndex} href="#" target="_blank" rel="noopener noreferrer" className="group hover:shadow-[0_0_10px_10px_rgba(143,36,38,0.25)] transition-all ease-in-out duration-500 rounded-md">
                    <Image src={img.src} width={500} height={500} alt={img.alt} className={"w-20 group-hover:scale-125 rounded-md duration-300 transition-all ease-in-out"} />
                  </Link>
                ))}
            </div>
            <div className="flex justify-end items-center mt-auto gap-4">
              {/* <p className={`text-xs`}>Click to {hide[item.card] === "" ? "Show" : "Hide"} Images</p> */}
              <button className="" onClick={() => toggleHide(item.card)}>
                Click to {hide[item.card] === "" ? "Show" : "Hide"} Images
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
