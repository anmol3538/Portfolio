import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiJavascript, SiMysql, SiNodedotjs, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import cpp from "../assets/icons8-c++.svg"
// Define the icon variants for animation
const iconvariants = (dura) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: dura,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* New Icons */}
        <motion.div
          variants={iconvariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconvariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconvariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconvariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNodedotjs className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconvariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-blue-500" />
        </motion.div>

        {/* C++ Icon (Using your custom SVG image) */}
        <motion.div
          variants={iconvariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src= {cpp}  // Update the path to your actual C++ SVG file
            alt="C++ Logo"
            className="text-7xl"
            style={{ width: '64px', height: '64px' }}  // Adjust size if needed
          />
        </motion.div>


        <motion.div
          variants={iconvariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
