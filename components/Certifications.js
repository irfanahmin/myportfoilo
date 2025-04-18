import { useState } from 'react';
import { motion } from 'framer-motion';

// Sample certificates (replace with your actual certificate image URLs)
const certifications = [
  {
    title: 'Time Series Analysis & Forecasting Using Python',
    desc: 'Hands-on course covering ARIMA, SARIMA, and LSTM for real-time forecasting.',
    image: '/certificates/time_series.png',
  },
  {
    title: 'Microsoft Excel – Data Analysis Course',
    desc: 'Data cleaning, pivot tables, charts, and complete Excel mastery for analysts.',
    image: '/certificates/excel_analysis.png',
  },
  {
    title: 'Learn SQL for Fast Learners',
    desc: 'Query optimization, joins, subqueries, and database design essentials.',
    image: '/certificates/sql_fast.png',
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-primary mb-8">Certifications</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: 'spring' }}
              className="bg-gray-50 p-6 rounded-2xl shadow-lg border-l-4 border-primary hover:shadow-2xl"
            >
              <h4 className="text-xl font-semibold mb-2">{cert.title}</h4>
              <p className="text-gray-700 mb-4">{cert.desc}</p>
              <button
                onClick={() => setSelectedCert(cert)}
                className="text-primary font-medium hover:underline"
              >
                View Certificate →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white p-6 rounded-2xl shadow-2xl max-w-3xl mx-4"
          >
            <h4 className="text-xl font-bold mb-4">{selectedCert.title}</h4>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-full shadow hover:bg-secondary transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
