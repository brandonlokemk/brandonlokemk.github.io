import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { FaPython, FaJsSquare, FaJava } from "react-icons/fa"; // Icons from react-icons
import { BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { motion } from "motion/react";

export default function SkillBubbles() {
  const skills = [
    { name: "Python", icon: <FaPython size={36}/>, color: "bg-blue-900"},
    { name: "JavaScript", icon: <FaJsSquare size={36}/>, color: "bg-yellow-500" },
    { name: "TypeScript", icon: <BiLogoTypescript size={40}/>, color: "bg-blue-500" },
    { name: "Java", icon: <FaJava size={36}/>, color: "bg-red-500" },
    // { name: "HTML", icon: <FaHtml5 size={36}/>, color: "bg-orange-400" },
    // { name: "CSS", icon: <IoLogoCss3 size={36}/>, color: "bg-blue-400" },
    { name: "SQL", icon: <BsFiletypeSql size={36} className="fill-orange-400"/>, color: "bg-white" }
  ];
  return (
    <TooltipProvider delayDuration={100} >
      <div className="flex justify-center gap-4 flex-wrap p-4">
        {skills.map((skill, index) => (
            <Tooltip key={index}>
              <motion.div
                whileHover={{ scale: 1.15 }}>
                <TooltipTrigger>
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl text-white ${skill.color} transform transition-transform duration-300`}
                    >
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <TooltipArrow/>
                  <p>{skill.name}</p>
                </TooltipContent>
              </motion.div>
            </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
