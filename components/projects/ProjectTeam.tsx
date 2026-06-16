import type { ProjectCoordinator } from "@/lib/projects";

interface ProjectTeamProps {
  coordinators: ProjectCoordinator[];
}

export default function ProjectTeam({ coordinators }: ProjectTeamProps) {
  if (coordinators.length === 0) return null;

  return (
    <section style={{ background: "#111111", padding: "80px 8%" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          fontWeight: 300,
          color: "white",
          marginBottom: "32px",
        }}
      >
        Project Coordinators
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {coordinators.map((coordinator) => (
          <div
            key={coordinator.name}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderTopWidth: "2px",
              borderTopColor: "#f5c842",
              padding: "24px 28px",
              minWidth: "220px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                color: "white",
                marginBottom: "6px",
              }}
            >
              {coordinator.name}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#f5c842",
              }}
            >
              {coordinator.designation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
