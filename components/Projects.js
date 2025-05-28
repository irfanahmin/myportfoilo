import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title:'SafeSight: Women’s Safety Analytics',
    tech:['Python','PyTorch','MediaPipe','Flask','MongoDB','Flutter','Scikit-learn','DBSCAN'],
    desc:'AI‑driven tool detecting risks and hotspot clustering in real time.',
  },
  {
    title:'SafeLens: Visual Safety Filter',
    tech:['PyTorch','TensorFlow','VGG19','MediaPipe','WebSockets','OpenCV'],
    desc:'Blurs sensitive content automatically in live streams.',
  },
  {
    title:'Stock Market Predictor',
    tech:['Python','Time Series','Streamlit','ARIMA','LSTM'],
    desc:'Forecasts stock prices via ensemble models.',
  },
  {
    title:'GitHub Evaluator Bot',
    tech:['FastAPI','LangChain','Pinecone','LLaMA','GitHub API','Next.js'],
    desc:'Analyzes repos for activity, docs, and support metrics.',
  },
  {
    title:'Video Summarizer',
    tech:['Python','NLP','Speech Recog.','Transformers','Whisper'],
    desc:'Turns lectures into concise bullet‑point summaries.',
  },
];

const details = {
  'SafeSight: Women’s Safety Analytics': {
    header:'SafeSight – Architecture & Flutter App',
    content:[
      '<strong>Detection:</strong> YOLOv5 CNN for real‑time identification.',
      '<strong>Classification:</strong> CNN gender model with 95% accuracy.',
      '<strong>Gesture SOS:</strong> MediaPipe landmark handshake.',
      '<strong>Clustering:</strong> DBSCAN on MongoDB coords for hotspots.',
      '<strong>Flutter App:</strong> Firebase auth, Leaflet map, SOS UI.',
    ]
  },
  'SafeLens: Visual Safety Filter': {
    header:'SafeLens – Workflow & Stack',
    content:[
      '<strong>Frame Grab:</strong> WebSockets video stream capture.',
      '<strong>Filtering:</strong> VGG19 sensitive content flags.',
      '<strong>Pose Check:</strong> MediaPipe for context.',
      '<strong>Blur:</strong> OpenCV Gaussian mask overlay.',
    ]
  },
  'Stock Market Predictor': {
    header:'Stock Predictor – Pipeline',
    content:[
      '<strong>Ingest:</strong> Pandas & NumPy for data prep.',
      '<strong>Model:</strong> ARIMA + LSTM ensemble.',
      '<strong>UI:</strong> Streamlit + Plotly interactive charts.',
    ]
  },
  'GitHub Evaluator Bot': {
    header:'Evaluator Bot – Design',
    content:[
      '<strong>LLM:</strong> LLaMA + LangChain queries.',
      '<strong>Memory:</strong> Pinecone vector store.',
      '<strong>API:</strong> FastAPI GitHub integrations.',
    ]
  },
  'Video Summarizer': {
    header:'Summarizer – Flow',
    content:[
      '<strong>Upload:</strong> React front‑end.',
      '<strong>Transcribe:</strong> Whisper speech‑to‑text.',
      '<strong>Summarize:</strong> NLP transformer notes.',
    ]
  }
};

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section id="projects" className="py-20 bg-blackbg dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-primary mb-8">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p,i)=>(
            <motion.div key={i}
              whileHover={{ scale:1.05 }} transition={{ type:'spring' }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border-t-4 border-primary hover:shadow-2xl transition-colors duration-300"
            >
              <h4 className="text-2xl font-semibold text-gray-200 mb-2">{p.title}</h4>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t,j)=>(
                  <span key={j} className="px-3 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">{t}</span>
                ))}
              </div>
              <button onClick={()=>setOpen(p.title)} className="text-primary font-medium hover:underline">View Details →</button>
            </motion.div>
          ))}
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={()=>setOpen(null)}
        >
          <motion.div initial={{ scale:0.8 }} animate={{ scale:1 }}
            className="bg-blackbg dark:bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-lg mx-4 transition-colors duration-500"
            onClick={e=>e.stopPropagation()}
          >
            <h4 className="text-2xl font-bold text-gray-200 mb-4">{details[open].header}</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {details[open].content.map((c,j)=>(
                <li key={j} dangerouslySetInnerHTML={{ __html:c }}/>
              ))}
            </ul>
            <button onClick={()=>setOpen(null)}
              className="mt-6 px-6 py-2 bg-primary text-blackbg rounded-full shadow hover:opacity-90 transition"
            >Close</button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
