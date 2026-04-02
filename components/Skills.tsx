"use client";

import type { ComponentType, CSSProperties } from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSelenium,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

type IconType = ComponentType<{ className?: string; style?: CSSProperties }>;

interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

const skills: SkillItem[] = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "NetBeans", icon: SiApachenetbeanside, color: "#1B6AC6" },
  { name: "Eclipse", icon: SiEclipseide, color: "#2C2255" },
  { name: "JIRA", icon: SiJira, color: "#0052CC" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "Selenium IDE", icon: SiSelenium, color: "#43B02A" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Windows", icon: FaWindows, color: "#00A4EF" },
  { name: "Claude", icon: SiClaude, color: "#D97757" },
  { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
  { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#00D4FF" },
];

function splitRows(items: SkillItem[]) {
  const chunk = Math.ceil(items.length / 3);
  return [
    items.slice(0, chunk),
    items.slice(chunk, chunk * 2),
    items.slice(chunk * 2),
  ];
}

function SkillBadge({ skill }: { skill: SkillItem }) {
  const Icon = skill.icon;

  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-slate-900/40 px-4 py-2.5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-cyan-300/60 hover:bg-slate-900/70 hover:shadow-[0_0_28px_rgba(34,211,238,0.35)]">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/8">
        <Icon className="h-5 w-5" style={{ color: skill.color }} />
      </span>
      <span className="whitespace-nowrap text-sm font-medium text-slate-200">
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  speed,
  paused,
}: {
  items: SkillItem[];
  direction: "left" | "right";
  speed: string;
  paused: boolean;
}) {
  return (
    <div className="marquee-row relative overflow-hidden py-3">
      <div
        className="marquee-track flex w-max min-w-max items-center gap-4"
        style={{
          animation: `${direction === "left" ? "marqueeLeft" : "marqueeRight"} ${speed} linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[...items, ...items].map((skill, index) => (
          <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [paused, setPaused] = useState(false);
  const [rowOne, rowTwo, rowThree] = splitRows(skills);

  return (
    <section id="skills" ref={ref} className="relative overflow-hidden py-24 pb-32">
      <div className="absolute left-0 top-1/3 h-[480px] w-[480px] rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <h2 className="font-heading text-4xl font-black text-white md:text-5xl">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="space-y-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <MarqueeRow items={rowOne} direction="right" speed="28s" paused={paused} />
          <MarqueeRow items={rowTwo} direction="left" speed="32s" paused={paused} />
          <MarqueeRow items={rowThree} direction="right" speed="30s" paused={paused} />
        </motion.div>
      </div>
    </section>
  );
}
