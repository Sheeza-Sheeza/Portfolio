import type { PipelineStep } from "@/content/projects";
import { cn } from "@/lib/utils";

type PipelineDiagramProps = {
  steps: PipelineStep[];
  className?: string;
};

export function PipelineDiagram({ steps, className }: PipelineDiagramProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] p-6",
        className,
      )}
      role="img"
      aria-label="Pipeline architecture diagram"
    >
      <div className="flex min-w-max items-center gap-2">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-center gap-2">
            <div className="flex min-w-[120px] flex-col items-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-center">
              <span className="font-mono text-xs font-semibold text-accent">
                {step.label}
              </span>
              {step.description && (
                <span className="mt-1 text-[10px] text-muted">
                  {step.description}
                </span>
              )}
            </div>
            {index < steps.length - 1 && (
              <svg
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
                aria-hidden="true"
                className="shrink-0 text-cyan-400/50"
              >
                <path
                  d="M0 6h18m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
