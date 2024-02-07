import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const ContactSection = () => {
  return (
    <section>
      <div
        id="contact"
        className="grid grid-cols-1 sm:grid-cols-12 mt-8 p-10 py-16"
      >
        <div className="col-span-6 place-self-center text-left lg:text-center">
          <h2 className="text-white font-extrabold text-xl sm:text-2xl">
            Get In Touch
          </h2>
          <p className="text-slate-200 text-lg sm:text-xl">
            Let&apos;s work together
          </p>
        </div>
        <div className="col-span-6 mt-6">
          <div className="flex flex-wrap items-center mb-8">
            <PhoneIcon className="h-6 w-6 text-white mr-4" />
            <p className="text-white text-lg">+63 997 533 0551</p>
          </div>
          <div className="flex flex-wrap items-center">
            <EnvelopeIcon className="shrink-0 h-6 w-6 text-white mr-4 " />
            <p className="text-white text-lg">kendyamagishi@gmail.com </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
