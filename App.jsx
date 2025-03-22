import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HandyCarParkLanding() {
  useEffect(() => {
    document.title = "HandyCarPark - Smart PMR Parking";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20 px-4 bg-blue-600 text-white">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-4">
          HandyCarPark
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-lg max-w-xl mx-auto">
          L'application qui protège les vraies places PMR en temps réel.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className="mt-8 flex flex-col items-center gap-4">
          <a href="https://handycarpark.app/beta" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg">Rejoindre la bêta</a>
          <a href="https://handycarpark.app/beta" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-base">📲 Télécharger l'app</a>
        </motion.div>
      </section>
    </div>
  );
}
