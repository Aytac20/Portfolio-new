"use client";
import { icons } from "@/lib/icons";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="w-full mt-[5rem] mb-[2rem] items-stretch flex flex-col gap-8 font-sora">
      <h1 className="text-3xl text-center">
        My <span className="font-sora-bold">Skills</span>
      </h1>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10">
        {icons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.li
              key={item.name}
              className="flex items-center justify-center gap-2 flex-col aspect-square border-black border-[1.35px] hover:bg-black hover:text-white rounded-sm duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <IconComponent size={50} />
              <span>{item.name}</span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
