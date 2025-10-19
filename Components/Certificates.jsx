import React from "react";
import CertificateCard from "./CertificateCard";

const certificatesData = [
  {
    id: 1,
    title: "Responsive Web Design Developer Certification",
    source: "Freecodecamp",
    date: "October 29, 2024",
    description:
      "Certification earned by Abdallah R Mushtaha for successfully completing the Responsive Web Design curriculum, representing approximately 300 hours of work.",
    imageSrc: "/Images/Responsive.jpeg",
    url: "https://www.freecodecamp.org/certification/abdallah-r-mushtaha/responsive-web-design",
    icons: ["/Images/FreeCodecampLogo.jpeg"],
  },
  {
    id: 2,
    title:
      "Front End Web Development: HTML5, CSS3, JavaScript & Bootstrap (40 Hrs)",
    source: "VISION PLUS",
    date: "August 23, 2023",
    description:
      "Certification of Achievement awarded to Abdallah Ramez Mushtaha for successfully completing the requirements of the Front End Web Development course, which covered HTML5، CSS3، JavaScript، and Bootstrap over 40 hours.",
    imageSrc: "/Images/visionplus.jpeg",
    url: "",
    icons: ["/Images/VisionLogo.webp"],
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures Developer Certification",
    source: "Freecodecamp",
    date: "September 21, 2025",
    description:
      "Certification earned by Abdallah R Mushtaha for successfully completing the JavaScript Algorithms and Data Structures curriculum, representing approximately 300 hours of work.",
    imageSrc: "/Images/JS.png",
    url: "https://www.freecodecamp.org/certification/abdallah-r-mushtaha/javascript-algorithms-and-data-structures-v8",
    icons: ["/Images/FreeCodecampLogo.jpeg"],
  },
];

const CertificatesSection = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12 min-h-screen bg-[#eceef2] relative">
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="pb-16 pt-24 text-center">
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-snug tracking-wide">
            <span className="inline-block opacity-100">My</span>
            <span className="inline-block opacity-100 text-blue-500">
              {" "}
              Certificates
            </span>
          </h2>
          <p className="text-lg text-gray-700 font-normal max-w-[750px] mt-4 mx-auto">
            Browse through my collection of certifications and credentials,
            showcasing my expertise in various technologies and commitment to
            continuous professional development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-20">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="opacity-100 transform-none">
              <CertificateCard certificate={cert} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
