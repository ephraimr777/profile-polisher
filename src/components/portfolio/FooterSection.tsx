const FooterSection = () => (
  <footer className="py-8 bg-card border-t border-border">
    <div className="container mx-auto px-6 max-w-5xl text-center">
      <p className="text-xs text-muted-foreground font-body mb-2">
        © {new Date().getFullYear()} <span className="text-foreground font-medium">Ephraim R</span>. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground/60 font-body">
        Aspiring Full-Stack Developer · Open to Internships & Projects
      </p>
      <div className="flex justify-center gap-4 mt-3">
        <a
          href="https://www.linkedin.com/in/ephraim-r-39510636a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors text-xs font-body"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ephraim-r"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors text-xs font-body"
        >
          GitHub
        </a>
        <a
          href="mailto:ephraim.r@example.com"
          className="text-muted-foreground hover:text-primary transition-colors text-xs font-body"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
