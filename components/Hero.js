import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-blackbg relative overflow-hidden transition-colors duration-500">
      {[...Array(5)].map((_,i)=>(
        <motion.div key={i}
          initial={{ opacity:0 }} animate={{ opacity:[0,0.2,0], y:[0,-50,0] }}
          transition={{ duration:8, repeat:Infinity, delay:i }}
          className="absolute w-72 h-72 bg-primary rounded-full opacity-10"
        />
      ))}

      <motion.div initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }}
        transition={{ duration:1 }}
        className="z-10 text-center text-white px-6"
      >
        <Image src="/profile.jpg" width={180} height={180} className="rounded-full border-4 border-secondary shadow-lg mx-auto mb-6"/>
        <h2 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Hello, I'm Irfan</h2>
        <p className="text-2xl text-gray-300">Backend Developer & AI/ML Engineer</p>
      </motion.div>
    </section>
  );
}
