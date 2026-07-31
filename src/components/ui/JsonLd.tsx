type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Renders structured data. Server-rendered; no client JavaScript involved. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Structured data is generated from local constants only — never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
