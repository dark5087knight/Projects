import { useState } from "react";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:obaida@example.com", handle: "obaida@example.com" },
  { icon: Github, label: "GitHub", href: "#", handle: "@obaida" },
  { icon: Linkedin, label: "LinkedIn", href: "#", handle: "/in/obaida" },
  { icon: Instagram, label: "Instagram", href: "#", handle: "@obaida" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            04 — Contact
          </div>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Let's build something solid.
          </h2>
          <p className="text-muted-foreground">
            Open to opportunities, collaborations, and good conversations about infrastructure.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-foreground/40 hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors group-hover:bg-foreground group-hover:text-background">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {s.label}
                    </div>
                    <div className="font-medium">{s.handle}</div>
                  </div>
                </div>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="rounded-2xl border border-border bg-background p-6 space-y-4"
          >
            <div className="grid gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-foreground"
                  placeholder="you@domain.com"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-foreground resize-none"
                  placeholder="What are you working on?"
                />
              </div>
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:gap-3"
            >
              {sent ? "Message sent ✓" : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </div>

        <footer className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <div>© {new Date().getFullYear()} Obaida — IT Engineer</div>
          <div>Crafted with care · Designed in monochrome</div>
        </footer>
      </div>
    </section>
  );
}
