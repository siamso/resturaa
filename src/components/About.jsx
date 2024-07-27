import React from "react";
import { ABOUT } from "../constants";
import about from "../assets/about.jpeg";
import { motion } from "framer-motion";

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
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl tracking-tighter lg:text-6xl"
            >
              {ABOUT.header}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-2 mt-1 mb-8 w-36 bg-rose-200 lg:-rotate-3"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="m-8 text-2xl leading-relaxed tracking-tighter"
            >
              {ABOUT.content}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
