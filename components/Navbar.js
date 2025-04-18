import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const links = ["About", "Projects", "Achievements", "Skills", "Certifications", "Contact"];

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Irfan Khan</h1>
        <div className="space-x-6">
          {links.map(link => (
            <Link key={link} href={`#${link.toLowerCase()}`}>
              <motion.a whileHover={{ scale: 1.2, color: '#FF5F6D' }} className="cursor-pointer font-medium">
                {link}
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
