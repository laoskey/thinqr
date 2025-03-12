import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50 border-b border-gray-800 ">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-3xl font-bold  bg-gradient-to-r from-[#00ff99] to-[#00ccff] bg-clip-text text-transparent ">
          Eric
        </div>
        <div className="hidden md:flex space-x-8">
          {/* <a
            href="#hero"
            className="text-white hover:text-gray-300"
          >
            Process
          </a> */}
          <Link
            href="#services"
            className="text-white hover:text-gray-300"
          >
            Benefits
          </Link>
          <Link
            href="#services"
            className="text-white hover:text-gray-300"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="text-white hover:text-gray-300"
          >
            Projects
          </Link>
          <Link
            href="#faqs"
            className="text-white hover:text-gray-300"
          >
            FAQs
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-gray-300"
          >
            Let&apos;s Talk
          </Link>
        </div>
        {/* <Toggle /> */}
        <button className="md:hidden text-white">
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
        </button>
      </nav>
    </header>
  );
}
