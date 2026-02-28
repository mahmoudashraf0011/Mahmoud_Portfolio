import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Mahmoud Ashraf. Crafted with precision.
      </p>
      <div className="flex gap-4">
        {[
          { icon: Github, href: "https://github.com/mahmoudashraf0011", label: "GitHub" },
          { icon: Linkedin, href: "https://linkedin.com/in/mahmoud-ashraf-64823a216/", label: "LinkedIn" },
          { icon: Mail, href: "mailto:ma7157563@gmail.com", label: "Email" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <s.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
