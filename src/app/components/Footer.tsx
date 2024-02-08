import Link from "next/link";
import { Links } from "./constants/Links";
import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-gray-300 text-center text-sm sm:text-lg p-6 mx-auto">
        <div className="grid grid-cols-3 shrink-1 justify-items-center">
          <div className="col-span-1">
            <h1 className="text-1xl">
              Designed and Developed by Ken Yamagishi
            </h1>
          </div>
          <div className="col-span-1">
            <h1 className="text-1xl">Copyright © 2024</h1>
          </div>
          <div className="col-span-1 flex justify-center gap-4">
            <Link
              href={Links.GitHub}
              target="_blank"
              className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-40 duration-300"
            >
              <FaGithub className="size-6" />
            </Link>
            <Link
              href={Links.LinkedIn}
              target="_blank"
              className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-40 duration-300"
            >
              <FaLinkedin className="size-6" />
            </Link>
            <Link
              href={Links.Facebook}
              target="_blank"
              className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-40 duration-300"
            >
              <FaFacebookSquare className="size-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
