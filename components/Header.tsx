"use client";
import Link from "next/link";
import NavgationMenu from "./new/NavgationMenu";

export default function Header() {
  const onMoveTo = (id: string) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50 border-b border-gray-800 px-[3rem]">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        <div className="text-3xl font-bold  bg-gradient-to-r from-[#00ff99] to-[#00ccff] bg-clip-text text-transparent ">
          Eric
        </div>
        <ul className="hidden md:flex space-x-8 [&>li]:cursor-pointer">
          {/* <a
            href="#hero"
            className="text-white hover:text-gray-300"
          >
            Process
          </a> */}
          <li
            onClick={() => onMoveTo("hero")}
            className="text-white hover:text-gray-300"
          >
            About
          </li>{" "}
          <li
            onClick={() => onMoveTo("projects")}
            className="text-white hover:text-gray-300"
          >
            Projects
          </li>
          <li
            onClick={() => onMoveTo("services")}
            className="text-white hover:text-gray-300"
          >
            Services
          </li>
          <li
            onClick={() => onMoveTo("faqs")}
            className="text-white hover:text-gray-300"
          >
            FAQs
          </li>
          <li
            onClick={() => onMoveTo("contact")}
            className="text-white hover:text-gray-300"
          >
            Let&apos;s Talk
          </li>
        </ul>
        {/* <Toggle /> */}
        {/* <button className="md:hidden text-white hover:text-gray-300 hover:cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}

        <NavgationMenu />
      </nav>
      {/* <Overlay /> */}
    </header>
  );
}

const Overlay = () => {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black opacity-100 h-full w-full ">
      <div className="relative w-full h-full">
        <button className="md:hidden w-16 h-16  text-white absolute right-[1rem]  hover:text-gray-300 hover:cursor-pointer">
          <svg
            className="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
