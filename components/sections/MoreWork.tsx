import { ExternalLink } from "lucide-react";
import { secondaryProjects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/projects/TechBadge";

export function MoreWork() {
  return (
    <section className="py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="More Work"
            title="Additional projects"
            description="Supporting projects that demonstrate reproducible pipelines and experiment tracking."
          />
        </FadeIn>

        <div className="space-y-4">
          {secondaryProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-muted">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-accent transition-colors hover:border-cyan-400/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    View dataset
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
