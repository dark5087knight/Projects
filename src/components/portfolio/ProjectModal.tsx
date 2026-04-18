import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";
import type { Project } from "./projects-data";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft")
        setIdx((i) => (i - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [project]);

  if (!project) return null;

  const next = () => setIdx((i) => (i + 1) % project.images.length);
  const prev = () => setIdx((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl border border-border bg-background shadow-elevated animate-scale-in"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur transition-all hover:bg-accent hover:scale-105"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Carousel */}
        <div className="relative aspect-[16/9] bg-surface overflow-hidden">
          {project.images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`${project.title} ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                i === idx ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur transition-transform hover:scale-105"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur transition-transform hover:scale-105"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx ? "w-6 bg-foreground" : "w-1.5 bg-foreground/30"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6 md:p-10 space-y-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {project.category}
            </div>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {project.title}
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Challenges &amp; Solutions
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90 transition"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent transition"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
