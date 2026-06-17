import { featuredProjects } from "@/content/projects";
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
            description="Production MLOps systems and NLP platforms — from data pipelines to deployed inference APIs."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
