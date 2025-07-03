// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "motion/react";
import { Project } from "@/app/projects/page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { ExternalLink, Code } from "lucide-react";
const ProjectCard = ({project} : {project: Project}) => {
  const { isDark } = useTheme();
  return (
    <Card className="group overflow-hidden duration-300 transition-shadow ease-in-out cursor-pointer">
      {/* Gradient background */}
      <div className={`${isDark ? "bg-blue-600/40" : "bg-slate-300"}`}>
        <div
          className={`flex flex-col h-full ${
            isDark ? "bg-black opacity-80" : "bg-white"
          } justify-center items-start p-8 min-h-72`}
        >
          <div
            className={`w-16 h-16 text-white rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6`}
          >
            {project.icon || <Code className="w-8 h-8" />}
          </div>
          <CardHeader className="p-0">
            <CardTitle
              className={`${
                isDark ? "text-gray-100" : "text-black"
              } text-2xl font-bold mb-4`}
            >
              {project.title}
            </CardTitle>
            <CardDescription
              className={`${
                isDark ? "text-gray-300" : "text-black"
              } text-lg pb-6`}
            >
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className=" relative z-10 p-0">
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies?.map((tech: string, index: number) => (
                <motion.div key={index} whileHover={{ scale: 1.1 }}>
                  <Badge
                    key={index}
                    variant="outline"
                    className={`text-xs ${
                      isDark
                        ? "border-slate-200 text-slate-300 hover:bg-slate-700"
                        : "border-slate-700 text-slate-900 hover:bg-slate-200"
                    } transition-colors`}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              {project.liveUrl && (
                <a className="flex-1" href={`${project.liveUrl}`}>
                  <Button
                    size="sm"
                    className="gap-0 w-full flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a className="flex-1" href={`${project.githubUrl}`}>
                  <Button
                    size="sm"
                    variant="outline"
                    className={`flex gap-0 w-full ${
                      isDark
                        ? "border-slate-600 hover:bg-slate-400"
                        : "border-slate-300 hover:bg-slate-100"
                    } transition-colors`}
                  >
                    {/* <Github className="w-4 h-4 mr-2" /> */}
                    <div className="w-4 h-4 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </div>
                    Code
                  </Button>
                </a>
              )}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
