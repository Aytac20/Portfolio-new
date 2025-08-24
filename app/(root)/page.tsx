import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-screen py-5">
      {/* Text Section */}
      <div className="flex justify-center max-auto flex-col order-2 md:order-1">
        <h1 className="lg:text-[48px] md:text-[40px] text-[30px] lg:leading-[4rem] leading-[3rem] font-sora-regular">
          Hello I&apos;am{" "}
          <span className="font-sora-bold">
            Balayeva Aytac. <br />
            Frontend
          </span>
          <span className="font-londrina tracking-widest lg:text-[3.5rem] md:text-[3rem] text-[2.5rem]">
            {" "}
            Developer <br />
          </span>{" "}
          Base In
          <span className="font-sora-bold"> Azerbaijan.</span>
        </h1>

        <p className="mt-4 lg:text-[1rem] text-[0.9rem] tracking-wide font-sora-regular text-gray-700">
          "I’m Aytac Balayeva, a Frontend Developer passionate about building
          modern, user-friendly web applications with React, Next.js, and
          Tailwind CSS."
        </p>

        <div className="flex mt-[2rem] gap-10 media-links mb-4">
          <a
            href="https://www.linkedin.com/in/aytac-balayeva"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl hover:text-indigo-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=abalayeva12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
            className="text-2xl hover:text-indigo-600 transition"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/Aytac20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl hover:text-indigo-600 transition"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
      <div className="center order-1 md:order-2">
        <Image src="/girl.svg" width={600} height={600} alt="Girl" priority />
      </div>
    </div>
  );
};

export default Home;
