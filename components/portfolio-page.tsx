"use client";

import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { navItems, projects, skills, socialLinks } from "../data/portfolio";
import { ThemeToggle } from "./theme-toggle";

const stats = [
  { value: "4+", label: "Projects shipped" },
  { value: "3+", label: "Years learning" },
  { value: "99%", label: "Focus on quality" },
] as const;

export function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-(--bg) text-(--text) transition-colors duration-200">
      <nav className="sticky top-0 z-50 border-b border-(--border) bg-(--bg)/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <a
            href="#top"
            className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-(--border) bg-(--card-bg) shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
          >
            <Image
              src="/mylogo.png"
              alt="Riman Rabidas"
              width={44}
              height={44}
              priority
              className="h-full w-full object-cover"
            />
          </a>

          <div className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-(--muted) transition-colors duration-200 hover:text-(--text)"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              title={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--card-bg) text-(--text) transition-colors duration-200 hover:bg-(--card-hover) md:hidden"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="container border-t border-(--border) py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-(--muted)">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-colors hover:text-(--text)"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div id="top" className="container">
        <section id="about" className="section scroll-mt-24 pt-20 sm:pt-24">
          <div className="glass-card mb-8 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-[0.18em] uppercase text-(--muted)">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Available for freelance work
          </div>

          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-(--border) bg-(--card-bg) p-1 shadow-[0_16px_40px_rgba(15,23,42,0.25)]">
              <Image
                src="/riman.jpg"
                alt="Riman Rabidas"
                width={64}
                height={64}
                priority
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-(--text)">Riman Rabidas</p>
              <p className="text-sm text-(--muted)">
                Full-Stack Developer • India
              </p>
            </div>
          </div>

          <h1 className="max-w-3xl text-4xl font-black tracking-[-0.06em] sm:text-6xl">
            I build useful products from{" "}
            <span className="gradient-text">idea to deployment.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted)">
            I&apos;m a BCA student and developer focused on clean interfaces,
            practical web applications and scalable full-stack solutions. My
            current stack is Next.js, TypeScript and Tailwind CSS.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:rimanblp@gmail.com"
              className="cta-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(59,130,246,0.35)]"
            >
              Contact me
            </a>
            <a
              href="/RIMANFINALRESUME.pdf"
              download
              className="cta-secondary inline-flex items-center justify-center gap-2 rounded-full border border-(--border) bg-(--card-bg) px-5 py-2.5 text-sm font-medium text-(--text)"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-4">
                <div className="text-2xl font-bold text-(--text)">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-(--muted)">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section scroll-mt-24">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="shadow-xs text-sm text-(--muted)">Selected work</p>
              <h2 className="mt-1 text-2xl font-bold">Projects</h2>
            </div>
            <span className="text-sm text-(--muted)">
              {projects.length} projects
            </span>
          </div>

          <div className="grid-auto-fit grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="project-card glass-card group rounded-3xl p-5 transition-all duration-300"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm text-(--muted)">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--chip-bg)">
                    <ArrowUpRight size={17} className="text-(--muted)" />
                  </span>
                </div>

              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={112}
                priority
                className="mb-5 h-45 rounded-2xl bg-linear-to-br from-blue-500/20 via-indigo-500/10 to-transparent p-2 ring-1 ring-white/5"
              />

                

                <h3 className="text-xl font-semibold text-(--text)">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-(--muted)">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag rounded-full border border-(--border) bg-(--chip-bg) px-2.5 py-1 text-xs text-(--text)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section scroll-mt-24">
          <p className="shadow-xs text-sm text-(--muted)">What I use</p>
          <h2 className="mt-1 text-2xl font-bold">Tech stack</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-(--border) bg-(--chip-bg) px-3 py-2 text-sm text-(--text) shadow-[0_10px_20px_rgba(15,23,42,0.08)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="education" className="section scroll-mt-24">
          <p className="shadow-xs text-sm text-(--muted)">Background</p>
          <h2 className="mt-1 text-2xl font-bold">Education</h2>
          <div className="mt-6 space-y-3">
            <div className="glass-card rounded-2xl p-5">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-medium text-(--text)">
                    Kotibarsha Institute of Technology and Management 202
                  </h3>
                  <p className="mt-1 text-sm text-(--muted)">
                    Bachelor of Computer Applications (BCA)
                  </p>
                </div>
                <span className="text-sm text-(--muted)">2023–2027</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-medium text-(--text)">
                    West Bengal Board Of Higher Secondary Education
                  </h3>
                  <p className="mt-1 text-sm text-(--muted)">
                    Higher Secondary / Class 12
                  </p>
                </div>
                <span className="text-sm text-(--muted)">2022–2023</span>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-medium text-(--text)">
                    West Bengal Board Of Secondary Education
                  </h3>
                  <p className="mt-1 text-sm text-(--muted)">
                    Secondary / Class 10
                  </p>
                </div>
                <span className="text-sm text-(--muted)">2020–2021</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section scroll-mt-24 pb-24">
          <div className="glass-card rounded-3xl p-7 sm:p-10">
            <p className="shadow-xs text-sm text-(--muted)">Let&apos;s connect</p>
            <h2 className="mt-2 text-3xl font-bold">
              Have a project or opportunity?
            </h2>
            <p className="mt-3 max-w-xl text-(--muted)">
              I&apos;m open to freelance work, internships and interesting
              web-development projects.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon =
                  item.icon === "mail"
                    ? Mail
                    : item.icon === "github"
                      ? Github : item.icon === "linkedin"
                        ? Linkedin : item.icon === "twitter"? X : Mail;
                   

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card-hover) px-4 py-2 text-sm font-medium text-(--text) transition-colors duration-200 hover:bg-(--chip-bg)"
                  >
                    <Icon size={16} />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <footer className="w-full h-fit border-t border-(--border) py-8">
        <div className="container flex flex-col justify-between items-center gap-3 text-sm text-(--muted) sm:flex-row">
          <span>© 2026 Riman Rabidas</span>
        </div>
      </footer>
    </main>
  );
}
