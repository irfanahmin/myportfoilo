import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-primary mb-4"
        >
          Get In Touch
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-gray-700"
        >
          I’m always open to new opportunities and collaborations. Let’s build something amazing together!
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a
            href="mailto:irfankhan.a2023ai-ds@sece.ac.in"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition transform duration-300"
          >
            Email Me
          </a>
          <a
            href="https://github.com/irfanahmin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-black hover:scale-105 transition transform duration-300"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/irfan-khan-0a3531293/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 hover:scale-105 transition transform duration-300"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
