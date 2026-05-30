import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const Contactus = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "01ca21a7-62ba-4a30-967a-23e4263689a6"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission");
        event.target.reset();
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  const inputClass =
    "w-full bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500";

  const containerClass =
    "mt-2 flex items-center gap-3 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-white/5 transition-all duration-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20";

  return (
    <section
      id="contact-us"
      className="flex flex-col items-center px-4 sm:px-12 xl:px-24 py-24 text-gray-800 dark:text-white"
    >
      <Title
        title="Reach Out To Us"
        desc="From strategy to execution, we craft digital solutions that move your business forward"
      />

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 w-full max-w-2xl space-y-6"
      >
        {/* NAME */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Name
          </label>

          <div className={containerClass}>
            <img
              src={assets.person_icon}
              alt=""
              className="w-5 h-5"
            />

            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className={inputClass}
            />
          </div>
        </motion.div>

        {/* EMAIL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email ID
          </label>

          <div className={containerClass}>
            <img
              src={assets.email_icon}
              alt=""
              className="w-5 h-5"
            />

            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className={inputClass}
            />
          </div>
        </motion.div>

        {/* MESSAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>

          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
            className="
            mt-2
            w-full
            border border-gray-300
            dark:border-gray-600
            rounded-xl
            p-4
            text-sm
            bg-white
            dark:bg-white/5
            outline-none
            text-gray-900
            dark:text-white
            placeholder-gray-400
            dark:placeholder-gray-500
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-500/20
            resize-none
            transition-all duration-300
            "
          />
        </motion.div>

        {/* BUTTON */}
        <motion.button
          type="submit"
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
          flex items-center justify-center gap-2
          mx-auto
          px-7 py-3
          rounded-xl
          bg-linear-to-r
          from-blue-600
          to-indigo-600
          hover:from-indigo-600
          hover:to-blue-600
          text-white
          text-sm
          font-medium
          shadow-lg
          shadow-blue-500/20
          transition-all duration-300
          "
        >
          Submit

          <img
            src={assets.arrow_icon}
            alt=""
            className="w-4 h-4"
          />
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contactus;