import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProjectSummaryProps {
  summary: string[];
  youtubeUrl?: string;
  videoTitle?: string;
}

function getYouTubeEmbedUrl(youtubeUrl: string): string | null {
  const match = youtubeUrl.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export default function ProjectSummary({ summary, youtubeUrl, videoTitle }: ProjectSummaryProps) {
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
