import type { IconName } from "@/components/ui/Icon";

/** Working principles — verifiable statements about how work is delivered. */
export const principles: { title: string; description: string; icon: IconName }[] =
  [
    {
      title: "Defined scope before development",
      description:
        "Every engagement starts with a written scope: objectives, deliverables, acceptance criteria and assumptions. Both sides know what completion looks like before any code is written.",
      icon: "document",
    },
    {
      title: "Production standards from day one",
      description:
        "Version control, code review, automated testing and reproducible environments are part of the baseline — not something retrofitted once a prototype needs to go live.",
      icon: "shield",
    },
    {
      title: "Direct technical communication",
      description:
        "You speak with the engineer doing the work. Progress is reported in writing, with the current status, what changed and what is blocked stated plainly.",
      icon: "chat",
    },
    {
      title: "No lock-in by design",
      description:
        "Source code, infrastructure definitions and documentation belong to the client and are handed over in a form another team can pick up without a rewrite.",
      icon: "handover",
    },
  ];

/** Delivery process shown on the homepage and About page. */
export const processSteps: {
  step: string;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "A structured conversation about the business objective, the existing systems, constraints and timelines. No charge, and no obligation to continue.",
  },
  {
    step: "02",
    title: "Scope & proposal",
    description:
      "A written proposal covering approach, deliverables, milestones, assumptions and commercial terms, so the decision can be made on documented facts.",
  },
  {
    step: "03",
    title: "Delivery",
    description:
      "Implementation in short iterations with working software at each milestone, code in your repository and a written progress update every cycle.",
  },
  {
    step: "04",
    title: "Hand-over & support",
    description:
      "Deployment, documentation and knowledge transfer, followed by an optional support arrangement for maintenance and further development.",
  },
];

/** Engagement models — commercial structure, no prices invented. */
export const engagementModels: {
  title: string;
  description: string;
  suitedTo: string;
  icon: IconName;
}[] = [
  {
    title: "Fixed-scope project",
    description:
      "A defined deliverable with agreed milestones and a fixed commercial envelope. Changes are handled through a documented change process.",
    suitedTo: "Well-understood scope: an integration, an API, a defined AI feature.",
    icon: "target",
  },
  {
    title: "Ongoing engineering support",
    description:
      "A recurring monthly allocation of engineering capacity for continuous development, maintenance and production support.",
    suitedTo: "Teams needing dependable long-term capacity alongside their own staff.",
    icon: "cycle",
  },
  {
    title: "Advisory & review",
    description:
      "Time-boxed architecture review, technology assessment or due diligence support, concluded with a written report.",
    suitedTo: "Decisions that are expensive to reverse — platform, vendor or design choices.",
    icon: "consulting",
  },
];

/** Why clients engage an external consultancy — factual, no claims about results. */
export const valuePoints: { title: string; description: string; icon: IconName }[] =
  [
    {
      title: "Senior engineering, applied directly",
      description:
        "Work is carried out by an experienced engineer rather than delegated down a hierarchy, which keeps the loop between decision and implementation short.",
      icon: "code",
    },
    {
      title: "AI experience grounded in delivery",
      description:
        "Language-model and retrieval systems built as production services — with evaluation, cost control and failure handling, not just prompt experiments.",
      icon: "ai",
    },
    {
      title: "European base, international delivery",
      description:
        "Registered in Estonia as a sole proprietor (FIE), registry code 16683277, operating within the EU legal and data-protection framework and working with clients across Europe and beyond.",
      icon: "globe",
    },
    {
      title: "Contract and compliance ready",
      description:
        "Standard written agreements, NDAs and data processing terms; invoicing as a VAT-registered Estonian business under VAT number EE102590816.",
      icon: "document",
    },
  ];
