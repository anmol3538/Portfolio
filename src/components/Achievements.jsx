import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaMedal, FaLightbulb, FaGraduationCap, FaCode } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Best Capstone Project",
      organization: "Stanford University",
      year: "2023",
      description: "Built an AI-powered web app that helps students with learning disabilities.",
      icon: <FaTrophy className="text-2xl text-yellow-400" />,
      category: "Academic",
      color: "yellow"
    },
    {
      id: 2,
      title: "Hackathon Winner",
      organization: "TechCrunch Disrupt",
      year: "2022",
      description: "Won first place by developing a real-time collaboration tool in 48 hours.",
      icon: <FaCode className="text-2xl text-blue-400" />,
      category: "Technical",
      color: "blue"
    },
    {
      id: 3,
      title: "Google Cloud Certified",
      organization: "Google Cloud",
      year: "2022",
      description: "Certified Professional Cloud Developer for scalable app development.",
      icon: <FaCertificate className="text-2xl text-green-400" />,
      category: "Certification",
      color: "green"
    },
    {
      id: 4,
      title: "Dean's List",
      organization: "Stanford University",
      year: "2020-2023",
      description: "Maintained a GPA above 3.8 for six consecutive semesters.",
      icon: <FaGraduationCap className="text-2xl text-purple-400" />,
      category: "Academic",
      color: "purple"
    },
    {
      id: 5,
      title: "Innovation Award",
      organization: "MIT Tech Review",
      year: "2021",
      description: "Recognized for an innovative approach to data visualization.",
      icon: <FaLightbulb className="text-2xl text-amber-400" />,
      category: "Recognition",
      color: "amber"
    },
    {
      id: 6,
      title: "National Coding Championship",
      organization: "CodeFest",
      year: "2020",
      description: "Silver medalist in algorithm optimization challenge.",
      icon: <FaMedal className="text-2xl text-red-400" />,
      category: "Technical",
      color: "red"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
      >
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            variants={itemVariants}
            className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl border border-neutral-800 p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group hover:scale-105"
          >
            {/* Icon Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-${achievement.color}-900/20`}>
                {achievement.icon}
              </div>
              <span className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full">
                {achievement.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-neutral-200 mb-1 group-hover:text-cyan-300 transition-colors duration-300">
              {achievement.title}
            </h3>

            {/* Organization */}
            <p className="text-sm text-neutral-400 mb-3">{achievement.organization}</p>

            {/* Description */}
            <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
              {achievement.description}
            </p>

            {/* Category */}
            <span className={`px-3 py-1 bg-${achievement.color}-900/30 text-${achievement.color}-300 text-xs rounded-full`}>
              {achievement.category}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Achievements;
