import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const certifications = [
  { title: 'Time Series & ARIMA/LSTM',              desc: 'Python forecasting models',                                    img: '/certificates/time_series.png' },
  { title: 'Excel Data Analysis',                   desc: 'Pivot tables, macros, charts',                                 img: '/certificates/excel_analysis.png' },
  { title: 'Fast Learners SQL',                     desc: 'Joins, subqueries, optimization',                              img: '/certificates/sql_fast.png' },
  { title: 'Python for Data Science 2025',           desc: 'EDA with real exercises',                                      img: '/certificates/python_eda_2025.png' },
  { title: 'Affective Computing (NPTEL Elite)',     desc: 'MoE‑funded course: assignment + proctored exam (73%)',         img: '/certificates/affective_computing.png' },
  { title: 'Advanced Power BI: Expert Data Analysis and Visualization', desc: 'Udemy course', img: '/certificates/advanced_power_bi.png' },
];

export default function Certifications() {
  const [sel, setSel] = useState(null);
  useEffect(() => {
    document.body.style.overflow = sel ? 'hidden' : 'auto';
  }, [sel]);

  return (
    <section
      id="certifications"
      className="py-20 bg-blackbg dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-primary mb-8">Certifications</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring' }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-primary transition-colors duration-300"
            >
              <h4 className="text-xl font-semibold text-gray-200 mb-2">{c.title}</h4>
              <p className="text-gray-300 mb-4">{c.desc}</p>
              <button
                onClick={() => setSel(c)}
                className="text-primary font-medium hover:underline"
              >
                View →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {sel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSel(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-blackbg dark:bg-gray-900 p-6 rounded-2xl shadow-2xl max-w-3xl mx-4 transition-colors duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-xl font-bold text-gray-200 mb-4">{sel.title}</h4>
            <img
              src={sel.img}
              alt={sel.title}
              className="w-full rounded-lg mb-4"
            />
            <button
              onClick={() => setSel(null)}
              className="mt-6 px-6 py-2 bg-primary text-blackbg rounded-full shadow hover:opacity-90 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
