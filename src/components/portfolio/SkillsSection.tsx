const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "ADA", level: 55 },
    ],
  },
  {
    title: "Front-End",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "Bootstrap / Tailwind", level: 75 },
      { name: "React (Learning)", level: 50 },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Node.js / Express", level: 55 },
      { name: "Python Flask", level: 50 },
      { name: "REST APIs", level: 60 },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MySQL / SQL", level: 75 },
      { name: "Git / GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 60 },
    ],
  },
  {
    title: "CS Concepts",
    skills: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "DBMS", level: 75 },
      { name: "Operating Systems", level: 70 },
      { name: "Digital Design & Computer Org.", level: 65 },
      { name: "Green AI", level: 45 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Skills</h2>
        <div className="section-title-line mx-auto mb-4" />
        <p className="text-muted-foreground text-sm max-w-xl mx-auto font-body">
          Technical proficiencies across languages, frameworks, databases, and core CS concepts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-card rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-heading font-bold text-primary mb-4 uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs font-body mb-1">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-bar h-2 rounded-full overflow-hidden">
                    <div
                      className="skill-bar-fill h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
