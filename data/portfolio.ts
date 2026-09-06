export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects = [
  {
    name: "Next-Exam",
    description:
      "A government-exam preparation platform with MCQ practice for GK, English, Reasoning and Math.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/nextExamApp.png",
  },
  {
    name: "Progoti",
    description:
      "An educational platform for West Bengal board students with MCQ tests, PYQs and mock tests.",
    tags: ["Next.js", "React", "Shadcn UI"],
    image: "/progotiApp.png",
  },
  {
    name: "YouTubeX",
    description:
      "Simple productivity tools for cleaning, organizing and preparing spreadsheet data.",
    tags: ["React", "Excel", "Automation"],
    image: "/youtubexApp.png",
  },
  {
    name: "ProWeather",
    description:
      "A weather forecasting app with a clean, modern interface and real-time updates.",
    tags: ["React", "Tailwind CSS", "OpenWeatherMap API"],
    image: "/weatherApp.png",
  },
] as const;

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Shadcn UI",
  "Git",
  "GitHub",
  "Vercel",
] as const;

export const socialLinks: Array<{
  label: string;
  href: string;
  icon: "mail" | "github" | "linkedin" | "twitter";
  external?: boolean;
}> = [
  {
    label: "Email",
    href: "mailto:rimanblp@gmail.com",
    icon: "mail",
    external: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/rimanrabidas",
    icon: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rimanrabidas/",
    icon: "linkedin",
    external: true,
  },
   {
    label: "Twitter",
    href: "https://x.com/rimanblp/",
    icon: "twitter",
    external: true,
  },
];
