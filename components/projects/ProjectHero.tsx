import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/content/projects";
import { TechBadge } from "@/components/projects/TechBadge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <Container className="pt-28 pb-12">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        {project.subtitle}
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {project.description}
      </p>

      {project.metrics && (
        <div className="mt-8 flex flex-wrap gap-6">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-mono text-2xl font-bold text-accent">
                {metric.value}
              </p>
              <p className="text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {project.links.github && (
          <Button href={project.links.github} external variant="secondary">
            <Github className="h-4 w-4" />
            View on GitHub
          </Button>
        )}
        {project.links.dagshub && (
          <Button href={project.links.dagshub} external variant="secondary">
            <ExternalLink className="h-4 w-4" />
            View on DagsHub
          </Button>
        )}
        {project.links.demo && (
          <Button href={project.links.demo} external variant="primary">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <TechBadge key={tech} label={tech} size="md" />
        ))}
      </div>
    </Container>
  );
}
