import React from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      group relative overflow-hidden
      rounded-3xl
      bg-white/60
      dark:bg-[#111827]/80
      backdrop-blur-xl
      border border-gray-200
      dark:border-blue-500/20
      p-6
      transition-all duration-500
      hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
      "
    >
      {/* Top Glow Line */}
      <div
        className="
        absolute top-0 left-0
        h-0.5 w-0
        bg-gradient-to-r
        from-purple-500
        via-blue-500
        to-cyan-400
        group-hover:w-full
        transition-all duration-500
        "
      />

      {/* Content */}
      <div className="flex items-start gap-5">

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 8 }}
          className="bg-gray-100 dark:bg-[#1e293b] p-3 rounded-xl"
        >
          <div
            className="
            flex items-center justify-center
            w-10 h-10 rounded-full
            bg-blue-600/10
            "
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-5 h-5 object-contain"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold dark:text-white">
            {service.title}
          </h3>

          <p
            className="
            mt-2 text-sm leading-6
            text-gray-600
            dark:text-gray-300
            "
          >
            {service.description}
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default ServiceCard;