import React, { useState } from "react";
import { LINKS } from "../constants";
import { FaBars, FaX } from "react-icons/fa6";

function Navbar() {
  const [menuToggleBtn, setMenuToggleBtn] = useState(false);

  const handleToggle = () => {
    setMenuToggleBtn(!menuToggleBtn);
  };

  const handleScroll = (event, targetedId) => {
    event.preventDefault();
    const targetedSection = document.getElementById(targetedId);
    if (targetedSection) {
      const offsetTop = targetedSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <header className="fixed z-50 flex flex-col items-center justify-center w-full top-4">
      <nav className="flex items-center justify-between w-full overflow-y-hidden backdrop-blur-lg lg:shadow-lg lg:rounded-full p-4 lg:m-2 lg:w-[50rem]">
        <h1 className="mx-2 text-xl font-bold line-through select-none decoration-black drop-shadow-lg lg:text-3xl">
          Resturaa
        </h1>
        <ul className="hidden space-x-2 lg:flex md:text-sm">
          {LINKS.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.targetId}`}
                onClick={(e) => handleScroll(e, item.targetId)}
                className={`text-sm ${
                  item !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="relative lg:hidden">
          <button
            onClick={handleToggle}
            className="absolute right-0 z-50 flex -top-2 lg:hidden"
          >
            {menuToggleBtn ? <FaX /> : <FaBars />}
          </button>
        </div>
      </nav>
      {menuToggleBtn && (
        <ul className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((item, index) => (
            <li key={index} className="block p-4 tracking-tighter uppercase">
              <a
                href={`#${item.targetId}`}
                onClick={(e) => handleScroll(e, item.targetId)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
