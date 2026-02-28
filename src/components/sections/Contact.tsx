import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone, Globe, Send } from "lucide-react";

const Contact = () => {
  // Professional contact information
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      value: "ma7157563@gmail.com",
      href: "mailto:ma7157563@gmail.com",
      description: "Drop me a message anytime",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+201015845839",
      href: "tel:+201015845839",
      description: "Available for calls and WhatsApp",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cairo, Egypt",
      href: "https://maps.google.com/?q=Cairo,Egypt",
      description: "Based in Egypt",
      color: "from-red-500 to-rose-500",
    },
    // {
    //   icon: Globe,
    //   title: "Working Hours",
    //   value: "9:00 AM - 6:00 PM",
    //   href: null,
    //   description: "EET (UTC+2)",
    //   color: "from-purple-500 to-pink-500",
    // },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      username: "@mahmoud-ashraf",
      href: "https://www.linkedin.com/in/mahmoud-ashraf-64823a216/",
      followers: "Connect with me",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      name: "GitHub",
      username: "@mahmoudashraf0011",
      href: "https://github.com/mahmoudashraf0011",
      followers: "Check my repos",
      color: "from-gray-700 to-gray-900",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="section-container min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="section-label inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
          Get in Touch
        </p>
        <h2 className="section-title mt-4 text-4xl font-bold md:text-5xl">
          Let's Connect
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          I'm always excited to collaborate on new projects and innovative ideas.
          Choose your preferred way to reach out below.
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {contactDetails.map((detail) => (
          <motion.div
            key={detail.title}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl"
          >
            {/* Gradient Background on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${detail.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
            />
            
            {/* Icon with Gradient */}
            <div
              className={`inline-flex rounded-xl bg-gradient-to-br ${detail.color} p-3 text-white shadow-lg`}
            >
              <detail.icon size={24} />
            </div>

            {/* Content */}
            <h3 className="mt-4 font-display text-lg font-semibold">
              {detail.title}
            </h3>
            
            {detail.href ? (
              <a
                href={detail.href}
                target={detail.href.startsWith('http') ? '_blank' : undefined}
                rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                {detail.value}
              </a>
            ) : (
              <p className="mt-1 text-sm text-muted-foreground">{detail.value}</p>
            )}
            
            <p className="mt-2 text-xs text-muted-foreground/70">
              {detail.description}
            </p>

            {/* Decorative Line */}
            <div
              className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${detail.color} transition-all duration-300 group-hover:w-full`}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Social Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <h3 className="mb-6 text-center font-display text-2xl font-semibold">
          Find Me Online
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
              />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`rounded-xl bg-gradient-to-br ${social.color} p-3 text-white shadow-lg`}
                >
                  <social.icon size={24} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-display text-lg font-semibold">
                    {social.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {social.username}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/70">
                    {social.followers}
                  </p>
                </div>

                {/* Arrow Icon */}
                <svg
                  className="h-5 w-5 translate-x-0 transform text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {/* Decorative Line */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${social.color} transition-all duration-300 group-hover:w-full`}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className="text-muted-foreground">Available for opportunities</span>
        </div>
      </motion.div>

      {/* Email Button - Prominent CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="mailto:ma7157563@gmail.com"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
        >
          {/* Background Shine Effect */}
          <div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
          
          {/* Icon */}
          <Mail size={20} className="transition-transform group-hover:rotate-12" />
          
          {/* Text */}
          <span>Send me an email</span>
          
          {/* Arrow */}
          <Send size={18} className="transition-transform group-hover:translate-x-1" />
          
          {/* Pulse Effect */}
          <span className="absolute -inset-1 rounded-full bg-blue-400 opacity-30 blur-lg transition-opacity group-hover:opacity-50" />
        </a>
      </motion.div>

  
    </section>
  );
};

export default Contact;