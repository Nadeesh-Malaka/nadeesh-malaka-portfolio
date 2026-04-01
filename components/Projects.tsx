"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "SkillSwap Platform",
    description:
      "A web platform for seamless skill exchange with intelligent user matching. Features real-time chat, REST APIs, and secure authentication.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Nadeesh-Malaka",
  },
  {
    title: "Knowledge Sharing Platform",
    description:
      "A knowledge-exchange platform with discussion forums, Q&A sessions, and resource libraries for diverse user groups.",
    stack: ["HTML", "JavaScript", "CSS", "Bootstrap", "Laravel", "MySQL"],
    github: "https://github.com/Nadeesh-Malaka",
  },
  {
    title: "Master Education Web Platform",
    description:
      "An education platform featuring lectures, quizzes, assignments, and discussion forums to enhance the learning experience.",
    stack: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
    github: "https://github.com/Nadeesh-Malaka",
  },
  // Add more projects here
];

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass rounded-2xl p-6 flex flex-col gap-5 card-hover group h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="font-mono text-xs text-blue-400">Project {String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="font-heading font-bold text-lg text-white group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <div className="flex gap-3 shrink-0">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            aria-label={`${project.title} GitHub`}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-600/30 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300"
          >
            <FiGithub size={16} />
          </motion.a>
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              aria-label={`${project.title} Live Demo`}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-cyan-600/20 border border-white/10 hover:border-cyan-600/30 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
            >
              <FiExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-mono font-medium bg-blue-600/10 border border-blue-600/15 text-blue-300/80 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-blue-400 text-sm mb-3">03. What I&apos;ve Built</p>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Nadeesh-Malaka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-blue-600/40 rounded-xl text-slate-400 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-blue-600/5"
          >
            <FiGithub size={16} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
