import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {[...Array(5)].map((_,i)=>(
        <motion.div key={i} initial={{ opacity:0 }} animate={{ opacity:[0,0.5,0], y:[0,-50,0] }} transition={{ duration:8, repeat:Infinity, delay:i }} className="absolute w-60 h-60 bg-white rounded-full opacity-10"></motion.div>
      ))}
      <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ duration:1 }} className="z-10 text-center text-white px-6">
        <Image src="/profile.jpg" alt="Irfan Khan" width={180} height={180} className="rounded-full border-4 border-white shadow-xl mx-auto mb-6" />
        <h2 className="text-6xl font-extrabold mb-4 drop-shadow-lg">Hello, I'm Irfan</h2>
        <p className="text-2xl">Backend Developer & AI/ML Engineer</p>
      </motion.div>
    </section>
  );
}