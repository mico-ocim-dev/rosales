import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      icon: GraduationCap,
      level: "Tertiary Education",
      institution: "Laguna State Polytechnic University",
      degree: "Bachelor of Science in Information Technology",
      description: "Currently pursuing BSIT with focus on web development, system design, and database management.",
      status: "Current",
    },
    {
      icon: School,
      level: "Secondary Education",
      institution: "Liceo De Victoria (SHS) • Nanhaya National High School (JHS)",
      degree: "Senior High School – GAS (General Academic Strand)",
      description: "Completed the General Academic Strand, developing strong analytical and communication skills as foundation for higher education.",
      status: "Completed",
    },
    {
      icon: BookOpen,
      level: "Primary Education",
      institution: "Pagalangan Elementary School",
      degree: "Elementary Education",
      description: "Laid the groundwork for academic excellence and discovered interest in technology.",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.level}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <edu.icon className="w-8 h-8 text-primary" />
              </div>

              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
                  edu.status === "Current"
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {edu.status}
              </span>

              <h3 className="font-semibold text-lg mb-2">{edu.level}</h3>
              <p className="text-primary text-sm font-medium mb-2">{edu.institution}</p>
              <p className="text-muted-foreground text-xs mb-3">{edu.degree}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
