import { Mail } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            © {year} · Built with Next.js & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted transition-colors hover:bg-white/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="GitHub profile"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-muted transition-colors hover:bg-white/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.social.email}
            className="rounded-full p-2 text-muted transition-colors hover:bg-white/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Send email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
