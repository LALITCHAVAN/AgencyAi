import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect and engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect and engage...",
      icon: assets.marketing_icon,
    },
    {
      title: "Content",
      description:
        "We turn bold ideas into powerful digital solutions that connect and engage...",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "We turn bold ideas into powerful digital solutions that connect and engage...",
      icon: assets.social_icon,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-12 lg:px-24 xl:px-32 overflow-hidden"
    >
      {/* Background Image */}
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={assets.bgImage2}
        alt=""
        className="absolute -top-10 -left-40 opacity-40 z-[-1] dark:hidden"
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Title
          title="How can we help?"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />
      </motion.div>

      {/* Cards */}
      <div
        className="
        grid grid-cols-1 md:grid-cols-2
        gap-8 mt-16
        "
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <ServiceCard
              service={service}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;