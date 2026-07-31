import type { IconName } from "@/components/ui/Icon";

export type Service = {
  /** Anchor id used on /services and in footer deep links. */
  id: string;
  title: string;
  /** One-line summary used on cards. */
  summary: string;
  /** Two to three sentences used on the full services page. */
  body: string;
  icon: IconName;
  capabilities: string[];
  technologies: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    summary:
      "Applied AI systems built on language models, retrieval pipelines and automation — designed for production use rather than demonstrations.",
    body: "We design and build AI applications that fit into existing business processes and data. Work typically covers retrieval augmented generation over internal documents, assistant and agent interfaces, structured extraction from unstructured content, and the evaluation and monitoring needed to keep model behaviour predictable once it reaches production.",
    icon: "ai",
    capabilities: [
      "AI application development",
      "LLM-powered products and assistants",
      "Retrieval Augmented Generation (RAG)",
      "Document processing and structured extraction",
      "AI workflow and process automation",
      "Machine learning model integration",
      "Evaluation, guardrails and monitoring",
    ],
    technologies: [
      "Python",
      "OpenAI APIs",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "PyTorch",
      "Vector databases",
    ],
    outcomes: [
      "A defined scope with measurable acceptance criteria before build starts",
      "Deployed services with logging, evaluation and cost controls in place",
      "Documentation your own engineers can maintain",
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    summary:
      "Custom backend systems, APIs and integrations — built to be maintainable by the team that inherits them.",
    body: "We develop backend services and internal platforms for organisations that need dependable engineering capacity. That includes designing and implementing REST APIs, integrating third-party and legacy systems, modelling relational data, and improving the reliability and performance of software already running in production.",
    icon: "code",
    capabilities: [
      "Custom software development",
      "Backend engineering",
      "REST API design and development",
      "Third-party and legacy system integration",
      "Relational database design and optimisation",
      "Automated testing and code quality practices",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "Celery",
    ],
    outcomes: [
      "Documented, versioned APIs with predictable contracts",
      "Test coverage on the paths that matter to the business",
      "A clean hand-over: source, infrastructure definitions and runbooks",
    ],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    summary:
      "Deployment, infrastructure and delivery automation for applications that need to run reliably and cost-predictably.",
    body: "We take applications from a working repository to a supported production environment. Work covers containerisation, cloud deployment, CI/CD pipelines, environment and secret management, observability, and the infrastructure review needed to keep running costs and failure modes under control.",
    icon: "cloud",
    capabilities: [
      "Cloud application deployment",
      "Container and orchestration setup",
      "CI/CD pipeline automation",
      "Infrastructure and cost optimisation",
      "Monitoring, logging and alerting",
      "Production system support",
    ],
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
      "Linux",
    ],
    outcomes: [
      "Reproducible environments defined in code",
      "Automated build, test and deployment pipelines",
      "Clear operational visibility into what is running and what it costs",
    ],
  },
  {
    id: "technical-consulting",
    title: "Technical Consulting",
    summary:
      "Architecture review, technical due diligence and advisory support for teams making decisions they cannot easily reverse.",
    body: "We advise product and engineering teams on architecture, technology selection and delivery approach. Engagements range from a focused review of an existing system to ongoing advisory support alongside an in-house team, and conclude with written findings and prioritised recommendations rather than a verbal summary.",
    icon: "consulting",
    capabilities: [
      "Architecture and code review",
      "Technology selection and feasibility assessment",
      "AI adoption strategy and scoping",
      "Technical due diligence support",
      "Performance and scalability analysis",
      "Engineering process and delivery advisory",
    ],
    technologies: [
      "System architecture",
      "Data modelling",
      "Security review",
      "Cost modelling",
    ],
    outcomes: [
      "A written assessment with prioritised, costed recommendations",
      "A realistic delivery plan your team can execute",
      "An explicit view of risks, trade-offs and dependencies",
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
