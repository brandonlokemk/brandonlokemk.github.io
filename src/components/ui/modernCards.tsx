import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';

// const ProjectCard = ({ project }) => {
//   return (
//     <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
//       {/* Project image/icon area */}
//       <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-black/20" />
//         <div className="relative z-10 text-white text-6xl font-bold opacity-80 group-hover:scale-110 transition-transform duration-300">
//           {project.icon || project.title.charAt(0)}
//         </div>
        
//         {/* Floating elements */}
//         <div className="absolute top-4 right-4 flex gap-2">
//           {project.featured && (
//             <Badge className="bg-yellow-500/90 text-yellow-900 border-0">
//               <Star className="w-3 h-3 mr-1" />
//               Featured
//             </Badge>
//           )}
//           {project.status && (
//             <Badge variant="secondary" className="bg-white/20 text-white border-0">
//               {project.status}
//             </Badge>
//           )}
//         </div>
//       </div>

//       <CardHeader className="relative z-10">
//         <div className="flex items-start justify-between">
//           <div className="flex-1">
//             <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//               {project.title}
//             </CardTitle>
//             <CardDescription className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
//               {project.description}
//             </CardDescription>
//           </div>
//         </div>
        
//         {project.date && (
//           <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-3">
//             <Calendar className="w-4 h-4 mr-2" />
//             {project.date}
//           </div>
//         )}
//       </CardHeader>

//       <CardContent className="relative z-10">
//         {/* Tech stack */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {project.technologies?.map((tech, index) => (
//             <Badge
//               key={index}
//               variant="outline"
//               className="text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
//             >
//               {tech}
//             </Badge>
//           ))}
//         </div>

//         {/* Action buttons */}
//         <div className="flex gap-3">
//           {project.liveUrl && (
//             <Button
//               size="sm"
//               className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200"
//             >
//               <ExternalLink className="w-4 h-4 mr-2" />
//               Live Demo
//             </Button>
//           )}
//           {project.githubUrl && (
//             <Button
//               size="sm"
//               variant="outline"
//               className="flex-1 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//             >
//               <Github className="w-4 h-4 mr-2" />
//               Code
//             </Button>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

const ProjectCards = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies and optimized for performance.",
      technologies: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      date: "2024",
      status: "Live",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      icon: "🛒"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
      date: "2024",
      status: "Beta",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      icon: "📋"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with location-based forecasts, historical data visualization, and customizable widgets.",
      technologies: ["Vue.js", "D3.js", "Express", "OpenWeather API"],
      date: "2023",
      status: "Complete",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      icon: "🌤️"
    },
    {
      title: "AI Chat Interface",
      description: "A modern chat interface for AI conversations with message history, export functionality, and responsive design.",
      technologies: ["React", "Next.js", "OpenAI API", "Supabase"],
      date: "2024",
      status: "In Progress",
      githubUrl: "https://github.com/username/project",
      icon: "🤖"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
      date: "2024",
      status: "Live",
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      icon: "💼"
    },
    {
      title: "Data Visualization Tool",
      description: "An interactive data visualization platform for creating charts, graphs, and dashboards from various data sources.",
      technologies: ["D3.js", "React", "Python", "Flask", "PostgreSQL"],
      date: "2023",
      status: "Complete",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of projects I've built using modern web technologies. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Want to work together?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              I'm always interested in new opportunities and exciting projects.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;