import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import projectInventory from "@/assets/project-inventory.png";
import projectBlossom from "@/assets/project-blossom.png";
import projectKrokrok from "@/assets/project-krokrok.png";
import projectHealth from "@/assets/project-health.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      image: projectInventory,
      title: "Inventory Management System Pro",
      description:
        "A comprehensive inventory management system with dashboard analytics, sales tracking, and low stock alerts for BSXLD business.",
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
      color: "from-violet-500 to-purple-500",
    },
    {
      image: projectBlossom,
      title: "Ludovice's Blossom",
      description:
        "Inventory management system for a flower shop with product management, stock tracking, and analytics dashboard.",
      technologies: ["Python", "Flask", "MySQL", "Bootstrap"],
      color: "from-amber-500 to-yellow-500",
    },
    {
      image: projectKrokrok,
      title: "KrokRok",
      description:
        "Food delivery mobile application with menu browsing, cart management, and order tracking features.",
      technologies: ["Flutter", "Firebase", "Dart"],
      color: "from-orange-500 to-red-500",
    },
    {
      image: projectHealth,
      title: "Health Dashboard",
      description:
        "Medical dashboard application for tracking patient information, vital signs, appointments, and health records.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built, from inventory systems to mobile applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity z-10`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <Button variant="secondary" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="secondary" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-secondary rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
