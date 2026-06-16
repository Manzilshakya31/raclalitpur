import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProjectSummaryProps {
  summary: string[];
  youtubeUrl?: string;
  videoTitle?: string;
  documentUrl?: string;
  documentLabel?: string;
}

function getYouTubeEmbedUrl(youtubeUrl: string): string | null {
  const idMatch = youtubeUrl.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
  if (!idMatch) return null;

  const timeMatch = youtubeUrl.match(/[?&]t=(\d+)s?/);
  const start = timeMatch ? `?start=${timeMatch[1]}` : "";

  return `https://www.youtube.com/embed/${idMatch[1]}${start}`;
}

export default function ProjectSummary({
  summary,
  youtubeUrl,
  videoTitle,
  documentUrl,
  documentLabel,
}: ProjectSummaryProps) {
  if (summary.length === 0) return null;

  const embedUrl = youtubeUrl ? getYouTubeEmbedUrl(youtubeUrl) : null;

  return (
    <section style={{ background: "#111111", padding: "80px 8%" }}>
      <ScrollReveal direction="up">
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "760px" }}>
          {summary.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(240,240,240,0.7)",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {documentUrl && (
          <a
            href={documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "32px",
              border: "1px solid #f5c842",
              color: "#f5c842",
              padding: "14px 28px",
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textDecoration: "none",
            }}
          >
            {documentLabel ?? "View Document (PDF)"} →
          </a>
        )}

        {embedUrl && (
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "760px",
              aspectRatio: "16 / 9",
              marginTop: "40px",
            }}
          >
            <iframe
              src={embedUrl}
              title={videoTitle}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
