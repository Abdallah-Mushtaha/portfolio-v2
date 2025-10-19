import React from "react";

const infoItems = [
  {
    icon: <img src="Character.svg" className="w-5 h-auto" alt="Character" />,
    label: "Name",
    value: "Abdallah Mushtaha",
  },
  { icon: "✉️", label: "Email", value: "abdallah.r.mushtaha@gmail.com" },
  { icon: "📍", label: "Location", value: "cairo, Egypt" },
  {
    icon: "🔍",
    label: "Status",
    value: "Open to innovative projects and ideas",
  },
];

const skills = [
  "React & Next.js",
  "JavaScript / TypeScript",
  "Tailwind CSS / Bootstrap",
  "HTML / CSS3 / JS ",
  " PhP / MySQL / REST APIs ",
];

const philosophyItems = [
  {
    icon: "⚡",
    title: "Performance First",
    description: "Optimized, scalable, and lightning-fast applications.",
  },
  {
    icon: "♿",
    title: "Accessibility Matters",
    description: "Building for everyone, regardless of ability.",
  },
  {
    icon: "🔧",
    title: "Clean Code",
    description: "Maintainable, readable, and developer-friendly code.",
  },
  {
    icon: "🎨",
    title: "User-Centered Design",
    description: "Interfaces that delight and solve real problems.",
  },
];

const InfoCard = ({ icon, label, value }) => (
  <div className="flex flex-col items-center justify-center gap-2 md:gap-3 bg-white p-4 md:p-6 rounded-2xl border border-gray-300 hover:border-blue-500 hover:shadow-lg transition">
    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-blue-500/10 text-xl md:text-2xl text-blue-500">
      {icon}
    </div>
    <div className="text-center">
      <p className="text-xs md:text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-black text-sm md:text-base">{value}</p>
    </div>
  </div>
);

const SkillBadge = ({ skill }) => (
  <span className="px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition">
    {skill}
  </span>
);

const PhilosophyCard = ({ icon, title, description }) => (
  <div className="p-4 md:p-6 bg-white rounded-xl border border-gray-300 hover:shadow-lg transition">
    <h4 className="flex items-center gap-2 text-base md:text-lg font-semibold text-blue-500 mb-2 md:mb-3">
      <span>{icon}</span> {title}
    </h4>
    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative bg-[#f8f9fc] py-12 md:py-24">
      <div className="relative container mx-auto px-4 md:px-6 lg:px-12 z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-black">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Front-End Developer passionate about crafting beautiful and scalable
            digital solutions.
          </p>
        </div>

        {/* Intro Card */}
        <div
          data-aos="fade-right"
          className="bg-white/80 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-blue-500/50 shadow-xl mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center text-4xl md:text-5xl">
              <img
                src="Character.svg"
                className="w-10 h-auto"
                alt="Character"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
                Hello, I'm <span className="text-blue-500">Abdallah</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-3">
                With 1+ year of experience as a{" "}
                <span className="text-blue-500 font-semibold">
                  Front-End Developer
                </span>
                , I specialize in building intuitive, fast, and visually
                engaging web applications.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                I work in building responsive, high-performance, and visually
                engaging web interfaces, focusing on user experience,
                accessibility, and modern front-end technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-6 md:mb-8 text-center">
            Personal Info
          </h3>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            data-aos="fade-down"
          >
            {infoItems.map((item, index) => (
              <InfoCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Technical Expertise */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <h3 className="text-xl  md:text-2xl font-bold text-black mb-6 md:mb-8 text-center">
            Technical Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Development Philosophy */}
        <div data-aos="fade-up">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-6 md:mb-8 text-center">
            Development Philosophy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {philosophyItems.map((item, index) => (
              <PhilosophyCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
