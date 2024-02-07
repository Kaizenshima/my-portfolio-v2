"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Links } from "./constants/Links";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl lg:text-6xl mb-4 font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
              Hi, I&apos;m{" "}
            </span>
            Ken Yamagishi
          </h1>
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl mb-6">
            I&apos;m a{" "}
            <TypeAnimation
              cursor={true}
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full Stack Developer",
                5000, // wait 1s before replacing "Mice" with "Hamsters"
                "Data Engineer",
                5000,
                "Data Analyst",
                5000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </p>
          <div className="flex justify-center sm:justify-start gap-5 mt-4 mb-4">
            <Link
              className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-40 duration-300"
              href={Links.GitHub}
              target="_blank"
            >
              <IconContext.Provider value={{ color: "violet", size: "50px" }}>
                <div>
                  <FaGithub className="size-16" />
                </div>
              </IconContext.Provider>
            </Link>
            <Link
              className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-40 duration-300"
              href={Links.LinkedIn}
              target="_blank"
            >
              <IconContext.Provider value={{ color: "blue", size: "50px" }}>
                <div>
                  <FaLinkedin className="size-16" />
                </div>
              </IconContext.Provider>
            </Link>
            <Link
              className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-40 duration-300"
              href={Links.Facebook}
              target="_blank"
            >
              <IconContext.Provider value={{ color: "white", size: "50px" }}>
                <div>
                  <FaFacebookSquare className="size-16" />
                </div>
              </IconContext.Provider>
            </Link>
          </div>
          <div>
            <Link href={Links.LinkedIn} target="_blank">
              <button className="px-6 py-3 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-violet-400 hover:bg-slate-400 text-white">
                Hire Me
              </button>
            </Link>
            <Link href={Links.CV} target="_blank">
              <button className="px-1 py-1 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-violet-400 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-600 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gray-900 w-[270px] h-[270px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"/images/herosection.png"}
              alt="Hero Section"
              className="absolute tranform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
