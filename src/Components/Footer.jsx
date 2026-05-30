import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <footer
      className="
      w-full
      mt-20

      bg-white/60
      dark:bg-[#0f172a]/70

      backdrop-blur-xl

      border-t border-gray-200
      dark:border-white/10

      text-gray-700
      dark:text-gray-300
      "
    >
      {/* FOOTER TOP */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-14 flex flex-col md:flex-row justify-between gap-12">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-36"
          />

          <p className="text-sm leading-7 text-gray-500 dark:text-gray-400 max-w-sm">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex flex-wrap gap-6 text-sm font-medium mt-2">
            <li>
              <a
                href="#home"
                className="hover:text-indigo-500 transition-all duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-indigo-500 transition-all duration-300"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#our-work"
                className="hover:text-indigo-500 transition-all duration-300"
              >
                Our Work
              </a>
            </li>

            <li>
              <a
                href="#contact-us"
                className="hover:text-indigo-500 transition-all duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="max-w-md w-full"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Subscribe to our newsletter
          </h3>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-6">
            The latest news, articles and resources, sent directly to your inbox.
          </p>

          <div
            className="
            mt-6

            flex items-center

            p-2

            rounded-2xl

            bg-white
            dark:bg-white/5

            border border-gray-200
            dark:border-white/10

            shadow-lg
            "
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="
              flex-1

              px-4 py-2

              bg-transparent

              outline-none

              text-sm

              text-gray-900
              dark:text-white

              placeholder-gray-400
              "
            />

            <button
              className="
              px-5 py-2.5

              rounded-xl

              bg-gradient-to-r
              from-blue-600
              to-indigo-600

              hover:scale-105

              text-white
              text-sm
              font-medium

              transition-all duration-300
              "
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* FOOTER BOTTOM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="
        border-t border-gray-200
        dark:border-white/10

        py-5
        px-6 sm:px-12 lg:px-20

        flex flex-col sm:flex-row
        items-center justify-between

        gap-4
        "
      >
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

        <div className="flex items-center gap-5">
          <motion.a
            href="#"
            whileHover={{ y: -5, scale: 1.15 }}
            transition={{ duration: 0.2 }}
            className="text-sm hover:text-indigo-500"
          >
            Facebook
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ y: -5, scale: 1.15 }}
            transition={{ duration: 0.2 }}
            className="text-sm hover:text-indigo-500"
          >
            Instagram
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ y: -5, scale: 1.15 }}
            transition={{ duration: 0.2 }}
            className="text-sm hover:text-indigo-500"
          >
            LinkedIn
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ y: -5, scale: 1.15 }}
            transition={{ duration: 0.2 }}
            className="text-sm hover:text-indigo-500"
          >
            X
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;