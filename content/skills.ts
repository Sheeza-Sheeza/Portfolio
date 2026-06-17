import {
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  FlaskConical,
  GitBranch,
  Server,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "AI / LLMs",
    icon: Bot,
    skills: [
      "OpenAI API",
      "RAG",
      "Vector Stores",
      "LangChain",
      "LangGraph",
      "MCP",
      "Google Gemini",
      "WebSockets",
    ],
  },
  {
    title: "ML / NLP",
    icon: Brain,
    skills: [
      "scikit-learn",
      "XGBoost",
      "NLTK",
      "sentence-transformers",
      "imbalanced-learn",
    ],
  },
  {
    title: "MLOps",
    icon: GitBranch,
    skills: [
      "DVC",
      "MLflow",
      "DVCLive",
      "DagsHub",
      "Model Registry",
      "Prometheus",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["FastAPI", "Flask", "Uvicorn", "REST APIs"],
  },
  {
    title: "Cloud / DevOps",
    icon: Cloud,
    skills: [
      "AWS S3",
      "AWS ECR",
      "AWS EC2",
      "Docker",
      "GitHub Actions",
      "MongoDB Atlas",
      "Render",
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python 3.10–3.12", "SQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["uv", "pytest", "ruff", "Jinja2", "Chart.js"],
  },
];

export const skillIcons = {
  Database,
  FlaskConical,
};
