import React from "react";
import ProjectCards from "./ProjectCards";
import { ProjectList } from "./constants/ProjectList";

const ProjectSection = () => {
  return (
    <>
      <h2 id='projects' className="text-white text-center text-4xl font-bold mt-4 mb-4 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {ProjectList.map((project) => (
          <ProjectCards
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.imgUrl}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
