import { motion } from "framer-motion";
import { Code2, Layers, Zap, GraduationCap, Calendar, MapPin } from "lucide-react";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Happy Clients" },
];

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Maintainable, well-documented component architecture" },
  { icon: Layers, title: "Scalable Apps", desc: "State management with Redux, modular design patterns" },
  { icon: Zap, title: "Performance", desc: "Optimized rendering, lazy loading, and fast TTI" },
];

const education = {
  degree: "Bachelor of Computer Science",
  gpa: "3.33",
  institution: "Helwan University",
  department: "College of Computers and Artificial Intelligence",
  period: "09/2019 - 06/2023",
  location: "Cairo, Egypt"
};

const About = () => (
  <section id="about" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="section-label">About Me</p>
      <h2 className="section-title">Building the Web, One Component at a Time</h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        I'm a frontend developer with 2 years of hands-on experience building scalable React applications. 
        I specialize in creating performant, accessible user interfaces backed by clean architecture, 
        RESTful API integration, and modern state management. Every line of code I write is driven by 
        user experience and engineering excellence.
      </p>
    </motion.div>

    {/* Stats */}
    <div className="mt-12 grid grid-cols-3 gap-4 md:max-w-md">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card text-center"
        >
          <p className="text-2xl font-bold text-gradient md:text-3xl">{s.value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
        </motion.div>
      ))}
    </div>

    {/* Education */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-16"
    >
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="text-accent" size={24} />
        <h3 className="font-display text-2xl font-semibold">Education</h3>
      </div>
      
      <div className="glass-card group relative overflow-hidden">
        {/* Decorative gradient line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-accent/40" />
        
        <div className="pl-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h4 className="font-display text-xl font-semibold">{education.degree}</h4>
              <p className="mt-1 text-lg text-accent">GPA: {education.gpa}</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-accent">
              <Calendar size={16} />
              <span>{education.period}</span>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <p className="text-foreground/90">{education.institution}</p>
            <p className="text-muted-foreground">{education.department}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} />
              <span>{education.location}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Highlights */}
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {highlights.map((h, i) => (
        <motion.div
          key={h.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card group cursor-default"
        >
          <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            <h.icon size={22} />
          </div>
          <h3 className="font-display text-lg font-semibold">{h.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default About;