import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeart, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-t border-neutral-800 pt-20 pb-12 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.7 }}
        className="my-12 text-center text-4xl font-bold bg-gradient-to-r from-amber-300 to-purple-400 bg-clip-text text-transparent"
      >
        Let's Connect
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-6">
        {/* Location Card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-amber-500/30 transition-all duration-300 group"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-amber-900/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 transition-colors duration-300">
              <FaMapMarkerAlt className="text-2xl text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-200 mb-2">Location</h3>
            <p className="text-neutral-400">{CONTACT.address}</p>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-purple-500/30 transition-all duration-300 group"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-purple-900/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/10 transition-colors duration-300">
              <FaPhoneAlt className="text-2xl text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-200 mb-2">Phone</h3>
            <p className="text-neutral-400">{CONTACT.phoneNo}</p>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-emerald-500/30 transition-all duration-300 group"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-900/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 transition-colors duration-300">
              <FaEnvelope className="text-2xl text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-200 mb-2">Email</h3>
            <a 
              href={`mailto:${CONTACT.email}`}
              className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300"
            >
              {CONTACT.email}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center gap-6 mt-8"
      >
        {CONTACT.socials && CONTACT.socials.github && (
          <a
            href={CONTACT.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:bg-neutral-700 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
          </a>
        )}
        {CONTACT.socials && CONTACT.socials.linkedin && (
          <a
            href={CONTACT.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-purple-400 hover:bg-neutral-700 transition-all duration-300"
          >
            <FaLinkedin className="text-xl" />
          </a>
        )}
        {CONTACT.socials && CONTACT.socials.twitter && (
          <a
            href={CONTACT.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:bg-neutral-700 transition-all duration-300"
          >
            <FaTwitter className="text-xl" />
          </a>
        )}
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 text-center text-sm text-neutral-500"
      >
        <p className="flex items-center justify-center gap-1">
          Crafted with <FaHeart className="text-red-500 mx-1" /> by
          <span className="text-amber-400 font-semibold ml-1">Anmol Aggarwal</span>
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </motion.div>
    </div>
  );
};

export default Contact;