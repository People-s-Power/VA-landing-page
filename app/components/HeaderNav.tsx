import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white" : "bg-transparent"}`}
    >
      <header className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex gap-2">
              <img
                src="https://www.experthubllc.com/_next/image?url=%2Fimages%2Fnew-home%2Flogo.png&w=48&q=75"
                alt=""
              />
              <h1 className="text-xl font-bold text-gray-800 my-auto">
                ExpertHub
              </h1>
            </div>
          </Link>
          <button
            className="md:hidden p-2 rounded text-primary focus:outline-none"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <nav className="hidden md:flex items-center space-x-7">
            {/* <h1 className="text-xl font-bold text-gray-800">ExpertHub</h1> */}
            <Link to="/#learn-more" className="text-base py-2">
              About
            </Link>
            <Link to="/#learn-more" className="text-base py-2">
              Services
            </Link>
            <Link to="/#pricing" className="text-base py-2">
              Pricing
            </Link>

            {/* <Link
              to="https://project.experthubllc.com/professional/auth/signup"
              className="text-base py-2"
            >
              Become a Virtual Assistant
            </Link> */}
          </nav>
          <div className="hidden md:flex items-center">
            <Link to="https://project.experthubllc.com/professional/auth/signup">
              <button className="ml-2 px-4 py-2 bg-primary text-white hover:brightness-90 transition">
                Become a VA
              </button>
            </Link>
            <Link to="https://www.experthubllc.com/">
              <button className="ml-2 px-4 py-2 text-primary rounded hover:brightness-90 transition">
                Login
              </button>
            </Link>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white rounded shadow p-4 flex flex-col space-y-2">
            <Link to="/" className="text-base py-2 border-b border-gray-100">
              Home
            </Link>
            <Link
              to="/#learn-more"
              className="text-base py-2 border-b border-gray-100"
            >
              About
            </Link>
            <Link
              to="/#learn-more"
              className="text-base py-2 border-b border-gray-100"
            >
              Services
            </Link>
            <Link
              to="/#pricing"
              className="text-base py-2 border-b border-gray-100"
            >
              Pricing
            </Link>
            {/* <Link
              to="https://project.experthubllc.com/professional/auth/signup"
              className="text-base py-2 border-b border-gray-100"
            >
              Become a VA
            </Link> */}

            <Link
              to="https://project.experthubllc.com/professional/auth/signup"
              className="text-base py-2 border-b border-gray-100"
            >
              <button className="mt-2 px-4 py-2 bg-white text-primary hover:brightness-90 transition border border-primary">
                Become a VA
              </button>
            </Link>
            <Link to={"https://www.experthubllc.com/"}>
              <button className="mt-2 px-4 py-2 text-primary rounded hover:brightness-90 transition border border-primary">
                Login
              </button>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default HeaderNav;
