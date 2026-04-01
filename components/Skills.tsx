"use client";

import type { ComponentType } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiApachenetbeanside,
  SiBootstrap,
  SiClaude,
  SiCss,
  SiDjango,
  SiEclipseide,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiHtml5,
  SiJira,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSelenium,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { FaBug, FaCode, FaRobot, FaWindows } from "react-icons/fa6";
import { FiDatabase, FiFolder, FiLayers } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";

interface SkillItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

interface SkillGroup {
  category: string;
  icon: ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: SiReact,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    icon: SiNodedotjs,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Laravel", icon: SiLaravel },
      { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    category: "Databases",
    icon: FiDatabase,
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Database Design", icon: FiDatabase },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: FiFolder,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "NetBeans", icon: SiApachenetbeanside },
      { name: "Eclipse", icon: SiEclipseide },
      { name: "JIRA", icon: SiJira },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    category: "Testing",
    icon: FaBug,
    skills: [
      { name: "Selenium IDE", icon: SiSelenium },
      { name: "Bug Documentation", icon: FaBug },
    ],
  },
  {
    category: "AI Tools",
    icon: FaRobot,
    skills: [
      { name: "Claude AI", icon: SiClaude },
      { name: "ChatGPT", icon: FaRobot },
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "Cursor AI", icon: FiLayers },
      { name: "V0.dev", icon: FiLayers },
      { name: "Bolt.new", icon: FaRobot },
      { name: "Prompt Engineering", icon: FaCode },
    ],
  },
  {
    category: "Operating Systems",
    icon: FaWindows,
    skills: [
      { name: "Linux", icon: SiLinux },
      { name: "Windows", icon: FaWindows },
    ],
  },
];

function SkillBadge({ item, delay }: { item: SkillItem; delay: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.08 }}
      whileTap={{ scale: 0.98 }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-full bg-cyan-400/0 blur-xl transition-all duration-300 group-hover:bg-cyan-400/25" />
      <div className="relative flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-[0_10px_28px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-300/60 group-hover:bg-slate-950/80 group-hover:text-white group-hover:shadow-[0_14px_36px_rgba(6,182,212,0.28)]">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-cyan-300 transition-all duration-300 group-hover:bg-cyan-400/15 group-hover:text-cyan-200">
          <Icon className="h-4 w-4" />
        </span>
        <span className="whitespace-nowrap tracking-tight">{item.name}</span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-mono text-blue-400">02. What I Know</p>
          <h2 className="font-heading text-4xl font-black text-white md:text-5xl">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
                className="glass rounded-[1.75rem] p-6 card-hover"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.12)]">
                    <GroupIcon className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-base font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((item, skillIdx) => (
                    <SkillBadge
                      key={item.name}
                      item={item}
                      delay={groupIdx * 0.08 + skillIdx * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
