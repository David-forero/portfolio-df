import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duraction: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Proyectos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0099ff]">
        {projects.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img src="" alt="" 
                initial={{
                  y: -300,
                  opacity: 0
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duraction: 1.2 }}
                viewport={{once: true}}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#0099ff]/50">
                  Case Studio {i + 1} of {projects.length}
                </span>{" "}
                Disney Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Adipisci dolorum numquam nemo cupiditate, voluptatibus veniam
                itaque ut dolorem maiores quibusdam beatae a ad eius nisi eum.
                Quis quod tenetur explicabo.\
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#0099ff]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
