import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hola!", "Mi nombre es David", "Bienvenido a mi portafolio"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/104495140_4221166977895288_4958381441344414260_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=YwxPajK05YIAX9zwixL&_nc_ht=scontent-mia3-2.xx&oh=00_AT-vBJjgR4jNr8ZtTRlKPfi3AWRYJoDYY-2iCMgcwb4zLw&oe=6356C1DA"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Development
        </h2>
        <h1 className="text-5x1 lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#0099ff" />
        </h1>
      </div>

      <div className="pt-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>

        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
