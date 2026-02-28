import React, { useState } from "react";
import { motion } from "framer-motion";

// Type definitions
interface Skill {
  name: string;
  level?: number;
  icon?: string;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

// Full list of frontend skills with categories
const frontendSkillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Sass", level: 80 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 90 },
      { name: "Redux", level: 80 },
      { name: "Bootstrap CSS", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "MUI", level: 85 },
      { name: "Framer Motion", level: 75 },
      { name: "Web Socket", level: 70 },
      { name: "Axios", level: 85 },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Vite", level: 80 },
      { name: "Figma", level: 75 },
      { name: "Framer", level: 70 },
      { name: "Postman", level: 80 },
      { name: "ESLint / Prettier", level: 85 },
      { name: "Lovable AI", level: 65 },
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const skillVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: i * 0.02,
    },
  }),
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.95 },
};

// Main TechStack component
const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="section-container py-16 md:py-24">
      {/* Section header with enhanced animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
            My Expertise
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="section-title text-4xl md:text-5xl font-bold mb-4"
        >
          Technologies I Work With
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-foreground/60 max-w-2xl mx-auto"
        >
          A curated selection of tools and technologies I use to bring ideas to life
        </motion.p>
      </motion.div>

      {/* Skill groups with staggered animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-8 md:grid-cols-3"
      >
        {frontendSkillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            onHoverStart={() => setActiveCategory(group.category)}
            onHoverEnd={() => setActiveCategory(null)}
            className="relative group"
          >
            {/* Glass card with enhanced styling */}
            <div className="glass-card rounded-2xl p-6 shadow-lg border border-white/10 backdrop-blur-sm bg-white/5 dark:bg-black/20 transition-all duration-300 hover:shadow-xl hover:border-accent/30">
              
              {/* Category header with animated underline */}
              <div className="mb-6 relative">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent/80">
                  {group.category}
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: activeCategory === group.category ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-full"
                />
              </div>

              {/* Skills grid with staggered animation */}
              <motion.div
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    custom={index}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    whileTap="tap"
                    viewport={{ once: true }}
                    className="relative inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-2 text-sm font-medium transition-shadow cursor-default"
                    style={{
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    }}
                  >
                    {skill.name}
                    
                    {/* Optional skill level indicator */}
                    {skill.level && (
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-accent/30 rounded-full"
                      />
                    )}
                  </motion.span>
                ))}
              </motion.div>

              {/* Background gradient effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ zIndex: -1 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating particles effect (optional) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-accent/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;