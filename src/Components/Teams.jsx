import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "motion/react";

const Teams = () => {
  return (
    <section
      id="team"
      className="flex flex-col items-center px-4 sm:px-12 xl:px-24 py-20 text-gray-800 dark:text-white"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Title
          title="Meet The Team"
          desc="A passionate team of digital experience experts dedicated to your brand success"
        />
      </motion.div>

      {/* Team Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {teamData.map((team, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
            group relative overflow-hidden

            rounded-3xl

            bg-white/70
            dark:bg-[#111827]/70

            backdrop-blur-xl

            border border-gray-200
            dark:border-white/10

            p-5 text-center

            shadow-lg
            hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]

            transition-all duration-500
            "
          >
            {/* Top Gradient Line */}
            <div
              className="
              absolute top-0 left-0
              h-1 w-0
              bg-gradient-to-r
              from-blue-500
              via-indigo-500
              to-purple-500
              group-hover:w-full
              transition-all duration-500
              "
            />

            {/* Soft Glow */}
            <div
              className="
              absolute inset-0
              opacity-0
              group-hover:opacity-100

              bg-gradient-to-br
              from-indigo-500/5
              via-transparent
              to-purple-500/5

              transition-all duration-500
              pointer-events-none
              "
            />

            {/* Image */}
            <div className="flex justify-center">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                src={team.image}
                alt={team.name}
                className="
                w-24 h-24
                object-cover
                rounded-full

                border-2
                border-indigo-500/30
                "
              />
            </div>

            {/* Text */}
            <div className="mt-4 space-y-1">
              <h3
                className="
                text-lg
                font-semibold

                text-gray-900
                dark:text-white

                group-hover:text-indigo-500

                transition-colors duration-300
                "
              >
                {team.name}
              </h3>

              <p
                className="
                text-sm
                text-gray-600
                dark:text-gray-300
                "
              >
                {team.title}
              </p>
            </div>

            {/* Bottom Line */}
            <div
              className="
              mt-4 mx-auto

              w-0 h-0.5

              bg-gradient-to-r
              from-blue-500
              to-indigo-500

              rounded-full

              group-hover:w-16

              transition-all duration-500
              "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Teams;