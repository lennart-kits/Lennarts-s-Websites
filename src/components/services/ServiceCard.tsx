import Link from "next/link";

import { Card, CardIcon } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { TechBadge } from "@/components/ui/TechBadge";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card interactive className="group flex flex-col">
      <CardIcon name={service.icon} />

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-950">
        <Link
          href={`/services#${service.id}`}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {service.title}
        </Link>
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
        {service.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {service.technologies.slice(0, 4).map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700">
        Service details
        <Icon
          name="arrowRight"
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </span>
    </Card>
  );
}
