const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-2">About Me</h2>
        <div className="section-title-line mx-auto mb-4" />
        <p className="text-muted-foreground text-sm max-w-xl mx-auto font-body">
          A passionate Computer Science student driven by curiosity and the desire to build impactful software.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex justify-center">
          <img
            src="/images/profile-placeholder.jpg"
            alt="Ephraim R"
            className="w-56 h-56 rounded-2xl object-cover shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-2 space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
          <p>
            I'm <strong className="text-foreground">Ephraim R</strong>, a 2nd-year B.E. Computer Science &amp; Engineering student at{" "}
            <strong className="text-foreground">Bapuji Institute of Engineering and Technology</strong>. My journey in tech started with a fascination for how software shapes the world around us.
          </p>
          <p>
            Currently focused on full-stack web development, I'm building hands-on experience with modern front-end frameworks, back-end APIs, and database systems. My coursework in Data Structures, DBMS, Operating Systems, and Algorithms provides a strong theoretical foundation that I actively apply in projects.
          </p>
          <p>
            I'm exploring emerging topics like <strong className="text-foreground">Green AI</strong> and sustainable computing, while strengthening core skills in Java, Python, and JavaScript. I thrive in collaborative environments and am eager to contribute to real-world projects through internships and open-source contributions.
          </p>
          <p>
            Beyond academics, I'm passionate about building products that solve real problems — from e-commerce platforms to developer tools. I'm always open to learning, connecting, and growing with the tech community.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-4 text-xs">
            {[
              { label: "Degree", value: "B.E. (CSE)" },
              { label: "University", value: "Bapuji IET" },
              { label: "Graduation", value: "2028 (Expected)" },
              { label: "Location", value: "Karnataka, India" },
              { label: "Status", value: "Open to Internships" },
              { label: "Interests", value: "Web Dev, Green AI" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-primary font-bold">▸</span>
                <span>
                  <strong className="text-foreground">{item.label}:</strong> {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
