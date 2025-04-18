import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SafeSight: Women’s Safety Analytics',
    tech: ['Python','PyTorch','MediaPipe','Flask','MongoDB','Flutter'],
    desc: 'AI-driven tool detecting personal safety risks in real time and sending proactive alerts with hotspot mapping.',
  },
  {
    title: 'SafeLens: Visual Safety Filter',
    tech: ['PyTorch','TensorFlow','VGG19','MediaPipe','WebSockets'],
    desc: 'Screen privacy solution that detects sensitive content and blurs the display automatically.',
  },
  {
    title: 'Stock Market Predictor',
    tech: ['Python','Time Series','Streamlit'],
    desc: 'Interactive dashboard forecasting stock prices using advanced time series models for actionable insights.',
  },
  {
    title: 'GitHub Evaluator Bot',
    tech: ['FastAPI', 'LangChain', 'Pinecone', 'LLaMA', 'GitHub API'],
    desc: 'AI-powered assistant for analyzing open-source GitHub projects based on activity, support, and documentation.',
  },
  {
    title: 'Video Summarizer',
    tech: ['Python', 'NLP', 'Speech Recognition', 'Transformers'],
    desc: 'Converts educational videos into concise, readable notes using speech-to-text and summarization models.',
  }
];

const projectDetails = {
  'SafeSight: Women’s Safety Analytics': {
    header: 'SafeSight – Models & Architecture',
    content: [
      '<strong>Person Detection:</strong> YOLOv5-based CNN for real-time identification.',
      '<strong>Gender Classification:</strong> CNN based model.',
      '<strong>SOS Gesture Recognition:</strong> SOS Signals on MediaPipe landmark sequences.',
    ]
  },
  'SafeLens: Visual Safety Filter': {
    header: 'SafeLens – Outline & Workflow',
    content: [
      '<strong>Video Preprocessing:</strong> Capture & preprocess video frames.',
      '<strong>Content Classification:</strong> VGG19-based model flags sensitive content.',
      '<strong>Pose Filtering:</strong> MediaPipe-based context understanding.',
      '<strong>Privacy Effect:</strong> Gaussian blur overlay on flagged regions.'
    ]
  },
  'Stock Market Predictor': {
    header: 'Stock Predictor – Algorithm & Tools',
    content: [
      '<strong>Ensemble Model:</strong> ARIMA + LSTM for robust forecasting.',
      '<strong>Data Pipeline:</strong> Pandas & NumPy preprocessing.',
      '<strong>Dashboard:</strong> Streamlit with interactive charts.',
    ]
  },
  'GitHub Evaluator Bot': {
    header: 'GitHub Evaluator – Architecture & Features',
    content: [
      '<strong>LLM:</strong> Local LLaMA model via LangChain.',
      '<strong>Memory:</strong> Session memory with Pinecone vector DB.',
      '<strong>APIs:</strong> GitHub API for real-time repo data.',
      '<strong>Tools:</strong> Custom LangChain tools for analyzing stars, forks, issues, and docs.'
    ]
  },
  'Video Summarizer': {
    header: 'Video Summarizer – Workflow & Design',
    content: [
      '<strong>Input:</strong> Lecture video file upload.',
      '<strong>Audio Processing:</strong> Speech-to-text using Whisper.',
      '<strong>Summarization:</strong> NLP transformers for context-aware note generation.',
      '<strong>Output:</strong> Clean, structured summary as downloadable text.'
    ]
  }
};

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-primary mb-8">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: 'spring' }}
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-primary hover:shadow-2xl"
            >
              <h4 className="text-2xl font-semibold mb-2">{p.title}</h4>
              <p className="text-gray-700 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setOpenProject(p.title)}
                className="text-primary font-medium hover:underline"
              >
                View Details →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg mx-4"
          >
            <h4 className="text-2xl font-bold mb-4">
              {projectDetails[openProject].header}
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {projectDetails[openProject].content.map((line, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </ul>
            <button
              onClick={() => setOpenProject(null)}
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
