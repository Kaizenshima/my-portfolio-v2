import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillBadge from "./SkillBadge";
import { SkillList } from "./constants/SkillList";

const AboutSection = () => {
  return (
    <section id="about" className="text-white">
      <div
        className="md:grid md:grid-cols-2 gap-8 items-center 
        py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image
          src="/images/aboutsec.png"
          alt="About Section"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a 4th Year BSIT Student at{" "}
            <b>Nueva Ecija University of Science and Technology</b> Major in
            Database. I have experience working on Python, React, PostgreSQL,
            MySQL, Node.js, HTML, CSS, JavaScript, and Visualization Tools.
            I&apos;m a quick learner and always looking to expand my knowledge
            and skill set.
          </p>
          <div>
            <Tabs
              defaultValue="account"
              className="z-0 mt-4  sm:w-[200px] lg:w-[700px]"
            >
              <TabsList>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              </TabsList>
              <TabsContent value="education">
                <div className="text-left p-1">
                  <h1 className="text-md font-bold">
                    Bachelor of Science in Infomation Technology, Major in
                    Database
                  </h1>
                  <h1 className="text-md">2020 - 2024</h1>
                  <h1 className="text-md">
                    Nueva Ecija University of Science and Technology
                  </h1>
                  <h1 className="text-md">
                    Sumacab Este, Cabanatuan City, Philippines
                  </h1>
                </div>
              </TabsContent>
              <TabsContent value="certifications">
                <ul className="list-disc pl-4">
                  <li>Google Analytics</li>
                  <li>Certiport - Database </li>
                </ul>
              </TabsContent>
              <TabsContent value="skills">
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  {SkillList.map((badge) => (
                    <SkillBadge 
                      key={badge.id}
                      skill={badge.skill}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
