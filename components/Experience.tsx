"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Apps Technologies Pvt Ltd",
    location: "Colombo, Sri Lanka",
    roles: [
      {
        title: "Associate Software Engineer",
        type: "Remote",
        period: "Sep 2025 – Present",
        bullets: [
          "Coordinate development timelines, task assignments, and team communications",
          "Manage code review processes for pull requests, maintaining code quality standards",
          "Develop and maintain full-stack web applications with best practices in software architecture",
          "Implement testing strategies and comprehensive documentation",
        ],
      },
      {
        title: "Software Engineer Intern",
        type: "Hybrid",
        period: "May 2025 – Sep 2025",
        bullets: [
          "Developed full-stack features for the SLICM enterprise system using Laravel, Blade, and MySQL",
          "Reduced code duplication by 40% through reusable MVC components",
          "Optimized database queries through efficient data modeling and indexing",
          "Conducted QA testing, bug tracking, and issue resolution",
          "Collaborated via Git with code reviews and PR workflows",
        ],
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute right-1/4 top-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[80px]" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-blue-400 text-sm mb-3">04. Work History</p>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-transparent origin-top hidden sm:block"
          />

          {experiences.map((exp, expIdx) => (
            <div key={exp.company} className="sm:pl-16">
              {/* Company header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative mb-8"
              >
                {/* Dot */}
                <div className="absolute -left-[3.82rem] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#0a0f1e] glow-blue-sm hidden sm:block" />

                <div className="glass rounded-2xl p-5">
                  <h3 className="font-heading text-xl font-black text-white">
                    {exp.company}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">{exp.location}</p>
                </div>
              </motion.div>

              {/* Roles */}
              <div className="space-y-6 mb-10">
                {exp.roles.map((role, roleIdx) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + roleIdx * 0.2 }}
                    className="relative"
                  >
                    {/* Small dot */}
                    <div className="absolute -left-[3.6rem] top-4 w-2.5 h-2.5 rounded-full bg-cyan-500/70 border-2 border-[#0a0f1e] hidden sm:block" />

                    <div className="glass rounded-2xl p-6 card-hover">
                      {/* Role header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h4 className="font-heading font-bold text-white text-base">
                            {role.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 text-xs bg-blue-600/20 text-blue-300 rounded font-mono">
                              {role.type}
                            </span>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-slate-400 whitespace-nowrap">
                          {role.period}
                        </span>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2">
                        {role.bullets.map((bullet, bi) => (
                          <motion.li
                            key={bi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.5 + roleIdx * 0.2 + bi * 0.05 }}
                            className="flex items-start gap-2 text-slate-400 text-sm"
                          >
                            <span className="text-blue-500 mt-1.5 shrink-0 text-xs">◆</span>
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
