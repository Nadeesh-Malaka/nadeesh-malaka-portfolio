"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiMail, FiArrowRight, FiYoutube } from "react-icons/fi";

const typingPhrases = [
  "Software Engineer",
  "Full Stack Developer",
  "QA Enthusiast",
  "Tech Blogger",
  "Content Creator",

];

function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingPhrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % typingPhrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <span className="gradient-text font-heading font-bold">
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}

export default function Hero() {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] orb pointer-events-none" />
      <div
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] orb pointer-events-none"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] orb pointer-events-none"
        style={{ animationDelay: "6s" }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Nadeesh</span>
              <br />
              <span className="text-white">Malaka</span>
            </motion.h1>

            {/* Typing text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="text-xl sm:text-2xl font-heading min-h-[2rem] mb-4"
            >
              <TypingEffect />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building scalable web applications with modern technologies.
              <br />
              <span className="text-slate-500 text-sm font-mono">
                Colombo, Sri Lanka 🇱🇰
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                View Projects <FiArrowRight size={16} />
              </motion.a>

              <motion.a
                href="/Nadeesh Malaka CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600/50 hover:border-blue-500 text-blue-400 hover:text-blue-300 font-semibold rounded-xl transition-all duration-300 hover:bg-blue-600/10"
              >
                <FiDownload size={16} /> Download CV
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5"
              >
                <FiMail size={16} /> Contact Me
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              {[
                { href: "https://github.com/Nadeesh-Malaka", icon: FiGithub, label: "GitHub" },
                { href: "https://www.linkedin.com/in/nadeesh-chathuranga", icon: FiLinkedin, label: "LinkedIn" },
                { href: "mailto:nadeeshmalaka50@gmail.com", icon: FiMail, label: "Email" },
                { href: "https://www.youtube.com/@NadeeshCreation", icon: FiYoutube, label: "YouTube" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-blue-600/40 hover:bg-blue-600/10 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative animate-float">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-500/40 blur-xl" />

              {/* Animated border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-600 p-[2px]"
                style={{ borderRadius: "50%" }}
              />

              {/* Profile image container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[#0a0f1e] glow-blue">
                <Image
                  src="/profile.jpg"
                  alt="Nadeesh Malaka Chathuranga"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 224px, 288px"
                />
              </div>

              {/* Floating status badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 glass rounded-full border border-green-500/30 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-green-300 whitespace-nowrap">
                  Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs text-slate-500 font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
