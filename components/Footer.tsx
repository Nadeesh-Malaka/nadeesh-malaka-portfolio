"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { SiMedium } from "react-icons/si";

const socials = [
  { icon: FiGithub, href: "https://github.com/Nadeesh-Malaka", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/nadeesh-chathuranga", label: "LinkedIn" },
  { icon: SiMedium, href: "https://medium.com/@nadeesh.Malaka", label: "Medium" },
  { icon: FiMail, href: "mailto:nadeeshmalaka50@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-heading text-lg font-black">
            <span className="gradient-text">Nadeesh Malaka</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-blue-600/15 border border-white/8 hover:border-blue-600/30 flex items-center justify-center text-slate-500 hover:text-blue-400 transition-all duration-300"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-xs font-mono flex items-center gap-1">
            Built with <FiHeart size={12} className="text-blue-500" /> using Next.js &amp; Tailwind
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-slate-600 text-xs font-mono">
            © {new Date().getFullYear()} Nadeesh Malaka Chathuranga · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
