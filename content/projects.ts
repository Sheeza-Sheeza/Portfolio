export type PipelineStep = {
  label: string;
  description?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  featured: boolean;
  problem: string;
  description: string;
  highlights: string[];
  techStack: string[];
  pipeline: PipelineStep[];
  links: {
    github?: string;
    demo?: string;
    dagshub?: string;
  };
  metrics?: { label: string; value: string }[];
};

export const featuredProjects: Project[] = [
  {
    slug: "vehicle-insurance-mlops",
    title: "Vehicle Insurance MLOps",
    subtitle: "Production ML pipeline on AWS",
    featured: true,
    problem:
      "Predict whether vehicle insurance customers will respond positively to cross-selling offers, with a fully automated path from data ingestion to live inference.",
    description:
      "End-to-end MLOps system that ingests customer data from MongoDB Atlas, runs a six-stage training pipeline with schema validation and champion/challenger evaluation, stores versioned models in AWS S3, and serves predictions through a FastAPI web application deployed to EC2 via GitHub Actions and Docker.",
    highlights: [
      "Six-stage modular pipeline: ingestion, validation, transformation, training, evaluation, and model push",
      "MongoDB Atlas as source-of-truth with batched export for large collections",
      "S3 model registry with production model comparison before promotion",
      "Full CI/CD: GitHub Actions builds Docker image, pushes to ECR, deploys to self-hosted EC2 runner",
      "Live FastAPI prediction UI with on-demand training trigger via API",
    ],
    techStack: [
      "Python 3.12",
      "FastAPI",
      "scikit-learn",
      "MongoDB Atlas",
      "AWS S3",
      "AWS ECR",
      "AWS EC2",
      "Docker",
      "GitHub Actions",
    ],
    pipeline: [
      { label: "MongoDB Atlas", description: "Data source" },
      { label: "Ingestion", description: "Train/test split" },
      { label: "Validation", description: "Schema & drift checks" },
      { label: "Transform", description: "Feature engineering" },
      { label: "Train", description: "Random Forest classifier" },
      { label: "Evaluate", description: "Champion vs challenger" },
      { label: "S3 Registry", description: "Model versioning" },
      { label: "FastAPI", description: "Live predictions" },
    ],
    links: {
      github: "https://github.com/Sheeza-Sheeza/MLOPs_Projects",
      demo: "http://13.223.72.203:5000",
    },
    metrics: [
      { label: "Pipeline Stages", value: "6" },
      { label: "Deployment", value: "AWS EC2" },
      { label: "CI/CD", value: "GitHub Actions" },
    ],
  },
  {
    slug: "mlops-capstone-sentiment",
    title: "MLOPS Capstone — Sentiment Analysis",
    subtitle: "DVC + MLflow + DagsHub lifecycle",
    featured: true,
    problem:
      "Build a complete MLOps lifecycle for binary sentiment classification on text data, from reproducible training to monitored production inference.",
    description:
      "Educational capstone implementing a six-stage DVC pipeline for sentiment analysis with TF-IDF feature engineering and XGBoost classification. Integrates MLflow model registry with Production-stage promotion, DagsHub for experiment tracking, a Flask web UI for live predictions, and Prometheus metrics for request counts and latency monitoring.",
    highlights: [
      "Six-stage DVC pipeline: ingestion → preprocessing → feature engineering → training → evaluation → registration",
      "MLflow model registry with automatic Production stage promotion",
      "DagsHub integration for remote experiment tracking and artifact storage",
      "Flask web UI with real-time sentiment predictions",
      "Prometheus metrics: request counts, prediction counts, and latency histograms",
    ],
    techStack: [
      "Python 3.12",
      "DVC",
      "MLflow",
      "DagsHub",
      "Flask",
      "XGBoost",
      "NLTK",
      "Prometheus",
      "Docker",
      "AWS ECR",
      "GitHub Actions",
    ],
    pipeline: [
      { label: "Data Ingestion", description: "Raw text corpus" },
      { label: "Preprocessing", description: "Text cleaning" },
      { label: "Features", description: "TF-IDF vectorization" },
      { label: "Training", description: "XGBoost classifier" },
      { label: "Evaluation", description: "Metrics & reports" },
      { label: "MLflow Registry", description: "Production promotion" },
      { label: "Flask UI", description: "Live inference" },
    ],
    links: {
      dagshub: "https://dagshub.com/sheezarafique266/MLOPS_Capstone_Project",
    },
    metrics: [
      { label: "DVC Stages", value: "6" },
      { label: "Monitoring", value: "Prometheus" },
      { label: "Registry", value: "MLflow" },
    ],
  },
  {
    slug: "reviewsense",
    title: "ReviewSense",
    subtitle: "E-commerce sentiment analysis platform",
    featured: true,
    problem:
      "Classify Amazon product reviews as positive, neutral, or negative at scale, with an interactive dashboard for single and batch inference.",
    description:
      "Production-ready NLP platform that compares multiple sentiment classifiers — TF-IDF with Logistic Regression, Linear SVC, and Naive Bayes alongside sentence-embedding models. Features a responsive FastAPI dashboard with live sentiment counts, batch CSV upload, model metrics visualization, and dataset analytics. Deployed via Docker on Render with full CI/CD pipeline.",
    highlights: [
      "Multi-model NLP comparison: TF-IDF baselines and MiniLM sentence embeddings",
      "Interactive dashboard with live positive/neutral/negative counts and Chart.js analytics",
      "Single-review and batch CSV prediction endpoints",
      "MLflow experiment tracking with model registry support",
      "DVC pipeline for reproducible data preparation and training",
    ],
    techStack: [
      "Python 3.10+",
      "FastAPI",
      "sentence-transformers",
      "scikit-learn",
      "MLflow",
      "DVC",
      "Chart.js",
      "Docker",
      "Render",
      "GitHub Actions",
    ],
    pipeline: [
      { label: "Raw Reviews", description: "Amazon dataset" },
      { label: "Preprocessing", description: "Text cleaning" },
      { label: "Vectorization", description: "TF-IDF / embeddings" },
      { label: "Training", description: "Multi-model comparison" },
      { label: "MLflow", description: "Experiment tracking" },
      { label: "Dashboard", description: "Inference & analytics" },
    ],
    links: {},
    metrics: [
      { label: "Sentiment Classes", value: "3" },
      { label: "Model Types", value: "4+" },
      { label: "Deployment", value: "Render" },
    ],
  },
  {
    slug: "mlops-experiment-platform",
    title: "MLOps Experiment Platform",
    subtitle: "Dual-pipeline control panel",
    featured: true,
    problem:
      "Provide a unified web interface to run, compare, and manage two distinct ML pipelines — DVC-based Titanic survival and MLflow-based sklearn classification.",
    description:
      "Sophisticated MLOps platform combining a DVC pipeline for Titanic survival prediction and an MLflow pipeline for sklearn built-in datasets (Iris, Wine, Breast Cancer). The custom FastAPI control panel lets users trigger pipelines, edit hyperparameters live, compare metrics side-by-side, browse experiment history, and view pipeline job logs — all orchestrated via Docker Compose.",
    highlights: [
      "Custom FastAPI MLOps Control Panel for unified experiment management",
      "Dual pipeline architecture: DVC (Titanic) + MLflow (sklearn datasets)",
      "Live parameter editing for params.yaml and params_mlflow.yaml",
      "Side-by-side metric comparison and best-model identification",
      "Docker Compose orchestration with multi-stage production image",
    ],
    techStack: [
      "Python 3.12",
      "DVC",
      "MLflow",
      "FastAPI",
      "scikit-learn",
      "Docker Compose",
      "pytest",
      "GitHub Actions",
      "uv",
    ],
    pipeline: [
      { label: "DVC Pipeline", description: "Titanic survival" },
      { label: "MLflow Pipeline", description: "sklearn datasets" },
      { label: "Control Panel", description: "FastAPI web UI" },
      { label: "Param Editor", description: "Live tuning" },
      { label: "Metrics Compare", description: "Side-by-side view" },
      { label: "Docker Compose", description: "Multi-service deploy" },
    ],
    links: {},
    metrics: [
      { label: "Pipelines", value: "2" },
      { label: "Datasets", value: "4" },
      { label: "Orchestration", value: "Docker Compose" },
    ],
  },
];

export const secondaryProjects = [
  {
    title: "Spam SMS Classification Pipeline",
    description:
      "End-to-end DVC pipeline for spam SMS text classification with parameterized runs, DVCLive experiment tracking, and S3 remote artifact storage.",
    techStack: ["DVC", "XGBoost", "NLTK", "DVCLive", "AWS S3"],
    links: {
      github: "https://github.com/Sheeza-Sheeza/Spam_Dataset",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return featuredProjects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return featuredProjects.map((project) => project.slug);
}
