import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="relative z-10 max-w-7xl mx-auto px-8 py-6 flex justify-between items-center text-white font-semibold">
        <div className="flex items-center space-x-2">
          <img
            src="/images/header-logo.png"
            alt="Header Logo"
            width={200}
          />
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-[#1a1a1a] md:bg-transparent p-6 md:p-0 text-sm tracking-wide`}
        >
          {/* Dropdown item example */}
          <li className="relative nav-item cursor-pointer group">
            Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-3 w-3 ml-1 stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="dropdown absolute top-full left-0 hidden group-hover:block bg-white text-black p-2 space-y-1 z-50">
              <a href="#">Home 01</a>
              <a href="#">Home 02 Hero</a>
              <a href="#">Home 02 Slider</a>
              <a href="#">Home 03</a>
            </div>
          </li>

          {/* Repeat this structure for other dropdowns */}
          <li className="relative nav-item cursor-pointer group">
            About
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-3 w-3 ml-1 stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="dropdown absolute top-full left-0 hidden group-hover:block bg-white text-black p-2 space-y-1 z-50">
              <a href="#">About Us</a>
              <a href="#">Our Team</a>
            </div>
          </li>

          <li className="relative nav-item cursor-pointer group">
            Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-3 w-3 ml-1 stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="dropdown absolute top-full left-0 hidden group-hover:block bg-white text-black p-2 space-y-1 z-50">
              <a href="#">Counseling</a>
              <a href="#">Therapy</a>
              <a href="#">Consultation</a>
            </div>
          </li>

          <li>
            <a href="#" className="hover:text-[#8CD6D5]">
              Cases
            </a>
          </li>

          <li className="relative nav-item cursor-pointer group">
            Pages
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-3 w-3 ml-1 stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div className="dropdown absolute top-full left-0 hidden group-hover:block bg-white text-black p-2 space-y-1 z-50">
              <a href="#">FAQ</a>
              <a href="#">Pricing</a>
            </div>
          </li>

          <li>
            <a href="#" className="hover:text-[#8CD6D5]">
              Blog
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center hover:text-[#8CD6D5]">
              Contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-5 w-5 ml-1 stroke-white"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18l-1 14H4L3 3z"
                />
                <circle cx="8.5" cy="20.5" r="1.5" />
                <circle cx="17.5" cy="20.5" r="1.5" />
              </svg>
              <span className="ml-1 bg-white rounded-full text-[#046652] text-xs font-bold w-5 h-5 flex items-center justify-center">
                0
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
