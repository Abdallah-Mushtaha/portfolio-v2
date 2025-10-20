"use client";

import React, { useState, useEffect } from "react";
import { client, urlFor } from "@/sanityClient";

const categories = [
  "All",
  "React",
  "Next.js",
  "HTML/CSS/JS",
  "Vanilla JS",
  "Other",
];

const SkeletonCard = () => (
  <div className="animate-pulse bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col h-full">
    <div className="bg-gray-300 h-60 w-full" />
    <div className="p-6 flex flex-col flex-1 justify-between">
      <div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-300 rounded w-full mb-2" />
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-2" />
        <div className="flex gap-2 mt-2">
          <div className="h-6 w-16 bg-gray-300 rounded-full" />
          <div className="h-6 w-16 bg-gray-300 rounded-full" />
          <div className="h-6 w-16 bg-gray-300 rounded-full" />
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <div className="h-8 w-24 bg-gray-300 rounded-lg" />
        <div className="h-8 w-24 bg-gray-300 rounded-lg" />
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(title asc){
          title,
          description,
          image,
          tech,
          category,
          live,
          source
        }`;
        const data = await client.fetch(query);
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : selectedCategory === "Other"
        ? projects.filter(
            (p) =>
              !["React", "Next.js", "HTML/CSS/JS", "Vanilla JS"].includes(
                p.category
              )
          )
        : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#f8f9fc]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            A selection of featured projects I've worked on, along with other
            projects demonstrating my skills.
          </p>
        </div>

        <div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          data-aos="flip-down"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))
            : filteredProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
                  data-aos="flip-up"
                >
                  <div className="relative h-60 bg-gray-100">
                    <img
                      src={urlFor(project.image).width(600).url()}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 text-sm py-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech?.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      {project.source && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.source}
                          className="flex items-center gap-2 text-sm px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:text-blue-600 transition"
                        >
                          Source
                        </a>
                      )}
                      {project.live && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.live}
                          className="flex items-center gap-2 text-sm px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
