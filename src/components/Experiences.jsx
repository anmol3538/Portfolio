import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { experiences } from "../constants";
const Experiences = () => {
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Work Experience
      </motion.h1>

      <div className="max-w-5xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-7 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-16 flex flex-col md:flex-row relative"
            >
              {/* Timeline dot */}
              <div className="flex justify-center md:justify-start">
                <div className="absolute left-5 w-5 h-5 rounded-full bg-cyan-400 border-4 border-neutral-900 shadow-lg shadow-cyan-500/50 animate-pulse"></div>
              </div>

              {/* Card */}
              <div className="ml-12 md:ml-16 flex-1">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  className="bg-neutral-900/70 backdrop-blur-xl rounded-2xl border border-neutral-800 p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center p-2 border border-neutral-700">
                        <img
                          src={exp.img}
                          alt={exp.company}
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-neutral-200">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-cyan-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-neutral-400">
                        <FaCalendarAlt className="text-cyan-400" />
                        <span className="text-sm">{exp.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-400">
                        <FaMapMarkerAlt className="text-cyan-400" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-md font-semibold text-neutral-300 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-neutral-800 text-cyan-300 text-sm rounded-full border border-neutral-700"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;
