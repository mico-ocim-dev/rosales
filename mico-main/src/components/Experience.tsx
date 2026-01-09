import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Code, Briefcase } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      icon: Users,
      title: "SK Councilor",
      description:
        "Serving the community through youth governance, organizing programs, and representing the voice of young constituents in local government.",
      period: "Community Service",
    },
    {
      icon: Code,
      title: "Academic Projects & Capstone Development",
      description:
        "Led the development of various academic systems including profiling tools, transparency platforms, and mobile applications as part of coursework requirements.",
      period: "Academic",
    },
    {
      icon: Briefcase,
      title: "Team-based System Development",
      description:
        "Collaborated with peers on multiple full-stack projects, handling both frontend UI/UX design and backend database architecture.",
      period: "Collaborative",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Roles & Responsibilities
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[15px] top-12 w-px h-full bg-border" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <exp.icon className="w-4 h-4 text-primary" />
              </div>

              <div className="glass-card rounded-xl p-6 ml-4 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <span className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
