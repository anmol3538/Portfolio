import { motion } from "framer-motion";
import { achievements } from "../constants";
const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Achievements
      </motion.h1>
      
      {/* Achievements Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-neutral-900 rounded-xl border border-neutral-800 p-5 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 rounded-lg bg-neutral-800 group-hover:bg-cyan-900/20 transition-colors duration-300">
                {achievement?.icon}
              </div>
              <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full">
                {achievement.year}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-neutral-200 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
              {achievement.title}
            </h3>
            
            <p className="text-neutral-400 text-sm mb-4">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;