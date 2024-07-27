import React from "react";
import { MISSION } from "../constants";
import mission from "../assets/mission.mp4";
import missionImg from "../assets/mission.jpeg";

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
          <p className="absolute max-w-lg tracking-tighter lg:text-3xl">
            {MISSION}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
