import React from "react";
import { FaCalendarAlt, FaGlobe } from "react-icons/fa";

const CertificateCard = ({ certificate }) => {
  return (
    <div className="rounded-3xl overflow-hidden border border-white/[0.1] h-full shadow-lg">
      <div className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-end p-4 z-20">
          <a
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-10 w-48 overflow-hidden rounded-lg p-[1px] focus:outline-none"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#1E40AF_50%,#3B82F6_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-50 px-7 text-sm font-medium text-black backdrop-blur-3xl gap-2 hover:bg-blue-400/30 hover:!text-white transition-all duration-300 ">
              View Certificate
              <FaGlobe className="ml-1" />
            </span>
          </a>
        </div>
        <img
          alt={certificate.title}
          title={certificate.title}
          loading="lazy"
          width="500"
          height="500"
          src={certificate.imageSrc}
          className="w-full h-auto max-w-full transition-transform duration-300 group-hover:scale-105"
          style={{ aspectRatio: "16/9", objectFit: "cover" }}
        />
      </div>

      <div className="group/spotlight overflow-hidden rounded-b-3xl relative border-t border-white/[0.1] p-0 h-full cursor-pointer bg-slate-50">
        <div
          className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
          style={{
            backgroundColor: "#3B82F6",
            maskImage:
              "radial-gradient(350px at 0px 0px, white, transparent 80%)",
          }}
        ></div>

        <div className="relative z-20 p-6">
          <h3 className="text-xl font-semibold mb-2 text-black">
            {certificate.title}
          </h3>

          <div className="flex flex-row flex-wrap gap-3 text-sm font-normal text-gray-600">
            <div className="flex items-center gap-2">
              <FaGlobe className="w-4 h-4" />
              <span>{certificate.source}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="w-4 h-4" />
              <span>{certificate.date}</span>
            </div>
          </div>

          <p className="text-gray-700 text-base sm:text-lg font-normal my-5 line-clamp-2">
            {certificate.description}
          </p>

          <div className="flex items-center">
            {certificate.icons.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{ transform: `translateX(-${index * 5}px)` }}
              >
                <img
                  alt={`Icon ${index + 1}`}
                  loading="lazy"
                  src={icon}
                  className="p-2 w-full h-10 object-cover"
                  style={{ color: "transparent" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
