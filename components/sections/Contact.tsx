import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <FadeIn>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/5 via-transparent to-violet-500/5 p-8 sm:p-12">
            <SectionHeading
              eyebrow="Contact"
              title="Let's connect"
              description="Open to AI engineering roles, MLOps collaborations, and interesting ML projects. Reach out anytime."
              align="center"
              className="mx-auto"
            />

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={siteConfig.social.email} external size="lg">
                <Mail className="h-5 w-5" />
                {siteConfig.email}
              </Button>
              <Button
                href={siteConfig.social.github}
                external
                variant="secondary"
                size="lg"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Button>
              <Button
                href={siteConfig.social.linkedin}
                external
                variant="secondary"
                size="lg"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
