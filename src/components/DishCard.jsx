import React from "react";

function DishCard({ product }) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        className="p-2 rounded-3xl"
      />
      <div>
        <h1 className="mb-2 text-2xl font-bold tracking-tighter">
          {product.title}
        </h1>
        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
}

export default DishCard;
