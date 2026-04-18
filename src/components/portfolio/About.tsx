import {
  Cloud, Cpu, GitBranch, Network, Server, Shield, Terminal, Workflow,
} from "lucide-react";

const skills = [
  { icon: Terminal, name: "Linux", desc: "Ubuntu · RHEL · Arch" },
  { icon: Network, name: "Networking", desc: "TCP/IP · DNS · VPN" },
  { icon: Cloud, name: "Cloud", desc: "AWS · Azure · GCP" },
  { icon: Workflow, name: "Automation", desc: "Ansible · Terraform" },
  { icon: GitBranch, name: "CI/CD", desc: "GitHub Actions · Jenkins" },
  { icon: Server, name: "Systems", desc: "Bash · Python · Docker" },
  { icon: Shield, name: "Security", desc: "Hardening · IAM" },
  { icon: Cpu, name: "Virtualization", desc: "KVM · Proxmox · VMware" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div className="md:sticky md:top-32 md:self-start space-y-6">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              01 — About
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Engineering with intention.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm an IT Engineer focused on building infrastructure that's reliable,
              automated, and scalable. My path is set toward becoming a System &amp;
              Cloud Engineer — combining deep Linux fundamentals with modern cloud-native practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I care about clean architecture, observable systems, and the small details
              that make platforms feel solid.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {skills.map((s, i) => (
                <div
                  key={s.name}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className="group rounded-2xl border border-border bg-surface-elevated p-5 transition-all duration-300 hover:border-foreground/30 hover:shadow-soft hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background transition-colors group-hover:bg-foreground group-hover:text-background">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div className="mt-4 font-medium">{s.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground font-mono">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
