"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blackbg dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          initial="hidden"
          animate="visible"
          variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-primary mb-4"
        >
          Get In Touch
        </motion.h3>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-gray-300"
        >
          I’m always open to new opportunities and collaborations. Let’s build something amazing together!
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {/* All buttons now transparent dark by default */}
          <a
            href="mailto:irfankhan.a2023ai-ds@sece.ac.in"
            className="px-8 py-3 bg-gray-800/50 text-primary rounded-full shadow-lg hover:bg-primary hover:text-blackbg transition duration-300"
          >
            Email Me
          </a>

          <a
            href="https://github.com/irfanahmin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-primary rounded-full shadow-lg hover:bg-primary hover:text-blackbg transition duration-300"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/irfan-khan-0a3531293/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-primary rounded-full shadow-lg hover:bg-primary hover:text-blackbg transition duration-300"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://drive.google.com/file/d/1slnNGCBWtxbX_5ihG1BCUxvW4AqtRlb1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-primary rounded-full shadow-lg hover:bg-primary hover:text-blackbg transition duration-300"
          >
            📄 Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
