import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Layout, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "IT Student",
      description: "Pursuing Information Technology with focus on practical skills",
    },
    {
      icon: Layout,
      title: "Web Systems",
      description: "Building responsive and functional web applications",
    },
    {
      icon: Database,
      title: "Databases",
      description: "Designing efficient database schemas and queries",
    },
    {
      icon: Sparkles,
      title: "Capstone Projects",
      description: "Real-world systems for academic and community use",
    },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Passionate About Building Digital Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            I'm an Information Technology student with a deep interest in creating 
            innovative web systems and applications. My journey involves working on 
            capstone projects that solve real-world problems, from academic systems 
            to community platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
