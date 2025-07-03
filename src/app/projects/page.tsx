'use client';

import { useTheme } from "@/components/theme-provider";
import { motion } from "motion/react";
export type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  icon?: string;
};
import ProjectCard from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies and optimized for performance.",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    icon: "🛒",
  },
  {
    title: "E-Commerce as",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies and optimized for performance.",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    title: "E-asd Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies and optimized for performance.",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    icon: "🛒",
  },
    {
    title: "E-Comdasdmerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies and optimized for performance.",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    icon: "🛒",
  },
    {
    title: "E-Commaserce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies and optimized for performance.",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    icon: "🛒",
  },
  // { title: 'Project One', description: 'Description for project one', link: '#' },
  // { title: 'Project Two', description: 'Description for project two', link: '#' },
  // { title: 'Project Three', description: 'Description for project three', link: '#' },
  // { title: 'Project 2', description: 'Description for project three', link: '#' },
  // { title: 'Project Thqwer2qeqweee', description: 'Description for project three', link: '#' },
  // { title: 'Project Thr2wqeweqweqweqweqweqweqweqweqweqweqweee', description: 'Description for project three', link: '#' },
  // { title: 'Project Thasdr2ee', description: 'Description for project three', link: '#' },
  // { title: 'Project Thrdas2ee', description: 'Description for project three', link: '#' },
  // { title: 'Project Thdasr2ee', description: 'Description for project three', link: '#' },

  // { title: 'Project Thr2ee', description: 'Description for project three', link: '#' },
  // { title: 'Project Th3r2ee', description: 'Description for project three', link: '#' },
  // { title: 'Project Thr3ee', description: 'Description for project three', link: '#' },

  // { title: 'Project Th3ree', description: 'Description for project three', link: '#' },

  // { title: 'Project Thr1ee', description: 'Description for project three', link: '#' },
];

export default function Projects() {
  const { isDark } = useTheme();
  return (
    <section
      id="projects"
      className="pt-5 lg:pt-20 pb-20 px-8 lg:h-[100vh] sm:h-[92vh]"
    >
      <h2
        className={`text-center text-3xl font-bold mb-3 ${
          isDark ? "text-dark-text" : "text-light-text"
        }`}
      >
        My Projects
      </h2>
      {/* <div className="flex bg-dark-navbar w-full justify-center items-center min-h-10 rounded-md">
            Section in progress!
            </div> */}
      <div className={`border ${isDark ? 'border-slate-600' : 'border-black'} rounded-xl grid gap-5 p-4 md:grid-cols-1 lg:grid-cols-3 overflow-y-auto h-full`}>
        {projects.map((project: Project) => (
          <motion.div
            key={project.title}
            className={`h-fit w-fit rounded-xl shadow-lg hover:shadow-2xl`}
            whileHover={{ translateY: "-5px" }}
            transition={{ duration: 0.2 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
