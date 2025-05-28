import { motion } from 'framer-motion';

const skillCategories = {
  'Programming Languages': ['C++', 'Python', 'JavaScript', 'HTML'],
  'Frameworks & Tools': ['Flask', 'React', 'Next.js', 'GitHub', 'VS Code', 'Excel'],
  'AI & ML': ['Machine Learning', 'Deep Learning', 'Affective Computing'],
  'Databases': ['SQL', 'MongoDB'],
  'Data Visualization': ['Power BI']
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-blackbg dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-primary mb-8">Skills</h3>
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([cat, skills], i) => (
            <div key={i}>
              <h4 className="text-2xl font-semibold text-gray-200 mb-4">{cat}</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((s, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition-colors duration-300 text-center"
                  >
                    <p className="text-gray-200 font-medium">{s}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
