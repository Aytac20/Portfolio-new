"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "ChillFix – Movie Website",
    description:
      "A modern movie tracking app built with Next.js. Helps users discover and organize their favorite films with ease.",
    image: "/Chillfix.png",
    code: "https://github.com/Aytac20/Chillfix",
    demo: "https://chillfix.vercel.app/",
  },
  {
    id: "02",
    title: "Burger Website",
    description:
      "A fully responsive burger ordering website with animations, built with React, Next.js, and Tailwind.",
    image: "/Burger.png",
    code: "https://github.com/Aytac20/Burger",
    demo: "https://burgers-zo9w.onrender.com/",
  },
  {
    id: "03",
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js SPA, showcasing my work, skills, and projects with a modern UI.",
    image: "/Portfolio.png",
    code: "https://github.com/Aytac20/Portfolio",
    demo: "https://portfolio-1-ten-tau.vercel.app",
  },
];

const Projects = () => {
  return (
    <section className="w-full mt-20 px-6 md:px-16 font-sora mb-10">
      <h1 className="text-center text-3xl md:text-4xl font-sora-bold">
        My <span className="font-sora-bold">Projects</span>
      </h1>

      <div className="mt-12 space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
          >
            {/* Image */}
            <div
              className={`flex justify-center ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={project.image}
                width={500}
                height={350}
                alt={project.title}
                className="rounded-lg shadow-md hover:scale-[1.03] transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold text-gray-500">
                {project.id}
              </span>
              <h2 className="text-2xl md:text-3xl font-sora-bold">
                {project.title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="flex gap-4 mt-4">
                <Link
                  href={project.code}
                  target="_blank"
                  aria-label={`View code for ${project.title}`}
                  className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-700 transition"
                >
                  Code
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  aria-label={`View live demo of ${project.title}`}
                  className="px-6 py-2 rounded-lg border-2 border-black text-black hover:bg-black hover:text-white transition"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
