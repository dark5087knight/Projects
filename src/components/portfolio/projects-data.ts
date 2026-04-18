import cloud1 from "@/assets/project-cloud-1.jpg";
import cloud2 from "@/assets/project-cloud-2.jpg";
import auto1 from "@/assets/project-auto-1.jpg";
import auto2 from "@/assets/project-auto-2.jpg";
import net1 from "@/assets/project-net-1.jpg";

export type ProjectCategory = "cloud" | "automation" | "systems";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  short: string;
  description: string;
  images: string[];
  tech: string[];
  challenges: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "multi-region-aws",
    title: "Multi-Region AWS Deployment",
    category: "cloud",
    short: "Highly available infrastructure across three AWS regions with automated failover.",
    description:
      "Designed and deployed a production-grade multi-region architecture on AWS using Terraform. Implemented Route53 latency-based routing, cross-region RDS replication, and S3 cross-region replication. Achieved 99.99% uptime SLO with automated failover under 30 seconds.",
    images: [cloud1, cloud2],
    tech: ["AWS", "Terraform", "Route53", "RDS", "CloudWatch", "VPC Peering"],
    challenges:
      "Coordinating state between regions and handling split-brain scenarios required careful design of health checks and failover policies. Solved by introducing a quorum-based health monitor and tiered DNS TTLs.",
    github: "#",
    demo: "#",
  },
  {
    id: "k8s-platform",
    title: "Kubernetes Internal Platform",
    category: "cloud",
    short: "Self-service developer platform on Kubernetes with GitOps and observability.",
    description:
      "Built an internal developer platform using Kubernetes, ArgoCD, and a custom Backstage portal. Teams can spin up environments via PR, with Prometheus + Grafana monitoring and Loki for logs out of the box.",
    images: [cloud2, cloud1],
    tech: ["Kubernetes", "ArgoCD", "Helm", "Prometheus", "Grafana", "Loki"],
    challenges:
      "Balancing developer velocity with platform guardrails. Introduced OPA Gatekeeper policies and namespace templates to enforce defaults without slowing teams down.",
    github: "#",
  },
  {
    id: "ansible-fleet",
    title: "Ansible Fleet Provisioning",
    category: "automation",
    short: "One-command provisioning for a 200+ Linux server fleet.",
    description:
      "Authored an Ansible-based provisioning system that bootstraps fresh Linux servers with hardened SSH, monitoring agents, log forwarding, and role-based packages. Reduced new-server setup from 2 hours to under 4 minutes.",
    images: [auto2, auto1],
    tech: ["Ansible", "Python", "Bash", "Vault", "Molecule"],
    challenges:
      "Idempotency across mixed Ubuntu/RHEL distributions. Solved with conditional roles and a custom test harness using Molecule + Docker.",
    github: "#",
  },
  {
    id: "ci-pipeline",
    title: "Zero-Touch CI/CD Pipeline",
    category: "automation",
    short: "GitOps pipeline from commit to production with automated rollback.",
    description:
      "End-to-end pipeline using GitHub Actions and ArgoCD, including container scanning, signed images, automated canary releases, and rollback on SLO breach. Mean time to deploy: 7 minutes.",
    images: [auto1, auto2],
    tech: ["GitHub Actions", "ArgoCD", "Cosign", "Trivy", "Kustomize"],
    challenges:
      "Catching regressions before full rollout. Implemented progressive delivery with Argo Rollouts and Prometheus-driven analysis runs.",
    github: "#",
    demo: "#",
  },
  {
    id: "network-redesign",
    title: "Office Network Redesign",
    category: "systems",
    short: "Segmented VLAN architecture with zero-trust access control.",
    description:
      "Redesigned the office network into segmented VLANs with role-based access policies, deployed a WireGuard VPN gateway, and centralized authentication via FreeIPA.",
    images: [net1, cloud1],
    tech: ["WireGuard", "pfSense", "FreeIPA", "VLAN", "802.1X"],
    challenges:
      "Migrating 100+ devices with zero downtime. Phased the rollout across maintenance windows with automated configuration backups.",
    github: "#",
  },
];
