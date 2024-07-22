import { useState, useEffect, useRef } from "react";
import RadioPlayer from "../audioButton/RadioPlayer.jsx";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const NavShow = useRef(null);

  const handleClickOutside = (event) => {
    if (NavShow.current && !NavShow.current.contains(event.target)) {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (navbar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbar]);

  return (
    <header className="fixed top-0 bg-gradient-to-t from-orange-700 to-orange-600 w-full flex justify-center shadow-2xl z-50">
      <div className="relative max-w-6xl w-full flex items-center justify-between px-3 py-2">
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setNavbar(!navbar)}
            className="relative size-10 p-1 focus:bg-white/10 rounded-lg"
          >
            <svg
              viewBox="0 0 24 24"
              className={`absolute inset-0 p-1 transition-all duration-300 ease-in-out
                ${navbar ? "scale-50 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              viewBox="0 0 24 24"
              className={`absolute inset-0 p-1 transition-all duration-300 ease-in-out
                ${navbar ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
              />
            </svg>
          </button>
          <nav
            className={`absolute top-full left-0 right-0 bg-zinc-800/70 backdrop-blur-lg border-t-[1px] border-white/20 ${
              navbar ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col font-medium" ref={NavShow}>
              <a
                className="w-full px-3 py-4 text-center border-b-[1px] border-white/10 hover:bg-white/10"
                href="/"
              >
                Inicio
              </a>
              <a
                className="w-full px-3 py-4 text-center border-b-[1px] border-white/10 hover:bg-white/10"
                href="/podcast"
              >
                Podcast
              </a>
              <a
                className="w-full px-3 py-4 text-center border-b-[1px] border-white/10 hover:bg-white/10"
                href="/programación"
              >
                Programación
              </a>
            </div>
          </nav>
        </div>
        <nav className="hidden lg:flex items-center">
          <picture className="w-24 mr-6">
            <img src="/Img/logo_white1.webp" alt="i40Radio-logo-white-png" />
          </picture>
          <div className="flex gap-4 font-medium">
            <a href="/">Inicio</a>
            <a href="/podcast">Podcast</a>
            <a href="/programación">Programación</a>
          </div>
        </nav>
        <RadioPlayer />
      </div>
    </header>
  );
};

export default Navbar;
