const timeline = [
  {
    year: "2024 — Now",
    title: "Cloud & Automation Engineering",
    desc: "Deepening AWS, Terraform, and Kubernetes. Building internal platforms.",
    tag: "Current",
  },
  {
    year: "2023",
    title: "Linux & Networking Mastery",
    desc: "RHCSA preparation, advanced networking, and infrastructure-as-code workflows.",
  },
  {
    year: "2022",
    title: "IT Engineering Foundations",
    desc: "Systems administration, scripting in Bash and Python, virtualization.",
  },
  {
    year: "2021",
    title: "Started the Journey",
    desc: "First Linux server, first home lab, first taste of automation.",
  },
];

const learning = ["AWS Solutions Architect", "Kubernetes CKA", "Terraform Associate"];

export function Journey() {
  return (
    <section id="journey" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div className="md:sticky md:top-32 md:self-start space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              03 — Journey
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              The path so far.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A continuous curve of learning, breaking things, fixing them, and shipping better systems.
            </p>

            <div className="rounded-2xl border border-border bg-surface-elevated p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Currently Learning
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {learning.map((l) => (
                  <span
                    key={l}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />
            <ul className="space-y-10">
              {timeline.map((t, i) => (
                <li
                  key={t.year}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className="relative pl-10 animate-fade-in-up"
                >
                  <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background">
                    <span className="h-2 w-2 rounded-full bg-foreground" />
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{t.year}</span>
                    {t.tag && (
                      <span className="rounded-full bg-foreground text-background px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest">
                        {t.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
