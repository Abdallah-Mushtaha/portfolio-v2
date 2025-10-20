import React, { useState, useRef, useEffect } from "react";
import "../src/app/globals.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaBars,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

export default function Nave() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const navLinks = [
    { label: "Home", key: "Home", href: "/" },
    { label: "About", key: "about", href: "#about" },
    { label: "Skills", key: "skills", href: "#skills" },
    { label: "Projects", key: "projects", href: "#projects" },
    { label: "Education", key: "experience", href: "#experience" },
    { label: "Contact", key: "contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "github",
      icon: <FaGithub />,
      href: "https://github.com/Abdallah-Mushtaha",
      desktop: true,
    },
    {
      name: "linkedin",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/abdallah-mushtaha-138b42294/",
      desktop: true,
    },
    {
      name: "email",
      icon: <FaEnvelope />,
      href: "mailto:abdallah.r.mushtaha@gmail.com",
      desktop: true,
    },
    {
      name: "instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/abood_mushtaha?utm_source=qr&igsh=MnJvZWdxMDJyOHlp",
      desktop: false,
    },
  ];

  const scrollToSection = (key, href) => {
    setActiveLink(key);
    if (href.startsWith("#")) {
      const section = document.getElementById(key);
      if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y - 60, behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = 0.2;
    }
  }, [isMuted]);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 py-2 bg-transparent md:bg-background/80 backdrop-blur-sm rounded-full w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center relative">
        <a className="text-xl font-bold text-gray-950 px-4" href="/">
          Abdallah<span className="text-blue-600">.</span>
        </a>

        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.key, link.href)}
              className={`px-1.5 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                activeLink === link.key
                  ? "text-gray-950 bg-blue-500/20"
                  : "text-gray-950 hover:text-gray-950 hover:bg-blue-500/10"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          {socialLinks
            .filter((s) => s.desktop)
            .map((social, index) => (
              <a
                key={index}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-black hover:text-black hover:bg-blue-500/10 transition-colors text-lg rounded-full"
                href={social.href}
              >
                {social.icon}
              </a>
            ))}

          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-2 text-black transition-colors text-lg rounded-full flex items-center justify-center ${
              isMuted
                ? "bg-blue-500/10 hover:bg-blue-500/20"
                : "hover:bg-blue-500/10"
            }`}
          >
            {isMuted ? (
              <FaVolumeMute className="transition-transform duration-300 transform hover:scale-110" />
            ) : (
              <FaVolumeUp className="transition-transform duration-300 transform hover:scale-110" />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="p-2 text-black hover:text-black hover:bg-blue-500/10 transition-colors text-lg rounded-full"
            >
              •••
            </button>
            {isMoreOpen && (
              <div className="absolute right-0 top-10 flex flex-col bg-background/95 backdrop-blur-md rounded-lg shadow-lg p-2 space-y-2 border border-gray-700 min-w-[120px]">
                {socialLinks
                  .filter((s) => !s.desktop)
                  .map((social, index) => (
                    <a
                      key={index}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-black hover:text-black hover:bg-blue-500/10 transition-colors text-lg rounded-full"
                      href={social.href}
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {social.icon}
                    </a>
                  ))}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 focus:outline-none p-2 rounded-full hover:bg-blue-500/10 hover:text-black transition-all"
          aria-label="Toggle menu"
        >
          <FaBars className="text-xl" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-3 bg-background/95 rounded-lg shadow-lg p-4 flex flex-col items-center space-y-3 animate-fadeIn">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.key, link.href)}
              className={`w-full text-center px-4 py-2 text-sm font-medium rounded-lg transition ${
                activeLink === link.key
                  ? "text-gray-950 bg-blue-500/10"
                  : "text-gray-950 hover:text-blue-500 hover:bg-blue-500/10"
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {socialLinks
              .filter((s) => !s.desktop)
              .map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 text-black hover:text-black hover:bg-blue-500/10 transition-colors text-lg rounded-lg"
                  href={social.href}
                  onClick={() => setIsMoreOpen(false)}
                >
                  {social.icon}
                </a>
              ))}
          </div>
        </div>
      )}

      <audio
        ref={audioRef}
        src="/Sound/Smooth_Jazz.mp3"
        autoPlay
        preload="auto"
        loop
        onCanPlay={() => audioRef.current.play()}
      />
    </header>
  );
}
