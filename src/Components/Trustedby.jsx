import React from "react";
import { company_logos } from "../assets/assets";
import { motion } from "motion/react";

const Trustedby = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl font-semibold mb-10
          text-gray-700 dark:text-gray-300"
        >
          Trusted By Leading Companies
        </motion.h3>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {company_logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt=""
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.15,
                opacity: 1,
              }}
              className="h-6 opacity-70
              transition-all duration-300
              dark:brightness-200"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trustedby;