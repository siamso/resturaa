import React from "react";
import hero from "../assets/hero.mp4";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-20">
        <video
          className="object-cover w-full h-full"
          src={hero}
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="inset-0 absolute -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 flex flex-col justify-end h-screen pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-bold line-through select-none decoration-stone-900 md:decoration-[5px] lg:decoration-[7px] decoration-[4px] md:text-8xl drop-shadow-lg lg:text-9xl"
        >
          Resturaa
        </motion.h1>
        <p className="p-2 text-sm tracking-tighter text-white md:text-sm lg:text-lg">
          London
        </p>
      </div>
    </section>
  );
}

export default Hero;
