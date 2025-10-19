import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Button = ({ href, primary, children, icon }) => (
  <a
    href={href}
    className={`relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 overflow-hidden font-medium rounded-full group border transition-all duration-300 text-sm sm:text-base ${
      primary
        ? "border-blue-500 bg-blue-500 text-white hover:scale-[1.03]"
        : "border-border bg-background  text-foreground  text-black hover:border-blue-500/50 hover:scale-[1.03]"
    }`}
  >
    {primary && (
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-b from-white/10 to-white/30 group-hover:opacity-100"></span>
    )}
    <span className="relative">{children}</span>
    {icon && (
      <svg
        className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    )}
  </a>
);

const skills = [
  { name: "TypeScript", svg: <span className="text-[#3178C6]">TS</span> },
  { name: "React", svg: <span className="text-[#61DAFB]">⚛</span> },
  {
    name: "Next.js",
    svg: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="h-4 w-4 sm:h-5 sm:w-5 text-foreground"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
      </svg>
    ),
  },
  { name: "Tailwind CSS", svg: <span className="text-[#06B6D4]">🌀</span> },
  { name: "Mongodb", svg: <span className="text-green-600">🍃</span> },
];

const SkillItem = ({ name, svg }) => (
  <div
    className="flex items-center gap-1.5 sm:gap-2 bg-gray-700/40 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-gray-600 transition-all duration-300 group hover:bg-transparent hover:border-gray-400 hover:scale-105 cursor-pointer"
    title={name}
  >
    <div className="transition-transform group-hover:scale-110">{svg}</div>
    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
      {name}
    </span>
  </div>
);

export default function Hero() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const texts = [
      "Building Modern Web Apps",
      "Specialized in Next.js and JavaScript",
      "Front-End Developer",
    ];

    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    });

    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    texts.forEach((text) => {
      tl.to(textRef.current, {
        duration: text.length * 0.1,
        text: text,
        ease: "none",
      }).to(textRef.current, {
        duration: 0.5,
        text: "",
        delay: 1,
      });
    });
  }, []);
  const borderRef = useRef(null);

  useEffect(() => {
    gsap.to(borderRef.current, {
      rotate: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(borderRef.current, {
      boxShadow: "0 0 25px rgba(59,130,246,0.6)",
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "easeInOut",
    });
  }, []);

  return (
    <div className="container mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-20 pt-16 md:pt-0 mt-0 mb-12">
      <div
        data-aos="fade-right"
        className="space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1"
      >
        <div className="space-y-3 sm:space-y-4">
          <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4 bg-blue-500/10 text-gray-500 border border-b-blue-300 border-r-blue-300 hover:bg-blue-500/20 transition-colors">
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 mr-1.5 sm:mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-500"></span>
            </span>
            Available for Freelance Work
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Hi, I'm{" "}
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
              Abdallah Mushtaha
            </span>
          </h1>
          <div className="h-12 sm:h-14 md:h-16 flex items-center">
            <span
              ref={textRef}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 text-gray-500"
            ></span>
            <span
              ref={cursorRef}
              className="ml-1 inline-block text-blue-500 font-bold text-xl sm:text-2xl md:text-3xl"
            >
              |
            </span>
          </div>
        </div>

        <p className="text-base sm:text-lg max-w-xl text-gray-500 leading-relaxed">
          I craft responsive web applications where technologies meet
          creativity. Building exceptional digital experiences with modern full
          stack frameworks.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start pt-2 sm:pt-4 text-white">
          <Button href="#projects" primary icon>
            View My Work
          </Button>
          <Button
            href="https://wa.me/201552798956"
            className="border border-gray-300 text-gray-200 hover:bg-blue-500 hover:text-white hover:border-blue-500"
          >
            Contact Me
          </Button>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-3">
          <p className="text-xs sm:text-sm text-text-secondary font-medium">
            Tech I work with:
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <div
              className="flex items-center gap-1.5 sm:gap-2 bg-muted/80 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-border hover:border-[#61dafb] hover:shadow-[#61dafb] hover:shadow-sm transition-all duration-300 group"
              title="React"
            >
              <div className="transition-transform group-hover:scale-110">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-[#61DAFB]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-text-secondary group-hover:text-foreground transition-colors">
                React
              </span>
            </div>
            <div
              className="flex items-center gap-1.5 sm:gap-2 bg-muted/80 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-border hover:border-yellow-500 hover:shadow-yellow-500 hover:shadow-sm transition-all duration-300 group"
              title="TypeScript"
            >
              <div className="transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                  <path
                    fill="#000001"
                    d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                  ></path>
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-text-secondary group-hover:text-foreground transition-colors">
                JavaScript
              </span>
            </div>

            <div
              className="flex items-center gap-1.5 sm:gap-2 bg-muted/80 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-border hover:border-gray-950 hover:shadow-gray-950 hover:shadow-sm transition-all duration-300 group"
              title="Next.js"
            >
              <div className="transition-transform group-hover:scale-110">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-foreground"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-text-secondary group-hover:text-foreground transition-colors">
                Next.js
              </span>
            </div>
            <div
              className="flex items-center gap-1.5 sm:gap-2 bg-muted/80 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-border  hover:border-[#06b6d4] hover:shadow-[#06b6d4] hover:shadow-sm transition-all duration-300 group"
              title="Tailwind CSS"
            >
              <div className="transition-transform group-hover:scale-110">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-[#06B6D4]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-text-secondary group-hover:text-foreground transition-colors">
                Tailwind CSS
              </span>
            </div>
            <div
              className="flex items-center gap-1.5 sm:gap-2 bg-muted/80 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-border hover:border-gray-950 hover:shadow-gray-950 hover:shadow-sm  transition-all duration-300 group"
              title="Tailwind CSS"
            >
              <div className="transition-transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <g clipPath="url(#clip0_790_3387)">
                    <path
                      d="M81.25 49.9996L50 81.2496"
                      stroke="black"
                      strokeWidth="6.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M75 15.6246L15.625 74.9996"
                      stroke="black"
                      strokeWidth="6.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_790_3387">
                      <rect
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(0 -0.000366211)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-xs sm:text-sm text-text-secondary group-hover:text-foreground transition-colors">
                shadcn ui
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="order-1 md:order-2 flex justify-center relative mb-8 md:mb-0"
        data-aos="fade-left"
      >
        <div className="relative group">
          <div
            ref={borderRef}
            className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 opacity-90 blur-[3px]"
          ></div>

          <div className="relative w-55 h-55 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl bg-gray-900 border-4 border-gray-700">
            <img
              src="../Images/abood.jpg"
              alt="Abdallah Picture"
              className="object-cover w-55 h-55 sm:w-full sm:h-full rounded-xl group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
