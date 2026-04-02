"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  stack: string[];
  github: string;
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
    title: "CineStream Movie Discovery Platform",
    description:
      "A modern movie streaming UI and discovery app. Features smart search, paginated results, trailers, and personal watchlists using local storage.",
    stack: ["React.js", "Tailwind CSS", "OMDb API"],
    github: "https://github.com/Nadeesh-Malaka",
  },
  {
    title: "QR Based Bus Ticket Reservation System",
    description:
      "A digital paperless bus ticket booking system. Generates verifiable QR code E-Tickets for passengers and includes a comprehensive Admin portal.",
    stack: ["React.js", "PHP", "MySQL"],
    github: "https://github.com/Nadeesh-Malaka",
  },
  {
    title: "Knowledge Sharing Platform",
    description:
      "A knowledge-exchange platform with discussion forums, Q&A sessions, and resource libraries for diverse user groups.",
    stack: ["HTML", "CSS", "Laravel", "MySQL"],
    github: "https://github.com/Nadeesh-Malaka",
  },
  {
    title: "Master Education Web Platform",
    description:
      "An education platform featuring lectures, quizzes, assignments, and discussion forums to enhance the learning experience.",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
    github: "https://github.com/Nadeesh-Malaka",
  },
  {
    title: "Python YouTube Downloader",
    description:
      "A powerful YouTube video and audio downloader with both CLI and a Desktop GUI interface. Supports full playlist downloads and custom format selection.",
    stack: ["Python", "yt-dlp"],
    github: "https://github.com/Nadeesh-Malaka",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl border border-white/8 p-6 card-hover group h-full flex flex-col"
    >
      <div className="flex flex-1 flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="flex-1 font-heading font-bold text-lg text-white group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>

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
        </div>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

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
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
        
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => setShowAll((value) => !value)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/25 hover:border-blue-400/50 text-blue-300 hover:text-blue-200 text-sm font-semibold transition-all duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-center mt-8"
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
