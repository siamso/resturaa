import React from "react";
import { CONTACT } from "../constants";

function Contact() {
  return (
    <section className="container py-16 mx-auto" id="contact">
      <h2 className="mb-8 text-3xl text-center lg:text-4xl">Contact Us</h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="pb-12 my-20 text-2xl tracking-tighter text-center border-b-2 border-dotted border-neutral-700 lg:text-3xl"
          >
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Contact;
