import { skillCategories } from "@/content/skills";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/projects/TechBadge";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Skills"
            title="Technical expertise"
            description="Technologies and tools I use across my MLOps and AI engineering projects."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <FadeIn key={category.title} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-colors hover:border-cyan-400/20">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <TechBadge key={skill} label={skill} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
