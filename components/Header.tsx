export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50 border-b border-gray-800 ">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white ">Logo</div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#hero"
            className="text-white hover:text-gray-300"
          >
            Process
          </a>
          <a
            href="#services"
            className="text-white hover:text-gray-300"
          >
            Benefits
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300"
          >
            Pricing
          </a>
          <a
            href="#faqs"
            className="text-white hover:text-gray-300"
          >
            FAQs
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300"
          >
            Let&apos;s Talk
          </a>
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
