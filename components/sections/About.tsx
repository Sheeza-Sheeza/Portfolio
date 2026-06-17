import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="Engineering ML systems that ship"
            description="From experiment tracking to production deployment — I build the full stack around machine learning."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-lg leading-relaxed text-muted">{siteConfig.bio}</p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                My work spans NLP sentiment analysis, classification pipelines,
                and cloud-native MLOps — with hands-on experience in AWS, Docker,
                DVC, MLflow, and CI/CD automation. I am actively exploring LLMs,
                RAG architectures, and scalable backend systems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
              <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
                Interests
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {siteConfig.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-muted"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 font-mono text-sm uppercase tracking-wider text-accent">
                Experience
              </h3>
              <p className="mt-2 text-2xl font-bold text-foreground">
                {siteConfig.experience}
              </p>
              <p className="mt-1 text-sm text-muted">
                Building production ML pipelines and cloud deployments
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
