import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-[#f8f9fc] relative">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="block w-full h-[1.5px] mb-25 bg-blue-200"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Let's Connect
        </h2>
        <p className="text-gray-700 mt-3 mb-10 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'm always
          open to talking about creative ideas and new projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105"
            href="#"
          >
            <div className="flex items-center justify-center mb-3 text-blue-600 text-2xl">
              <HiOutlineLocationMarker />
            </div>
            <h4 className="font-semibold text-gray-900">Location</h4>
            <p className="text-sm text-gray-600">Cairo, Egypt</p>
          </a>

          <a
            className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105"
            href="mailto:abdallah.r.mushtaha@gmail.com"
          >
            <div className="flex items-center justify-center mb-3 text-blue-600 text-2xl">
              <MdEmail />
            </div>
            <h4 className="font-semibold text-gray-900">Email</h4>
            <p className="text-sm text-gray-600">
              abdallah.r.mushtaha@gmail.com
            </p>
          </a>

          <a
            className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition hover:scale-105"
            href="tel:+201552798956"
          >
            <div className="flex items-center justify-center mb-3 text-blue-600 text-2xl">
              <MdPhone />
            </div>
            <h4 className="font-semibold text-gray-900">Phone</h4>
            <p className="text-sm text-gray-600">+20 155279 8956</p>
          </a>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-blue-600 hover:bg-blue-400 hover:text-white transition text-xl"
            href="https://github.com/Abdallah-Mushtaha"
          >
            <FaGithub />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-blue-600 hover:bg-blue-400 hover:text-white transition text-xl"
            href="https://www.instagram.com/abood_mushtaha?utm_source=qr&igsh=MnJvZWdxMDJyOHlp"
          >
            <FaInstagram />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-blue-600 hover:bg-blue-400 hover:text-white transition text-xl"
            href="https://www.linkedin.com/in/abdallah-mushtaha-138b42294/"
          >
            <FaLinkedin />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-blue-600 hover:bg-blue-400 hover:text-white transition text-xl"
            href="https://wa.me/201552798956"
          >
            <FaWhatsapp />
          </a>
        </div>

        <a
          className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-500 transition"
          href="mailto:abdallah.r.mushtaha@gmail.com"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
