import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          flex items-center gap-3
          bg-white/70
          dark:bg-white/5
          backdrop-blur-xl
          border border-white/20
          px-5 py-2
          rounded-full
          "
        >
          <img
            src={assets.group_profile}
            alt=""
            className="w-24"
          />

          <p className="text-sm text-gray-700 dark:text-gray-300">
            Trusted by 10k+ users
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
          mt-10
          text-5xl sm:text-7xl
          font-bold
          leading-tight
          max-w-5xl
          text-gray-900
          dark:text-white
          "
        >
          Turning Imagination Into

          <span
            className="
            block
            bg-linear-to-r
            from-blue-500
            via-indigo-500
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            Digital Impact
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="
          mt-6
          max-w-2xl
          text-lg
          text-gray-600
          dark:text-gray-400
          leading-8
          "
        >
          We create premium digital experiences that help brands
          grow faster and connect better with users.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="flex flex-wrap justify-center gap-5 mt-10"
        >
          <motion.a
            href="#contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
            px-8 py-4 rounded-full
            bg-linear-to-r
            from-blue-600
            to-indigo-600
            text-white
            font-medium
            shadow-xl shadow-blue-500/30
            "
          >
            Get Started
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
            px-8 py-4 rounded-full
            border border-gray-300
            dark:border-gray-700
            bg-white/50
            dark:bg-white/5
            backdrop-blur-xl
            hover:bg-white
            dark:hover:bg-white/10
            transition-all duration-300
            "
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="relative mt-16"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            src={assets.hero_img}
            alt="Hero"
            className="
            w-full
            max-w-5xl
            rounded-3xl
            shadow-2xl
            shadow-blue-500/20
            "
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;