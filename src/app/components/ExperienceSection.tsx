import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExperienceSection = () => {
  return (
    <section>
      <div className="mb-16 mt-8">
        <div>
          <h2 className="text-white text-center font-bold text-4xl ">
            Experience
          </h2>
        </div>
        <div className="text-white justify-center">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Full Stack Intern @TechStacksPH 2024
              </AccordionTrigger>
              <AccordionContent>
                Developing and maintaining web applications using React,
                Node.js, and PostegreSQL.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Data Entry/Clerk @ELJ Memorial Hospital 2023
              </AccordionTrigger>
              <AccordionContent>
                Entering and updating patient information in the hospital
                database.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
