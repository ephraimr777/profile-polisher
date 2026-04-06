const education = [
  {
    degree: "B.E. in Computer Science & Engineering",
    school: "Bapuji Institute of Engineering and Technology",
    period: "2024 – 2028 (Expected)",
    details: "Currently in 2nd year. Coursework: Data Structures, Algorithms, DBMS, Operating Systems, DDCO, Green AI. Active participant in coding clubs and hackathons.",
    current: true,
  },
  {
    degree: "12th Grade (PUC / Higher Secondary)",
    school: "Athani Composite PU College",
    period: "2022 – 2024",
    details: "Science stream with a strong foundation in Mathematics and Physics. Developed early programming skills in C and Python.",
    current: false,
  },
  {
    degree: "10th Grade (CBSE)",
    school: "Bapuji Higher Primary English Medium School",
    period: "Completed 2022",
    details: "CBSE curriculum. Built foundational knowledge in computer applications and logical reasoning.",
    current: false,
  },
];

const EducationSection = () => (
  <section id="education" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Education</h2>
        <div className="section-title-line mx-auto mb-4" />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px" />

        <div className="space-y-10">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10 ring-4 ring-background" />

              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-card rounded-xl p-5 shadow-sm border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    {edu.current && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary font-body font-medium">
                        Current
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground font-body">{edu.period}</span>
                  </div>
                  <h3 className="text-sm font-heading font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-primary font-body font-medium mb-2">{edu.school}</p>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
