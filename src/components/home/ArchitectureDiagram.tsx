import { Icon, type IconName } from "@/components/ui/Icon";

type Layer = {
  label: string;
  detail: string;
  icon: IconName;
  tag: string;
};

/**
 * Original, code-drawn illustration of a typical delivered system.
 * Intentionally abstract: no screenshots, no stock imagery, no client data.
 */
const layers: Layer[] = [
  {
    label: "Data & document sources",
    detail: "Databases, storage, internal systems",
    icon: "database",
    tag: "PostgreSQL",
  },
  {
    label: "Retrieval & processing",
    detail: "Embeddings, indexing, structured extraction",
    icon: "layers",
    tag: "LangChain",
  },
  {
    label: "Model orchestration",
    detail: "Prompting, tools, evaluation, guardrails",
    icon: "ai",
    tag: "LangGraph",
  },
  {
    label: "Application API",
    detail: "Typed endpoints, auth, rate limiting",
    icon: "code",
    tag: "FastAPI",
  },
  {
    label: "Cloud runtime",
    detail: "Containers, pipelines, monitoring",
    icon: "cloud",
    tag: "AWS",
  },
];

export function ArchitectureDiagram() {
  return (
    <div className="relative">
      {/* Depth layer behind the main panel */}
      <div
        aria-hidden="true"
        className="absolute -top-4 -right-3 hidden h-full w-full rounded-2xl border border-ink-200/70 bg-white/60 sm:block"
      />

      <figure className="relative rounded-2xl border border-ink-200/80 bg-white shadow-lifted">
        <figcaption className="flex items-center justify-between gap-3 border-b border-ink-100 px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-ink-950">
              Reference solution architecture
            </p>
            <p className="mt-0.5 text-xs text-ink-500">
              Representative structure of a delivered system
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-support-100 px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide text-support-700">
            <span className="h-1.5 w-1.5 rounded-full bg-support-500" />
            PRODUCTION
          </span>
        </figcaption>

        <div className="px-5 py-5">
          <ol className="relative space-y-2.5">
            {/* Connecting rail */}
            <span
              aria-hidden="true"
              className="absolute top-6 bottom-6 left-[1.375rem] w-px bg-gradient-to-b from-brand-200 via-brand-200 to-support-300"
            />
            {layers.map((layer) => (
              <li
                key={layer.label}
                className="relative flex items-center gap-3.5 rounded-xl border border-transparent px-2 py-2 transition-colors duration-300 hover:border-ink-100 hover:bg-ink-50/60"
              >
                <span className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-brand-100">
                  <Icon name={layer.icon} size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-ink-900">
                    {layer.label}
                  </span>
                  <span className="block truncate text-xs text-ink-500">
                    {layer.detail}
                  </span>
                </span>
                <span className="hidden shrink-0 rounded-md bg-ink-50 px-2 py-1 font-mono text-[0.6875rem] text-ink-600 ring-1 ring-ink-200/80 ring-inset sm:inline-block">
                  {layer.tag}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-b-2xl border-t border-ink-100 bg-ink-100">
          {[
            { label: "CI/CD", value: "Automated" },
            { label: "Infrastructure", value: "As code" },
            { label: "Observability", value: "Instrumented" },
          ].map((item) => (
            <div key={item.label} className="bg-white px-4 py-3.5 text-center">
              <p className="font-mono text-[0.625rem] tracking-[0.14em] text-ink-400 uppercase">
                {item.label}
              </p>
              <p className="mt-1 text-xs font-medium text-ink-800">{item.value}</p>
            </div>
          ))}
        </div>
      </figure>
    </div>
  );
}
