import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Project } from "@/lib/projects";

interface ProjectStatsProps {
  project: Project;
}

export default function ProjectStats({ project }: ProjectStatsProps) {
  const stats = [
    { label: "Duration", value: project.duration },
    { label: "Volunteering Hours", value: `${project.volunteeringHours}` },
    { label: "Budget", value: project.budget },
    { label: project.category === "HEALTH SERVICE" ? "Reach" : "Impact", value: project.displayStat },
  ];

  return (
    <section
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #f5c842",
        padding: "40px 8%",
      }}
    >
      <ScrollReveal direction="up">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                paddingLeft: i > 0 ? "32px" : "0",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#f5c842",
                }}
              >
                {stat.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.6rem",
                  color: "white",
                }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
