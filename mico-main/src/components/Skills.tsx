import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Backend",
      skills: ["PHP", "Python (Flask)", "MySQL"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Frameworks & Tools",
      skills: ["Laravel", "Flutter", "Firebase", "XAMPP"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Other Skills",
      skills: ["UI/UX Design", "System Documentation", "Data Visualization"],
      color: "from-orange-500/20 to-amber-500/20",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${category.color} border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
