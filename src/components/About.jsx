import React from "react";
import { ABOUT } from "../constants";
import about from "../assets/about.jpeg";

function About() {
  return (
    <section className="container mx-auto mb-8" id="about">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-8 text-3xl tracking-tighter lg:text-5xl">About Us</h1>
        <div className="flex flex-wrap">
          <div className="w-full p-4 lg:w-1/2">
            <img src={about} className="rounded-3xl lg:-rotate-3" />
          </div>
          <div className="w-full px-2 lg:w-1/2">
            <h1 className="text-4xl tracking-tighter lg:text-6xl">
              {ABOUT.header}
            </h1>
            <div className="h-2 mt-1 mb-8 w-36 bg-rose-200 lg:-rotate-3"></div>
            <p className="m-8 text-2xl leading-relaxed tracking-tighter">
              {ABOUT.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
