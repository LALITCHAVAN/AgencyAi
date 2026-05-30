import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Ourwork = () => {
  const workData = [
    {
      title: "Mobile App Marketing",
      description:
        "We create powerful mobile marketing strategies that increase installs, boost engagement, and build strong user retention.",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard Management",
      description:
        "We design smart dashboards that turn complex data into simple, actionable insights for better business decisions.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness App Promotion",
      description:
        "We run targeted fitness app campaigns that improve visibility, attract users, and accelerate brand growth.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <section
    
      id="our-work"
      className="relative px-4 sm:px-12 xl:px-24 py-24"
    >
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Title
          title="Our Latest Work"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
        {workData.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-[30px]

            bg-white/70
            dark:bg-[#111827]/70

            backdrop-blur-xl

            border border-gray-200
            dark:border-white/10

            shadow-lg
            hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]

            transition-all
            duration-500
            "
          >
            {/* Animated Top Line */}
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
            <div className="p-3 pb-0">
              <img
                src={work.image}
                alt={work.title}
                className="
                w-full
                h-56
                object-cover
                rounded-2xl
                "
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <span
                className="
                inline-flex
                items-center

                px-3 py-1
                rounded-full

                text-xs
                font-medium

                bg-indigo-500/10
                text-indigo-600
                dark:text-indigo-400
                "
              >
                Featured Project
              </span>

              <h3
                className="
                mt-4
                text-xl
                font-bold
                text-gray-900
                dark:text-white
                "
              >
                {work.title}
              </h3>

              <p
                className="
                mt-3
                text-sm
                leading-7
                text-gray-600
                dark:text-gray-300
                "
              >
                {work.description}
              </p>

              <button
                className="
                mt-5
                flex items-center gap-2

                font-medium

                text-indigo-600
                dark:text-indigo-400
                "
              >
                View Project

                <span
                  className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Ourwork;