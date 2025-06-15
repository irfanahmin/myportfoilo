// components/Hero.js
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-blackbg dark:bg-gray-900 px-6"
    >
      {/* Left: Text */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 text-center md:text-left space-y-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Hello, I’m Irfan
        </h1>
        <p className="text-xl text-gray-300">
          I’m a passionate technologist with a strong foundation in backend development and AI/ML.
        </p>
      </motion.div>

      {/* Right: Plain Profile Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="md:w-1/2 flex justify-center mt-8 md:mt-0"
      >
        <Image
          src="/profile.jpg"
          alt="Irfan Khan"
          width={300}
          height={300}
          className="rounded-full object-cover shadow-2xl"
          priority
        />
      </motion.div>
    </section>
  );
}
