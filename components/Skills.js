import { motion } from 'framer-motion';

const skillCategories = {
  'Programming Languages': ['C++', 'Python', 'JavaScript', 'HTML'],
  'Frameworks & Tools': ['Flask', 'React', 'VS Code', 'GitHub', 'Google Colab', 'Canva', 'Excel'],
  'AI & ML': ['Deep Learning', 'Machine Learning', 'Affective Computing'],
  'Databases': ['SQL', 'MongoDB'],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-primary mb-8">Skills</h3>
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills], idx) => (
            <div key={idx}>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white p-4 rounded-xl shadow hover:shadow-xl text-center"
                  >
                    <p className="font-medium">{s}</p>
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
