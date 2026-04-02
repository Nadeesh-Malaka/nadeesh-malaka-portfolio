"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const certifications = [
  { name: "Web Design for Beginners", issuer: "University of Moratuwa", year: "2024" },
  { name: "Programming in Python", issuer: "University of Moratuwa", year: "2024" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2021" },
  { name: "GIT for Beginners", issuer: "KodeKloud", year: "2025" },
  { name: "UvaXtreme 1.1 Hackathon Participant", issuer: "IEEE Club, UWU", year: "2025" },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="absolute left-1/2 top-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* University */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl p-8 mb-8 card-hover"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
                  🎓
                </div>
                <div>
                  <h3 className="font-heading font-black text-white text-lg">
                    Uva Wellassa University
                  </h3>
                  <p className="text-slate-400 text-sm">Badulla, Sri Lanka</p>
                </div>
              </div>

              <p className="text-white font-semibold mb-1">
                Bachelor of ICT (Hons) — Specialization: Software Technology
              </p>
              <p className="text-slate-400 text-sm">2022 – 2026 (Expected)</p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
              <div className="px-4 py-2 rounded-xl bg-blue-600/15 border border-blue-600/25">
                <span className="font-heading font-black text-2xl gradient-text">3.9</span>
                <span className="text-slate-400 text-xs ml-1">/ 4.0 GPA</span>
              </div>
              <span className="font-mono text-xs text-slate-500">Final Year</span>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <h3 className="font-heading font-bold text-white text-xl mb-6 flex items-center gap-2">
            <span className="text-blue-400">✦</span> Certifications &amp; Achievements
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass rounded-xl p-5 flex items-start gap-4 card-hover"
              >
                <div className="shrink-0">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-600/20 flex items-center justify-center text-blue-400 font-bold text-sm font-mono">
                    {cert.year}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm leading-snug">
                    {cert.name}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
