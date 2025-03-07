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

  const skills = ["TypeScript", "React", "Next.js", "Reactnative", "Node.js", "QA", "SQL"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16 "
    >
      <div className="container w-full h-full mx-auto flex flex-col lg:flex-row items-center gap-8 rounded-lg">
        <motion.div
          className="text-center lg:text-left lg:w-1/2 z-10 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6  from-[#2a4dec] to-[#0fdb27] transition-all ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r"
            variants={itemVariants}
          >
            Turn your ideas into profit.
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-white dark:text-gray-300 mb-8"
            variants={itemVariants}
          >
            Let&apos;s discuss your project and see how we can help you grow your business.
          </motion.h2>
          <motion.p
            className="text-lg text-white dark:text-gray-400 max-w-2xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            We are dedicated to providing the best services and solutions for our clients, and we are
            committed to making a difference in people&apos;s lives.
          </motion.p>

          <motion.div
            className="mt-16"
            variants={itemVariants}
          >
            <div className="flex flex-wrap md:flex-row gap-2 ">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-blue-300 text-gray-200 px-2  rounded-full hover:bg-gray-900 transition bg-gradient-to-b to-[#132b97e6] from-[#0c9d1d]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
        >
          <Image
            src="/bg5.png"
            alt="Hero Image"
            width={1200}
            height={1200}
            className="w-full rounded-lg "
            priority
          />
        </motion.div>
      </div>

      {/* 背景装饰 */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900 opacity-50" /> */}
    </section>
  );
};

export default Hero;
