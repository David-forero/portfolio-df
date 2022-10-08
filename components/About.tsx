import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2x1">
        Abaout
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={
          "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/240249768_6224681557543810_30575851018998499_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QFNvPQ-4qhQAX_wozgR&_nc_ht=scontent-mia3-1.xx&oh=00_AT9weN2dUG8MDiuZAGp8bKeDtwy74-te8DPS_EUJfwR23Q&oe=6334F0C2"
        }
        className="-wb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:2-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#0099ff]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Soy un desarrollador profesional y apasionado por el desarrollo de
          aplicaciones. Disfruto leyendo tutoriales y viendo videos de
          desarrolladores hablando sobre las herramientas que usan. Siempre
          estoy atento cuando intento aprender tecnologias nuevas o marco, y
          paso horas en YouTube o Udemy aprendiendo tanto como sea posible.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
