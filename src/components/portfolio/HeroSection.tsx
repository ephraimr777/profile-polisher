import { useEffect, useState } from "react";

const roles = ["Full-Stack Developer", "Problem Solver", "CSE Student", "Tech Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src="/images/hero-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
          Ephraim R
        </h2>
        <p className="text-lg md:text-2xl text-primary-foreground/80 font-body font-light mb-2">
          I'm{" "}
          <span className="text-primary font-medium">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </p>
        <p className="text-primary-foreground/60 text-sm md:text-base max-w-lg mx-auto mb-8 font-body">
          CSE Student at Bapuji Institute of Engineering &amp; Technology — Building scalable web solutions and exploring the future of technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Open to Internships
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-body font-medium text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
