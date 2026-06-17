import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PipelineDiagram } from "@/components/projects/PipelineDiagram";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.problem,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <ProjectHero project={project} />

        <section className="pb-24">
          <Container>
            <FadeIn>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Architecture
              </h2>
              <PipelineDiagram steps={project.pipeline} />
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="mb-6 mt-16 text-2xl font-bold text-foreground">
                Key Features
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    <span className="text-muted">{highlight}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="mb-6 mt-16 text-2xl font-bold text-foreground">
                Problem Statement
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-muted">
                {project.problem}
              </p>
            </FadeIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
