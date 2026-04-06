import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Formspree integration placeholder
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Message sent! Thank you for reaching out.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong. Please try again or reach out via LinkedIn.");
      }
    } catch {
      alert("Network error. Please try again.");
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Get In Touch</h2>
          <div className="section-title-line mx-auto mb-4" />
          <p className="text-muted-foreground text-sm max-w-xl mx-auto font-body">
            Open to internships, freelance projects, and collaborations. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                📍
              </div>
              <div>
                <h4 className="text-sm font-heading font-bold text-foreground">Location</h4>
                <p className="text-xs text-muted-foreground font-body">Karnataka, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                ✉️
              </div>
              <div>
                <h4 className="text-sm font-heading font-bold text-foreground">Email</h4>
                <p className="text-xs text-muted-foreground font-body">ephraim.r@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                🔗
              </div>
              <div>
                <h4 className="text-sm font-heading font-bold text-foreground">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/ephraim-r-39510636a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary font-body hover:underline"
                >
                  linkedin.com/in/ephraim-r
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                ⌨
              </div>
              <div>
                <h4 className="text-sm font-heading font-bold text-foreground">GitHub</h4>
                <a
                  href="https://github.com/ephraim-r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary font-body hover:underline"
                >
                  github.com/ephraim-r
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm font-body resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              disabled={sending}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
