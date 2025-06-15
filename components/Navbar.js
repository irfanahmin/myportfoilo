// components/Navbar.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = ["About","Projects","Achievements","Skills","Certifications","Contact"];
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      {/* Desktop */}
      <motion.nav
        initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        className="hidden md:flex fixed top-0 w-full bg-blackbg dark:bg-gray-900 z-50 px-6 py-4 items-center justify-between"
      >
        <h1 className="text-2xl font-bold text-primary">Irfan Khan</h1>
        <div className="flex space-x-8 items-center">
          {links.map(l => (
            <Link
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-gray-200 hover:text-primary transition"
            >
              {l}
            </Link>
          ))}
          <button onClick={() => setDark(d => !d)} className="p-2 rounded-full bg-gray-800 text-gray-200">
            {dark ? <HiSun /> : <HiMoon />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile */}
      <nav className="md:hidden fixed top-0 w-full bg-blackbg dark:bg-gray-900 z-50 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary">Irfan</h1>
        <div className="flex items-center space-x-4">
          <button onClick={() => setDark(d => !d)} className="p-2 rounded-full bg-gray-800 text-gray-200">
            {dark ? <HiSun /> : <HiMoon />}
          </button>
          <button onClick={() => setOpen(o => !o)} className="p-2 rounded-lg bg-gray-800 text-gray-200">
            {open ? <HiX size={24}/> : <HiMenu size={24}/>}
          </button>
        </div>
        {/* Slide‑in Drawer */}
        {open && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-3/4 bg-gray-800 dark:bg-gray-900 p-6 flex flex-col space-y-6"
          >
            {links.map(l => (
              <Link
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-gray-200 text-lg"
                onClick={() => setOpen(false)}
              >
                {l}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </>
  );
}
