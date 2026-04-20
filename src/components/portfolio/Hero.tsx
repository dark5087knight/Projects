import { ArrowRight, Download, Sparkles } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs text-muted-foreground animate-fade-in">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
              </span>
              Available for opportunities
            </div>

            <h1 className="font-display text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl animate-fade-in-up">
              Obaida
              <span className="block text-muted-foreground">IT Engineer</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up delay-100">
              Building systems, automating workflows, and designing scalable infrastructure.
              Focused on Cloud Computing, Linux, and the craft of reliable engineering.
            </p>

            <div className="flex flex-wrap items-center gap-3 animate-fade-in-up delay-200">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all duration-300 hover:gap-3 hover:shadow-elevated"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-foreground/40 hover:bg-accent"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground link-underline"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs font-mono uppercase tracking-widest text-muted-foreground animate-fade-in-up delay-300">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3 w-3" />
                <span>Cloud · Automation · Systems</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-200">
            <div className="relative aspect-square rounded-3xl border border-border bg-surface overflow-hidden shadow-soft">
              <img
                src={heroVisual}
                alt="Cloud infrastructure illustration"
                className="h-full w-full object-cover animate-float"
                width={1024}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-background px-4 py-3 shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-foreground animate-blink" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Status
                  </div>
                  <div className="text-sm font-medium">Systems operational</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
