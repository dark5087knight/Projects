import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects, type Project, type ProjectCategory } from "./projects-data";
import { ProjectModal } from "./ProjectModal";

const filters: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "cloud", label: "Cloud" },
  { key: "automation", label: "Automation" },
  { key: "systems", label: "Systems" },
];

export function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const [open, setOpen] = useState<Project | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  useEffect(() => {
    setActiveIdx(0);
  }, [active]);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActiveIdx(index);
            }
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const currentCards = cardRefs.current.slice(0, filtered.length);
    currentCards.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [filtered]);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div className="md:sticky md:top-32 md:self-start space-y-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                02 — Selected Work
              </div>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Projects &amp; case studies.
              </h2>
            </div>

            <div className="flex flex-wrap gap-1 rounded-full border border-border bg-surface-elevated p-1 w-fit">
              {filters.map((f) => {
                const count = f.key === "all" ? projects.length : projects.filter((p) => p.category === f.key).length;
                return (
                  <button
                    key={f.key}
                    onClick={() => setActive(f.key)}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                      active === f.key
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {f.label}
                    <span className="ml-1.5 font-mono opacity-60">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Information Area (Desktop only since mobile doesn't have a side-by-side layout) */}
            <div className="hidden md:block relative mt-12 h-[420px] w-full">
              {filtered.map((p, i) => {
                const isActive = i === activeIdx;
                return (
                  <div
                    key={p.id}
                    className={`absolute inset-0 flex flex-col gap-6 transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-8 pointer-events-none"
                    }`}
                  >
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                        {p.description}
                      </p>
                    </div>

                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 border-b border-border pb-2">
                        Key Challenges
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {p.challenges}
                      </p>
                    </div>

                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 border-b border-border pb-2">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-surface-elevated border border-border px-3 py-1 text-[10px] font-mono text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-10">
          {filtered.map((p, i) => (
            <article
              key={p.id}
              data-index={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group animate-fade-in-up cursor-pointer overflow-hidden rounded-3xl border border-border bg-background hover-lift"
              onClick={() => setOpen(p)}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-full border border-border bg-background/80 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-widest">
                  {p.category}
                </div>
                <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.short}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(p);
                    }}
                    className="text-sm font-medium link-underline"
                  >
                    View Details
                  </button>
                  {p.github && (
                    <a
                      href={p.github}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border hover:bg-accent transition"
                      aria-label="GitHub"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border hover:bg-accent transition"
                      aria-label="Demo"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
