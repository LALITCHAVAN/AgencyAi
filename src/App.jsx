import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Trustedby from "./Components/Trustedby";
import Services from "./Components/Services";
import Ourwork from "./Components/Ourwork";
import Teams from "./Components/Teams";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  // Custom Cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x +=
        (mouse.current.x - position.current.x) * 0.1;

      position.current.y +=
        (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(${mouse.current.x - 4}px,
          ${mouse.current.y - 4}px, 0)
        `;
      }

      if (outlineRef.current) {
        outlineRef.current.style.transform = `
          translate3d(${position.current.x - 16}px,
          ${position.current.y - 16}px, 0)
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="
      relative min-h-screen overflow-hidden
      bg-linear-to-br
      from-slate-50
      via-blue-50
      to-indigo-100
      dark:from-[#020617]
      dark:via-[#0f172a]
      dark:to-[#111827]
      text-gray-900 dark:text-white
      transition-all duration-500
      "
    >
      {/* Background Glow */}
      <div
        className="
        absolute -top-40 -left-40
        w-700px h-700px
        bg-blue-500/20
        dark:bg-blue-600/15
        rounded-full blur-[250px]
      "
      />

      <div
        className="
        absolute top-0 right-0
        w-700px h-700px
        bg-indigo-400/20
        dark:bg-indigo-600/15
        rounded-full blur-[250px]
      "
      />

      <div
        className="
        absolute bottom-0 left-1/2
        -translate-x-1/2
        w-800px h-800px
        bg-cyan-300/20
        dark:bg-cyan-500/10
        rounded-full blur-[300px]
      "
      />

      {/* Content */}
      <div className="relative z-10">
        <Toaster />

        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <Trustedby />
        <Services />
        <Ourwork />
        <Teams />
        <Contactus />
        <Footer theme={theme} />
      </div>

      {/* Cursor Outline */}
      <div
        ref={outlineRef}
        className="
        fixed top-0 left-0
        w-8 h-8
        rounded-full
        border-2 border-blue-500
        pointer-events-none
        z-9999
      "
      />

      {/* Cursor Dot */}
      <div
        ref={dotRef}
        className="
        fixed top-0 left-0
        w-2 h-2
        rounded-full
        bg-blue-500
        pointer-events-none
        z-9999
      "
      />
    </div>
  );
};

export default App;