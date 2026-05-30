import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToglebtm from "./ThemeToglebtm";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "Our Work", link: "#our-work" },
    { name: "Contact", link: "#contact-us" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <header className="sticky top-0 z-50">
        <nav
          className="
          flex justify-between items-center
          px-4 sm:px-10 lg:px-20 py-4
          bg-white/60
          dark:bg-[#020617]/60
          backdrop-blur-2xl
          border-b border-white/20
          dark:border-white/10
          shadow-lg
        "
        >
          
          <a href="#home">
            <img
              src={theme === "dark" ? assets.logo_dark : assets.logo}
              alt="logo"
              className="w-36 sm:w-40 cursor-pointer"
            />
          </a>

          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="
                relative text-sm font-medium
                hover:text-blue-500
                transition duration-300
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-0.5
                after:bg-gradient-to-r
                after:from-blue-500
                after:to-indigo-500
                after:transition-all
                after:duration-300
                hover:after:w-full
                "
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToglebtm
              theme={theme}
              setTheme={setTheme}
            />

            <motion.a
              href="#contact-us"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="
                hidden sm:flex items-center gap-2
                px-6 py-3 rounded-full
                bg-linear-to-r
                from-blue-600
                to-indigo-600
                hover:from-indigo-600
                hover:to-blue-600
                text-white text-sm font-medium
                shadow-lg shadow-blue-500/30
                transition-all duration-300
                "
              >
                Connect

                <img
                  src={assets.arrow_icon}
                  alt=""
                  className="w-4"
                />
              </button>
            </motion.a>

            <img
              src={
                theme === "dark"
                  ? assets.menu_icon_dark
                  : assets.menu_icon
              }
              alt=""
              onClick={() => setSidebarOpen(true)}
              className="w-7 sm:hidden cursor-pointer"
            />
          </div>
        </nav>

        <div
          className={`
          fixed top-0 right-0 h-screen w-72
          bg-white/20 dark:bg-black/50
          backdrop-blur-2xl
          border-l border-white/10
          shadow-2xl
          z-50
          transform transition-transform duration-500
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <img
            src={assets.close_icon}
            alt=""
            onClick={() => setSidebarOpen(false)}
            className="w-5 absolute top-5 right-5 cursor-pointer invert dark:invert-0"
          />

          {/* Sidebar Links */}
          <div className="flex flex-col mt-24 px-8 gap-8">
            {navLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                onClick={() => setSidebarOpen(false)}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.95 }}
                className="
                text-lg font-medium
                hover:text-blue-500
                transition-all duration-300
                "
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </header>
    </motion.div>
  );
};

export default Navbar;