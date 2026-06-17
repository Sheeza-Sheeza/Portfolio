"use client";

import { ArrowDown, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center pt-16">
      <Container className="py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 font-mono text-2xl font-bold text-accent"
          >
            SR
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-sm uppercase tracking-widest text-accent"
          >
            {siteConfig.role} · {siteConfig.experience} experience
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg leading-relaxed text-muted sm:text-xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button onClick={() => scrollToSection("projects")}>
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none">
        <ArrowDown className="h-5 w-5 text-muted" aria-hidden="true" />
      </div>
    </section>
  );
}
