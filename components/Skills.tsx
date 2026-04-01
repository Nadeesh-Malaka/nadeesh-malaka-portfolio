"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillGroup {
  category: string;
  emoji: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    emoji: "🎨",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    skills: ["Node.js", "Express.js", "Laravel", "Django", "FastAPI"],
  },
  {
    category: "Databases",
    emoji: "🗄️",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & DevOps",
    emoji: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "NetBeans", "Eclipse", "JIRA", "Postman"],
  },
  {
    category: "Testing",
    emoji: "🧪",
    skills: ["Selenium IDE", "Bug Documentation"],
  },
  {
    category: "AI Tools",
    emoji: "🤖",
    skills: ["Claude AI", "ChatGPT", "GitHub Copilot", "Cursor AI", "V0.dev", "Bolt.new", "Prompt Engineering"],
  },
  {
    category: "Operating Systems",
    emoji: "💻",
    skills: ["Linux", "Windows"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-blue-400 text-sm mb-3">02. What I Know</p>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.emoji}</span>
                <h3 className="font-heading font-bold text-white text-base">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: groupIdx * 0.1 + skillIdx * 0.05,
                    }}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 0 15px rgba(37,99,235,0.4)",
                    }}
                    className="px-3 py-1.5 text-xs font-semibold font-mono bg-blue-600/10 border border-blue-600/20 text-blue-300 rounded-lg cursor-default hover:bg-blue-600/20 hover:border-blue-500/40 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
