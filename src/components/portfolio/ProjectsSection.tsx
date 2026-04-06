const projects = [
  {
    title: "Musical E-Commerce Website",
    description:
      "A full-featured e-commerce platform for buying and streaming music. Includes a catalog with audio previews, shopping cart, simulated payment flow, user authentication, and an admin dashboard for managing tracks and orders.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL", "Bootstrap"],
    features: [
      "Browse & search music catalog with audio previews",
      "Cart system with quantity management",
      "Simulated payment gateway integration",
      "User sign-up / login with session handling",
      "Admin dashboard: upload tracks, manage inventory",
      "Responsive design across devices",
    ],
    status: "In Progress",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Student Portfolio Website",
    description:
      "This very portfolio — a responsive, accessible personal website built to showcase skills, projects, and professional background. Features smooth animations, a dark-themed sidebar, and SEO-friendly markup.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    features: [
      "Responsive mobile-first layout",
      "Typing hero animation",
      "Skill progress bars with categories",
      "Semantic HTML & accessibility",
    ],
    status: "Live",
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "An interactive web tool to visualize sorting and searching algorithms step by step. Helps students understand DSA concepts through animated graphics and adjustable speed controls.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    features: [
      "Bubble, Selection, Insertion, Merge, Quick sort",
      "Linear & Binary search visualization",
      "Adjustable array size and speed",
      "Step count and comparison tracker",
    ],
    status: "Planned",
    color: "from-primary/15 to-accent/10",
  },
  {
    title: "Weather Dashboard App",
    description:
      "A clean weather application fetching real-time data from a public API. Displays current conditions, 5-day forecast, and location-based search with a responsive card layout.",
    tech: ["HTML5", "CSS3", "JavaScript", "OpenWeather API"],
    features: [
      "City search with autocomplete",
      "Current temperature, humidity, wind",
      "5-day forecast with icons",
      "Geolocation support",
    ],
    status: "Planned",
    color: "from-accent/15 to-primary/10",
  },
];

const statusColors: Record<string, string> = {
  Live: "bg-green-500/20 text-green-400",
  "In Progress": "bg-yellow-500/20 text-yellow-400",
  Planned: "bg-blue-500/20 text-blue-400",
};

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-background">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Projects</h2>
        <div className="section-title-line mx-auto mb-4" />
        <p className="text-muted-foreground text-sm max-w-xl mx-auto font-body">
          Hands-on projects that demonstrate my technical skills and problem-solving abilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`rounded-xl border border-border bg-gradient-to-br ${project.color} p-6 hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-heading font-bold text-foreground">{project.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full font-body ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>
            <p className="text-muted-foreground text-xs font-body mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-body font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="space-y-1">
              {project.features.slice(0, 4).map((f) => (
                <li key={f} className="text-xs text-muted-foreground font-body flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
