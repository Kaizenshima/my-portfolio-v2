import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface ProjectCardsProps {
  imgURL: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}
const ProjectCards: React.FC<ProjectCardsProps> = ({
  imgURL,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
      >
        <div
          className="overlay items-center justify-center absolute top-0 left-0 w-full h-full
         bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 
         transition-all duration-500"
        >
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BB] hover:border-white group/link"
          >
            <CodeBracketIcon
              className="h-10 w-10 text-[#ADB7BB] absolute top-1/2 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white
                cursor-pointer
                hover:white
                "
            />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BB] hover:border-white group/link"
          >
            <EyeIcon
              className="h-10 w-10 text-[#ADB7BB] absolute top-1/2 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white
                cursor-pointer
                hover:white mr-1
                "
            />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-100">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCards;