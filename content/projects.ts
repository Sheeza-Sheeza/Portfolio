export type PipelineStep = {
  label: string;
  description?: string;
};

export type ProjectCategory = "ai" | "mlops";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
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
    slug: "recruiter-rag-chat",
    title: "Recruiter RAG Chat",
    subtitle: "AI resume screener with OpenAI RAG",
    category: "ai",
    featured: true,
    problem:
      "Help recruiters find qualified candidates instantly by querying a library of PDF resumes in natural language, with structured shortlists and follow-up Q&A.",
    description:
      "FastAPI backend powering an AI recruiter assistant built on OpenAI Assistants API with file_search RAG. PDF resumes are ingested from MinIO into an OpenAI vector store; recruiters chat in natural language and receive structured JSON candidate shortlists with skills, experience, and source filenames. Includes threaded conversations, auto-generated chat titles, and PostgreSQL persistence.",
    highlights: [
      "RAG pipeline: PDF resumes from MinIO → OpenAI vector store → file_search retrieval",
      "OpenAI Assistants API with structured JSON output (name, email, skills, experience)",
      "Threaded chat history with auto-generated conversation titles",
      "Follow-up Q&A on shortlisted candidates within the same thread",
      "PostgreSQL + SQLAlchemy for users, chats, and message persistence",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "OpenAI Assistants API",
      "RAG",
      "Vector Stores",
      "PostgreSQL",
      "SQLAlchemy",
      "MinIO",
    ],
    pipeline: [
      { label: "PDF Resumes", description: "MinIO storage" },
      { label: "Ingestion", description: "Vector store upload" },
      { label: "RAG Retrieval", description: "file_search" },
      { label: "Assistant", description: "gpt-4o-mini" },
      { label: "Structured JSON", description: "Candidate shortlist" },
      { label: "Chat API", description: "Threaded Q&A" },
      { label: "PostgreSQL", description: "Persistence" },
    ],
    links: {
      github: "https://github.com/Sheeza-Sheeza/Resume_Analzer",
    },
    metrics: [
      { label: "Architecture", value: "RAG" },
      { label: "Model", value: "GPT-4o-mini" },
      { label: "Storage", value: "PostgreSQL" },
    ],
  },
  {
    slug: "mcp-agent-demo",
    title: "MCP Agent Demo",
    subtitle: "Model Context Protocol + LangGraph agents",
    category: "ai",
    featured: true,
    problem:
      "Demonstrate how AI agents can discover and use external tools through the Model Context Protocol, with multi-server orchestration and interactive chat interfaces.",
    description:
      "Full MCP demonstration project with math and weather tool servers wired into LangGraph agents and Streamlit chat UIs. Supports stdio and HTTP transports, multi-server MCP clients, conditional tool-calling flows, and both OpenAI and Groq model backends — showcasing modern agent architecture patterns.",
    highlights: [
      "Custom MCP servers for math operations and OpenWeatherMap weather data",
      "LangGraph state-machine agents with conditional tool-calling nodes",
      "Multi-transport support: stdio and HTTP MCP protocols",
      "Streamlit chat interfaces for interactive agent testing",
      "OpenAI and Groq model clients with LangChain MCP adapters",
    ],
    techStack: [
      "Python",
      "MCP SDK",
      "LangGraph",
      "LangChain",
      "Streamlit",
      "OpenAI",
      "Groq",
      "Go",
    ],
    pipeline: [
      { label: "MCP Servers", description: "Math & weather tools" },
      { label: "MCP Client", description: "Multi-server adapter" },
      { label: "LangGraph", description: "Agent orchestration" },
      { label: "Tool Nodes", description: "Conditional routing" },
      { label: "LLM", description: "OpenAI / Groq" },
      { label: "Streamlit UI", description: "Interactive chat" },
    ],
    links: {
      github: "https://github.com/Sheeza-Sheeza/MCP_Weather_Math_Sever",
    },
    metrics: [
      { label: "MCP Servers", value: "3" },
      { label: "Transports", value: "stdio + HTTP" },
      { label: "Agents", value: "LangGraph" },
    ],
  },
  {
    slug: "gemini-live-voice",
    title: "Gemini Live Voice Assistant",
    subtitle: "Real-time voice-to-voice AI",
    category: "ai",
    featured: true,
    problem:
      "Build a real-time voice assistant that streams microphone audio to an LLM and plays back native audio responses with minimal latency — accessible through a web browser.",
    description:
      "Real-time voice-to-voice AI application using Google Gemini Live API. A FastAPI WebSocket backend streams browser microphone PCM audio to Gemini and plays native audio responses back through the browser speaker. Evolved from a CLI prototype to a full web app with bidirectional audio streaming and a custom conversational persona.",
    highlights: [
      "Google Gemini Live API with native audio input/output (gemini-2.5-flash)",
      "Bidirectional PCM audio streaming over WebSockets",
      "Browser mic capture with downsampling (48 kHz → 16 kHz) and audio playback queue",
      "FastAPI backend with lightweight HTML/JS frontend",
      "Evolved from CLI prototype (Gemini_Live_) to production web architecture",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "WebSockets",
      "Google Gemini API",
      "google-genai",
      "JavaScript",
      "PyAudio",
    ],
    pipeline: [
      { label: "Browser Mic", description: "PCM capture" },
      { label: "WebSocket", description: "Bidirectional stream" },
      { label: "FastAPI", description: "Audio relay" },
      { label: "Gemini Live", description: "Native audio AI" },
      { label: "Audio Output", description: "Speaker playback" },
    ],
    links: {
      github: "https://github.com/Sheeza-Sheeza/Live_API_Chat_Audio_to_Audio",
    },
    metrics: [
      { label: "Modality", value: "Voice" },
      { label: "Protocol", value: "WebSocket" },
      { label: "Model", value: "Gemini Live" },
    ],
  },
  {
    slug: "vehicle-insurance-mlops",
    title: "Vehicle Insurance MLOps",
    subtitle: "Production ML pipeline on AWS",
    category: "mlops",
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
    category: "mlops",
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
      github: "https://github.com/Sheeza-Sheeza/MLOPS_Capstone_Project",
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
    category: "mlops",
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
    links: {
      github:
        "https://github.com/Sheeza-Sheeza/amazon_product_review_sentiment_analysis-mlops-",
    },
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
    category: "mlops",
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
    links: {
      github: "https://github.com/Sheeza-Sheeza/mlops_main",
    },
    metrics: [
      { label: "Pipelines", value: "2" },
      { label: "Datasets", value: "4" },
      { label: "Orchestration", value: "Docker Compose" },
    ],
  },
];

export const aiProjects = featuredProjects.filter((p) => p.category === "ai");
export const mlopsProjects = featuredProjects.filter(
  (p) => p.category === "mlops",
);

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
  {
    title: "Streaming Chatbot",
    description:
      "Python streaming chatbot demonstrating real-time token-by-token LLM response generation for interactive conversational AI.",
    techStack: ["Python", "OpenAI API", "Streaming"],
    links: {
      github: "https://github.com/Sheeza-Sheeza/Streaming-Chatbot",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return featuredProjects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return featuredProjects.map((project) => project.slug);
}
