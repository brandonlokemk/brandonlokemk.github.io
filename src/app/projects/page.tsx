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
  svgPath?: string;
};
import ProjectCard from "@/components/ProjectCard";
import projects from "@/app/projects/projects"; // Importing projects from the projects.ts file

// const projects: Project[] = [
//   {
//     title: "Osteoporosis Prediction from Retinal Fundus Images Using Machine Learning",
//     description:
//       "A research project focused on detecting osteoporosis using machine learning techniques applied to retinal fundus images. The project explores various algorithms and models to improve detection accuracy.",
//     technologies: ["Python", "PyTorch", "OpenCV"],
//     // liveUrl: "https://example.com",
//     // githubUrl: "https://github.com/username/project",
//     // icon: "👁️",
//   },
  // {
  //   title: "E-Commerce as",
  //   description:
  //     "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies and optimized for performance.",
  //   technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  // },
  // {
  //   title: "E-asd Platform",
  //   description:
  //     "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies and optimized for performance.",
  //   technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/username/project",
  //   icon: "🛒",
  // },
  //   {
  //   title: "E-Comdasdmerce Platform",
  //   description:
  //     "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies and optimized for performance.",
  //   technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/username/project",
  //   icon: "🛒",
  // },
  //   {
  //   title: "E-Commaserce Platform",
  //   description:
  //     "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies and optimized for performance.",
  //   technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/username/project",
  //   icon: "🛒",
  // }
// ];

export default function Projects() {
  const { isDark } = useTheme();
  return (
    <section
      id="projects"
      className="pt-5 lg:pt-20 pb-10 md:pb-20 px-8 lg:h-[100vh] sm:h-[92vh]"
    >
      <h2
        className={`text-center text-3xl font-bold mb-4 ${
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
            className={`flex shadow-lg hover:shadow-2xl`}
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
