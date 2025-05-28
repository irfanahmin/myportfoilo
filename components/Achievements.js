import { motion } from 'framer-motion';

const achievements = [
  'Finalist, Smart India Hackathon (SIH) 2024',
  'Patent Holder: SafeLens',
  'Participant in multiple national hackathons',
  'Built AI-powered GitHub Evaluator Bot used by 100+ developers',
  'Developed a real-time video-to-notes summarizer with Whisper',
  'Contributed to 5 open-source projects on GitHub'
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-blackbg dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.h3 initial={{ x:-100, opacity:0 }} whileInView={{ x:0, opacity:1 }}
          transition={{ duration:0.7 }} className="text-4xl font-bold text-primary mb-8"
        >Achievements</motion.h3>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
          {achievements.map((a,i)=>(
            <motion.li key={i}
              initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
              transition={{ delay:i*0.2 }}
            >{a}</motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
