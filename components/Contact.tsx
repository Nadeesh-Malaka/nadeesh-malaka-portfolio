"use client";

import { FormEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { SiMedium } from "react-icons/si";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "nadeeshmalaka50@gmail.com",
    href: "mailto:nadeeshmalaka50@gmail.com",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nadeesh-chathuranga",
    href: "https://www.linkedin.com/in/nadeesh-chathuranga",
    color: "from-blue-700 to-blue-500",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/Nadeesh-Malaka",
    href: "https://github.com/Nadeesh-Malaka",
    color: "from-slate-700 to-slate-500",
  },
  {
    icon: SiMedium,
    label: "Medium",
    value: "medium.com/@nadeesh.Malaka",
    href: "https://medium.com/@nadeesh.Malaka",
    color: "from-green-700 to-green-500",
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in all fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "cf3e3a8e-3bd3-43bd-9345-2c9a295ffb03",
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/60 focus:bg-white/[0.07] text-white placeholder-slate-500 outline-none transition-all duration-300 text-sm font-mono";

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-lg mx-auto">
            I am open to full-time roles, freelance projects, and collaborations.
            Feel free to reach out I&apos;d love to talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-5 glass rounded-2xl p-5 card-hover group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shrink-0 shadow-lg`}>
                  <link.icon size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors">
                    {link.label}
                  </p>
                  <p className="text-slate-400 text-xs truncate mt-0.5 font-mono">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-heading font-bold text-white text-lg mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5 font-mono">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (status !== "loading") setStatus("idle");
                  }}
                  className={inputClass}
                  disabled={status === "loading"}
                  name="name"
                  autoComplete="name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5 font-mono">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "loading") setStatus("idle");
                  }}
                  className={inputClass}
                  disabled={status === "loading"}
                  name="email"
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5 font-mono">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (status !== "loading") setStatus("idle");
                  }}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  disabled={status === "loading"}
                  name="message"
                />
              </div>

              {/* {status === "loading" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                >
                  <FiLoader size={16} className="animate-spin" />
                  Sending your message...
                </motion.div>
              )} */}

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                >
                  <FiCheckCircle size={16} />
                  Message sent successfully!
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  <FiAlertCircle size={16} />
                  {errorMsg}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                {status === "loading" ? (
                  <>
                    <FiLoader size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
