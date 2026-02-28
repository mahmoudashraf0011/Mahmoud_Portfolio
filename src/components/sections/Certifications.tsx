import { motion } from "framer-motion";
import { Award, BadgeCheck, ScrollText, Code2, TestTube, ExternalLink, Shield } from "lucide-react";
import { useState } from "react";
import html from "../../assets/html.jpg";
import css from "../../assets/CSS.jpg";
import js from "../../assets/JavaScript.jpg";
import react from "../../assets/reactpng.png";
import testIntro from "../../assets/intro_test.jpg";
import testTeqnique from "../../assets/techniques_test.jpg";

interface Certification {
  title: string;
  organization: string;
  year: string;
  category?: string;
  image?: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    title: "HTML",
    organization: "SoloLearn",
    year: "2024",
    category: "Frontend",
    image: html,
    credentialUrl: "#"
  },
  {
    title: "CSS",
    organization: "SoloLearn",
    year: "2024",
    category: "Frontend",
    image: css,
    credentialUrl: "#"
  },
  {
    title: "JavaScript",
    organization: "SoloLearn",
    year: "2024",
    category: "Frontend",
    image: js,
    credentialUrl: "#"
  },
  {
    title: "REACT",
    organization: "M3aarf",
    year: "2024",
    category: "Frontend",
    image: react,
    credentialUrl: "#"
  },
  {
    title: "Introduction to Software Testing",
    organization: "MAHARATECH",
    year: "2024",
    category: "Testing",
    image: testIntro,
    credentialUrl: "#"
  },
  {
    title: "Effective Test Case and Bug Report Writing",
    organization: "MAHARATECH",
    year: "2024",
    category: "Testing",
    image: testTeqnique,
    credentialUrl: "#"
  },
];

// Helper function to get icon based on category
const getCategoryIcon = (category?: string) => {
  switch(category) {
    case 'Frontend':
      return <Code2 size={18} className="opacity-90" />;
    case 'Testing':
      return <TestTube size={18} className="opacity-90" />;
    default:
      return <Award size={18} className="opacity-90" />;
  }
};

// Helper function to get category colors (more subtle)
const getCategoryColors = (category?: string) => {
  switch(category) {
    case 'Frontend':
      return {
        badge: 'bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/10',
        icon: 'text-emerald-600 dark:text-emerald-400',
        light: 'from-emerald-500/5'
      };
    case 'Testing':
      return {
        badge: 'bg-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-500/10',
        icon: 'text-blue-600 dark:text-blue-400',
        light: 'from-blue-500/5'
      };
    default:
      return {
        badge: 'bg-accent/5 text-accent border-accent/10',
        icon: 'text-accent',
        light: 'from-accent/5'
      };
  }
};

const Certifications = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Split certifications into two rows of three
  const firstRow = certifications.slice(0, 3);
  const secondRow = certifications.slice(3, 6);

  return (
    <section id="certifications" className="section-container py-16 md:py-24 relative">
      {/* Section header with subtle animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent/80 bg-accent/5 rounded-full mb-4 tracking-wide">
            Credentials
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-light tracking-tight mb-3"
        >
          Certifications
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-foreground/40 max-w-2xl mx-auto text-sm"
        >
          Continuous learning and professional development
        </motion.p>
      </motion.div>

      {/* First Row - 3 Cards */}
      <div className="mt-8 grid gap-5 md:grid-cols-3 max-w-6xl mx-auto">
        {firstRow.map((cert, i) => (
          <CertificationCard 
            key={`${cert.title}-${cert.organization}`}
            cert={cert}
            index={i}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        ))}
      </div>

      {/* Second Row - 3 Cards */}
      <div className="mt-5 grid gap-5 md:grid-cols-3 max-w-6xl mx-auto">
        {secondRow.map((cert, i) => (
          <CertificationCard 
            key={`${cert.title}-${cert.organization}`}
            cert={cert}
            index={i + 3}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        ))}
      </div>

      {/* Subtle Stats section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16 flex flex-wrap justify-center gap-8"
      >
        <div className="text-center">
          <div className="text-2xl font-light text-accent/80">{certifications.length}</div>
          <div className="text-xs text-foreground/30 tracking-wide uppercase mt-1">Total</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-light text-accent/80">
            {certifications.filter(c => c.year === "2024").length}
          </div>
          <div className="text-xs text-foreground/30 tracking-wide uppercase mt-1">This Year</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-light text-accent/80">
            {[...new Set(certifications.map(c => c.organization))].length}
          </div>
          <div className="text-xs text-foreground/30 tracking-wide uppercase mt-1">Platforms</div>
        </div>
      </motion.div>
    </section>
  );
};

// Separate component for certification card
const CertificationCard = ({ cert, index, hoveredCard, setHoveredCard }: { 
  cert: Certification; 
  index: number;
  hoveredCard: number | null;
  setHoveredCard: (index: number | null) => void;
}) => {
  const colors = getCategoryColors(cert.category);
  const isHovered = hoveredCard === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
      className="group relative"
    >
      {/* Main card with subtle glass effect */}
      <div className="relative overflow-hidden rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-[2px] border border-white/10 dark:border-white/5 transition-all duration-500">
        
        {/* Image Container - Subtle and elegant */}
        <div className="relative w-full h-60 overflow-hidden bg-black/5">
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full h-full"
          >
            <img 
              src={cert.image} 
              alt={cert.title}
              className="w-full h-full object-contain opacity-70 group-hover:opacity-90 transition-opacity duration-700"
            />
          </motion.div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          
          {/* Minimal category indicator */}
          <div className="absolute top-3 right-3">
            <span className={`text-[10px] font-medium px-2 py-1 rounded-full border ${colors.badge} backdrop-blur-sm`}>
              {cert.category}
            </span>
          </div>
        </div>

        {/* Content - Clean and minimal */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-sm font-medium leading-snug mb-2 line-clamp-2 text-foreground/90">
            {cert.title}
          </h3>
          
          {/* Organization */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className={`w-1 h-1 rounded-full ${colors.icon}`} />
            <p className="text-xs text-foreground/50">
              {cert.organization}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-foreground/30">
              {cert.year}
            </span>
            
      
          </div>
        </div>

        {/* Subtle hover indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default Certifications;