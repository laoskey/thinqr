"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "ReactNative",
    "Node.js",
    "QA",
    "SQL",
    "Django",
    "SpringBoot",
    "TailwindCSS",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen max-w-[1200px] bg-black flex flex-col items-center justify-center overflow-hidden px-4 pt-16 "
    >
      <div className="container w-full h-full mx-auto flex flex-col lg:flex-row items-center gap-8 rounded-lg">
        <motion.div
          className="text-center lg:text-left lg:w-1/2 z-10  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h1
            className="mt-[4rem] md:mt-0 text-3xl md:text-6xl font-bold mb-2 h-[4rem] from-[#2a4dec] to-[#0fdb27] transition-all ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r"
            variants={itemVariants}
          >
            Hi, i&apos;m EricTang
          </motion.h1>

          <motion.h2
            className="text-lg text-gray-200 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            As a software engineer with a passion for building products that help people live better
            lives since 2017.
          </motion.h2>
          <motion.p
            className="text-xl mt-2 italic font-[100] text-white "
            variants={itemVariants}
          >
            Let&apos;s build something extraordinary together.
          </motion.p>
          <motion.div
            className="mt-16"
            variants={itemVariants}
          >
            <div className="flex flex-wrap md:flex-row gap-2 ">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className=" text-gray-200 px-2  font-[100] rounded-full hover:bg-gray-900 transition bg-gradient-to-b to-[#1b3bcce6] from-[#0c9d1d]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-fit mt-12 px-8 py-4  rounded-lg bg-green-700 hover:bg-green-800 cursor-pointer transition-all ease-in-out duration-300 "
            variants={itemVariants}
          >
            <div className="text-white font-semibold text-lg hover:text-gray-100 transition-all ease-in-out duration-300 ">
              Let&apos;s do it.
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative lg:w-1/2 w-[600px] h-[400px] md:w-[800px] md:h-[600px]  overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
        >
          <Image
            src="/avatar.png"
            alt="Hero Image"
            fill
            className=" rounded-lg scale-90"
            objectFit="cover"
          />
        </motion.div>
      </div>

      {/* 背景装饰 */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900 opacity-50" /> */}
    </section>
  );
};

export default Hero;
