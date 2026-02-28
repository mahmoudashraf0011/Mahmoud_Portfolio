import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="section-container w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="section-label mb-4">Frontend Developer · React Specialist</p>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="text-gradient">Mahmoud Ashraf</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I craft fast, scalable, and beautiful web experiences with React and TypeScript. 
            Focused on clean architecture, performance, and pixel-perfect UI.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:border-accent/40 hover:shadow-md"
            >
              <Mail size={16} />
              Contact Me
            </a>
           
          </div>
        </motion.div>
      </div>

      {/* Decorative orb */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
    </section>
  );
};

export default Hero;
