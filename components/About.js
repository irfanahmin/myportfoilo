import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-blackbg dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.h3 initial={{ x:-100, opacity:0 }} whileInView={{ x:0, opacity:1 }}
          transition={{ duration:0.7 }}
          className="text-4xl font-bold text-primary mb-4"
        >About Me</motion.h3>

        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.7 }}
          className="text-lg leading-relaxed text-gray-300 mb-6"
        >
          I’m a passionate technologist… creating products that drive impact.
        </motion.p>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.7, delay:0.3 }}
          className="space-y-4 text-xl font-semibold text-gray-300"
        >
          <p>🚀 Building next-gen AI & product innovation.</p>
          <p>🧠 Expert in ML pipelines, model optimization.</p>
          <p>📊 Turning data into meaningful automation.</p>
          <p>🌐 Open-source contributor & life‑long learner.</p>
          <p>🎯 Goal: Scalable AI products solving real problems.</p>
        </motion.div>
      </div>
    </section>
  );
}
