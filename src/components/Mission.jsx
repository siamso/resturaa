import React from "react";
import { MISSION } from "../constants";
import mission from "../assets/mission.mp4";
import missionImg from "../assets/mission.jpeg";
import { motion } from "framer-motion";

function Mission() {
  return (
    <section className="container mx-auto text-center" id="mission">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-8 text-3xl tracking-tighter lg:text-4xl">
          Our Mission
        </h1>
        <div className="relative flex items-center justify-center">
          <video
            className="w-full rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
            poster={missionImg}
          >
            <source src={mission} type="video/mp4" />
          </video>
          <div className="absolute w-full h-full bg-black/40 rounded-3xl"></div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute max-w-lg tracking-tighter lg:text-3xl"
          >
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
