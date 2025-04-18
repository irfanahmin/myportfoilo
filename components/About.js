import { motion } from 'framer-motion';
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h3 initial={{ x:-100, opacity:0 }} whileInView={{ x:0, opacity:1 }} transition={{ duration:0.7 }} className="text-4xl font-bold text-primary mb-4">About Me</motion.h3>
        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.7 }} className="text-lg leading-relaxed">
          I’m a passionate technologist and aspiring entrepreneur specialized in backend development and AI/ML. With a track record of delivering real-time safety analytics tools, predictive market models, and full-stack applications, I love solving complex problems and creating products that drive impact.
        </motion.p>
      </div>
    </section>
  );
}