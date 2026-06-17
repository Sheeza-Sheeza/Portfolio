import { aiProjects, mlopsProjects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            description="AI applications, RAG systems, and production MLOps pipelines — from LLM agents to deployed inference APIs."
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-accent">
            AI Engineering
          </h3>
          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                showFeaturedBadge={index === 0}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-accent">
            MLOps &amp; Machine Learning
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {mlopsProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                showFeaturedBadge={index === 0}
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
