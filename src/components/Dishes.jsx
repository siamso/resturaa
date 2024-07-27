import React from "react";
import { DISHES } from "../constants";
import DishCard from "./DishCard";

function Dishes() {
  return (
    <section className="container py-16 mx-auto" id="dishes">
      <h2 className="mb-8 text-3xl tracking-tighter text-center lg:text-5xl">
        Dishes
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {DISHES.map((product, index) => (
          <DishCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Dishes;
