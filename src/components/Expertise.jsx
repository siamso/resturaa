import React from "react";
import { CUSINES } from "../constants";

function Expertise() {
  return (
    <section id="expertise">
      <h2 className="my-8 text-3xl tracking-tighter text-center lg:text-4xl">
        Our Expertise
      </h2>
      <div className="container px-4 mx-auto">
        {CUSINES.map((cusine, index) => (
          <div
            key={index}
            className="flex items-center py-2 border-b-4 border-dotted border-neutral-700/40"
          >
            <div className="flex-shrink-0 pr-8 text-2xl">{cusine.number}</div>
            <div className="flex-shrink-0 w-1/3">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="h-auto rounded-3xl"
              />
            </div>
            <div className="pl-8">
              <h3 className="text-2xl tracking-tighter uppercase text-rose-300">
                {cusine.title}
              </h3>
              <p className="mt-4 text-lg tracking-tighter">
                {cusine.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
