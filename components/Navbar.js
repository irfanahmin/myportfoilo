import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const links = ["About","Projects","Achievements","Skills","Certifications","Contact"];
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <motion.nav
      initial={{ y:-100 }} animate={{ y:0 }} transition={{ duration:0.5 }}
      className="fixed w-full bg-blackbg dark:bg-gray-800 shadow-lg z-50 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Irfan Khan</h1>
        <div className="flex items-center space-x-6">
          {links.map(l=>(
            <Link key={l} href={`#${l.toLowerCase()}`}>
              <motion.a whileHover={{ scale:1.2, color:'#A855F7' }}
                className="text-gray-200 dark:text-gray-300 font-medium transition-colors"
              >{l}</motion.a>
            </Link>
          ))}
          <button onClick={()=>setDark(d=>!d)}
            className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
          >
            {dark ? <HiSun/> : <HiMoon/>}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
