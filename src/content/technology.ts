import type { IconName } from "@/components/ui/Icon";

export type TechnologyGroup = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  items: { name: string; note: string }[];
};

export const technologyGroups: TechnologyGroup[] = [
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Model integration, retrieval pipelines and evaluation tooling for AI features that have to behave predictably in production.",
    icon: "ai",
    items: [
      { name: "Python", note: "Primary language for AI and data workloads" },
      { name: "PyTorch", note: "Model training, fine-tuning and inference" },
      { name: "TensorFlow", note: "Model integration and existing-model support" },
      { name: "OpenAI", note: "LLM APIs, embeddings and structured outputs" },
      { name: "LangChain", note: "Retrieval, tooling and orchestration layers" },
      { name: "LangGraph", note: "Stateful, multi-step agent workflows" },
      { name: "Hugging Face", note: "Open models, transformers and datasets" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    description:
      "Service and data layers built for clear contracts, predictable performance and long-term maintainability.",
    icon: "code",
    items: [
      { name: "FastAPI", note: "Typed, asynchronous HTTP services" },
      { name: "Flask", note: "Lightweight services and existing codebases" },
      { name: "PostgreSQL", note: "Relational data modelling and tuning" },
      { name: "Redis", note: "Caching, queues and rate limiting" },
      { name: "REST APIs", note: "Versioned, documented interfaces" },
      { name: "Celery", note: "Background and scheduled processing" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Operations",
    description:
      "Infrastructure, delivery automation and observability so releases are routine rather than events.",
    icon: "cloud",
    items: [
      { name: "AWS", note: "Compute, storage, networking and managed services" },
      { name: "Docker", note: "Reproducible build and runtime environments" },
      { name: "Kubernetes", note: "Container orchestration and scaling" },
      { name: "GitHub Actions", note: "CI/CD pipelines and release automation" },
      { name: "Terraform", note: "Infrastructure defined as version-controlled code" },
      { name: "Linux", note: "Server administration and troubleshooting" },
    ],
  },
];

/** Compact list used for the homepage technology strip. */
export const highlightedTechnologies: string[] = [
  "Python",
  "FastAPI",
  "PyTorch",
  "OpenAI",
  "LangChain",
  "LangGraph",
  "Hugging Face",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
];
