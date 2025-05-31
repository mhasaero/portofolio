"use client";

import React, { useState } from "react";

type hideProps = {
  hide1: string;
  hide2: string;
  hide3: string;
};

const aboutus = [
  {
    title: "Web Developer",
    description: `I'm a frontend-oriented web developer who enjoys bringing user interfaces to life with clean code and thoughtful design. I specialize in building responsive and interactive web applications using Next.js with TypeScript, and
            I've worked with both Firebase and Supabase as backend-as-a-service platforms to power real-time features and user authentication. My focus lies in creating seamless user experiences—whether it's crafting intuitive dashboards,
            building admin panels, or integrating third-party APIs. I love solving frontend problems and turning complex ideas into elegant, user-friendly interfaces. For me, frontend is not just about visuals—it's about how users feel when
            interacting with your product.`,
    hide: "hide1",
    hfit: "hfit1",
  },
  {
    title: "Full-Time Gamer",
    description: `Gaming is more than just a hobby—it's part of who I am. I dive deep into RPGs like Zenless Zone Zero (ZZZ) and Wuthering Waves (Wuwa), where I can get lost in the worldbuilding, characters, and immersive combat systems. These
            days, I spend most of my time on Valorant, sharpening my aim, communicating with teammates, and learning from every match. I enjoy both casual and competitive games, across a wide range of genres, because I believe every game
            has something unique to offer. Gaming helps me unwind, learn, and think strategically in ways that even carry over to how I approach coding.`,
    hide: "hide2",
    hfit: "hfit2",
  },
  {
    title: "Kobolonimbus",
    description: `I'm a passionate fan of Hololive, and my heart belongs to none other than Kobo Kanaeru. As a proud Kobolonimbus, I follow her chaotic streams, her music, and her journey as an Indonesian VTuber who's full of surprises, memes,
            and unfiltered fun. Kobo's energy and creativity inspire me—not just as a fan, but also in my own work. Her blend of humor, authenticity, and community spirit fuels my love for internet culture and reminds me why I love being
            part of fandoms that bring people together from all over the world.`,
    hide: "hide3",
    hfit: "hfit3",
  },
];

function EmptyCard() {
  return (
    <div className="border-2 border-white px-6 py-4 w-80 gap-4 flex flex-col">
      <h1 className="text-lg font-bold">Empty</h1>
      <button></button>
      <p className="text-sm">No content available.</p>
    </div>
  );
}

export default function AboutUs() {
  const [hide, setHide] = useState<{ [key: string]: string }>({ hide1: "", hide2: "", hide3: "" });
  const [hfit, setHfit] = useState<{ [key: string]: string }>({ hfit1: "", hfit2: "", hfit3: "" });
  const [empty, setEmpty] = useState(0);

  const toggleHide = (keyHide: string, keyHfit: string) => {
    // hide[key] === "" ? setEmpty(empty + 1) : setEmpty(empty - 1);
    setHide((prev) => ({
      ...prev,
      [keyHide]: prev[keyHide] === "" ? "hidden" : "",
    }));
    setHfit((prev) => ({
      ...prev,
      [keyHfit]: prev[keyHfit] === "" ? "h-fit" : "",
    }));
  };

  return (
    <section id="about-us" className="space-y-16 pt-16">
      <h1 className="text-5xl text-center font-semibold">About Me</h1>
      <div className="flex justify-evenly flex-wrap gap-6">
        {aboutus.map((item, index) => (
          <div key={index} className={`${hfit[item.hfit]} border-2 border-white px-6 py-4 w-80 gap-4 flex flex-col rounded-md`}>
            <h1 className="text-lg font-bold">{item.title}</h1>
            <p className={`${hide[item.hide]} text-sm`}>{item.description}</p>
            <div className="flex justify-end mt-auto">
              <button className="btn btn-sm" onClick={() => toggleHide(item.hide, item.hfit)}>
                {hide[item.hide] === "" ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        ))}
        {/* {empty > 0 ? Array.from({ length: empty }).map((_, index) => <EmptyCard key={index} />) : ""} */}
      </div>
    </section>
  );
}
