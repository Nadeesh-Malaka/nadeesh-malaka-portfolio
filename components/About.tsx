"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "" }: { target: number | string; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="text-5xl font-heading font-black gradient-text"
    >
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {target}{suffix}
        </motion.span>
      ) : "0"}
    </motion.span>
  );
}

const stats = [
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Projects Built", value: 15, suffix: "+" },
  { label: "Industry Roles", value: 2, suffix: "" },
  // { label: "Honors Candidate", value: "1st Class", suffix: "" },
];

const extracurricular = [
  "Event Coordinator, FOSS Community, Uva Wellassa University (2024/2025)",
  "Volunteer, IEEE Opening Day (2024)",
  "Organizing Committee Member, Leo Chelonian Trails Project (2024)",
  "Member: Gavel Club · Microsoft Club · Nature Club",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 card-hover">
              <p className="text-slate-300 leading-relaxed text-base">
                Final-year ICT undergraduate at{" "}
                <span className="text-blue-400 font-semibold">Uva Wellassa University</span>{" "}
                specializing in Software Technology (Current{" "}
                GPA: 3.9). With solid
                industry experience as an{" "}
                <span className="text-blue-400 font-semibold">Associate Software Engineer</span>,
                I have built and maintained full-stack web applications,
                participated in code reviews, and coordinated development
                workflows.
              </p>
              <p className="text-slate-400 leading-relaxed text-base mt-4">
                Passionate about clean code, scalable architecture, and
                continuous learning. I enjoy turning complex problems into
                elegant, user-friendly solutions.
              </p>
            </div>

            {/* Extracurricular */}
            <div className="glass rounded-2xl p-8 card-hover">
              <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400">✦</span> Community & Clubs
              </h3>
              <ul className="space-y-3">
                {extracurricular.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 text-slate-400 text-sm"
                  >
                    <span className="text-blue-500 mt-1 shrink-0">›</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="glass rounded-2xl p-6 text-center card-hover group"
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="text-slate-400 text-sm mt-2 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact info */}
            <div className="glass rounded-2xl p-8 space-y-4 card-hover">
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                Quick Info
              </h3>
              {[
                { label: "Location", value: "Colombo, Sri Lanka 🇱🇰" },
                { label: "University", value: "Uva Wellassa University" },
                { label: "Degree", value: "B.ICT (Hons) : Software Technology" },
                { label: "Email", value: "nadeeshmalaka50@gmail.com" },
                { label: "Phone", value: "+94 77 490 2773" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 text-sm md:grid md:grid-cols-[6rem_minmax(0,1fr)] md:items-start md:gap-3">
                  <span className="text-blue-400 shrink-0 w-24 font-medium">{item.label}</span>
                  <span className="text-slate-300 break-words">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
