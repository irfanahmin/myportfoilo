// components/About.js
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-blackbg dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center md:text-left">
        <motion.h3 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-primary mb-4"
        >
          About Me
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-2xl mx-auto md:mx-0 text-lg text-gray-300 mb-6"
        >
          I’m a passionate technologist with a strong foundation in backend development, AI/ML, and full-stack engineering. My work blends cutting-edge technology with practical problem-solving to build impactful products.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.7 }}
          className="space-y-4 text-xl font-semibold text-gray-300"
        >
          <p>🚀 Building next-gen AI & product innovation.</p>
          <p>🧠 Expert in ML pipelines, model optimization & deployment.</p>
          <p>📊 Transforming complex data into meaningful automation.</p>
          <p>🌐 Open-source contributor & life-long learner.</p>
          <p>🎯 Goal: Build scalable AI products that solve real-world problems.</p>
        </motion.div>
      </div>
    </section>
  );
}
