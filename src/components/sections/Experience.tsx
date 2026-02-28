import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    period: "2024 – Present",
    achievements: [
      "Built and maintained reusable component libraries used across 15+ projects, reducing development time by 30%",
      "Optimized rendering performance through memoization, virtualization, and code splitting, achieving consistent 60fps",
      "Integrated RESTful APIs with Axios and built custom hooks for data fetching, caching, and error handling",
      "Improved codebase maintainability by enforcing TypeScript strict mode, ESLint rules, and component documentation",
      "Collaborated with designers to implement pixel-perfect, responsive UIs following accessibility best practices",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="section-label">Experience</p>
      <h2 className="section-title">Professional Journey</h2>
    </motion.div>

    <div className="mt-12 space-y-8">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card relative pl-12"
        >
          <div className="absolute left-5 top-7 flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Briefcase size={16} />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
            <span className="rounded-lg bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
              {exp.period}
            </span>
          </div>
          <ul className="mt-4 space-y-3">
            {exp.achievements.map((a, j) => (
              <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
