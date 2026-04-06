import { useState } from "react";

const navItems = [
  { id: "hero", icon: "🏠", label: "Home" },
  { id: "about", icon: "👤", label: "About" },
  { id: "skills", icon: "⚡", label: "Skills" },
  { id: "projects", icon: "💻", label: "Projects" },
  { id: "education", icon: "🎓", label: "Education" },
  { id: "contact", icon: "✉️", label: "Contact" },
];

const Sidebar = () => {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 xl:hidden w-10 h-10 rounded-md bg-sidebar-bg flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <span className="text-sidebar-fg text-xl">{mobileOpen ? "✕" : "☰"}</span>
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-72 sidebar-gradient z-40 flex flex-col items-center py-10 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0`}
      >
        <div className="mb-6">
          <img
            src="/images/profile-placeholder.jpg"
            alt="Ephraim R - Profile"
            className="w-28 h-28 rounded-full border-4 border-sidebar-accent object-cover"
          />
        </div>

        <h1 className="text-primary-foreground font-heading text-xl font-bold mb-1">
          Ephraim R
        </h1>
        <p className="text-sidebar-fg text-xs mb-6 text-center px-4">
          Aspiring Full-Stack Developer
        </p>

        <div className="flex gap-3 mb-8">
          <a
            href="https://www.linkedin.com/in/ephraim-r-39510636a"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-sidebar-accent/20 flex items-center justify-center text-sidebar-accent hover:bg-sidebar-accent hover:text-primary-foreground transition-colors text-sm"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            href="https://github.com/ephraim-r"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-sidebar-accent/20 flex items-center justify-center text-sidebar-accent hover:bg-sidebar-accent hover:text-primary-foreground transition-colors text-sm"
            aria-label="GitHub"
          >
            ⌨
          </a>
        </div>

        <nav className="flex-1 w-full px-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-3 text-sm font-body ${
                    active === item.id
                      ? "bg-sidebar-accent/15 text-sidebar-accent"
                      : "text-sidebar-fg hover:text-primary-foreground hover:bg-primary-foreground/5"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sidebar-fg/50 text-xs mt-auto">© 2025 Ephraim R</p>
      </aside>
    </>
  );
};

export default Sidebar;
