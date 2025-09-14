import { motion } from "framer-motion";
import { educationData } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto px-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
          >

            <div className="h-48 w-full flex items-center justify-center bg-white-900 overflow-hidden bg-white">
            <img
                src={edu.image}
                alt={edu.institution}
                className="max-h-full max-w-full object-contain"
            />
            </div>

            

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-full">
                  {edu.year}
                </span>
                <span className="px-3 py-1 bg-cyan-900 text-cyan-300 text-sm rounded-full font-semibold">
                  {edu?.cgpa ? (
                    <>CGPA: {edu.cgpa}</>
                    ) : (
                    <>PERCENT: {edu?.percentage}</>
                    )}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-neutral-200">{edu.degree}</h3>
              <p className="text-lg text-neutral-400">{edu.institution}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;