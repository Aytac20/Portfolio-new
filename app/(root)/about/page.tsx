import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" w-full center flex-col mt-[5rem]">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="center">
          <Image
            src="/girl2.svg"
            width={400}
            height={400}
            alt="Girl2"
            priority
            className="w-[30rem]"
          />
        </div>
        <div className="text-base md:text-lg leading-relaxed">
          <h1 className="text-3xl md:text-4xl  mb-6 ">
            About <span className="font-sora-bold ">Me</span>
          </h1>
          <div className="space-y-4 max-w-prose">
            <p>
              I’m a <span className="font-semibold">frontend developer</span>{" "}
              who loves turning ideas into clean, responsive, and user-friendly
              websites.
            </p>

            <p>
              My journey started unexpectedly at university during a{" "}
              <span className="font-semibold">web programming course</span>.
              From building simple static pages with HTML & CSS, I quickly
              discovered JavaScript—and everything changed.
            </p>

            <p>
              Curiosity pushed me to explore more: React, Node.js, and the{" "}
              <span className="font-semibold">MERN stack</span>. Along the way,
              I taught myself how to build full-stack applications, connect
              databases, and manage user authentication.
            </p>

            <p>
              Today, I’m focused on{" "}
              <span className="font-semibold">
                creating modern web applications
              </span>{" "}
              with React, Next.js, and Tailwind CSS—always learning and pushing
              my skills further.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
