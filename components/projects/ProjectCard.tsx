"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/content/projects";
import { TechBadge } from "@/components/projects/TechBadge";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
};

export function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10",
        project.featured && "lg:col-span-1",
        className,
      )}
    >
      {project.featured && index === 0 && (
        <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-3 py-1 font-mono text-xs text-accent">
          Featured
        </span>
      )}

      <div className="mb-4">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          {project.subtitle}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-foreground">
          {project.title}
        </h3>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
        {project.problem}
      </p>

      <ul className="mb-5 space-y-2">
        {project.highlights.slice(0, 3).map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-2 text-sm text-muted"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
        {project.techStack.length > 5 && (
          <TechBadge label={`+${project.techStack.length - 5}`} />
        )}
      </div>

      <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
        >
          View case study
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        <div className="ml-auto flex items-center gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted transition-colors hover:bg-white/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted transition-colors hover:bg-white/5 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
