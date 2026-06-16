interface ProjectObjectivesProps {
  objectives: string[];
}

export default function ProjectObjectives({ objectives }: ProjectObjectivesProps) {
  if (objectives.length === 0) return null;

  return (
    <section style={{ background: "#0a0a0a", padding: "80px 8%" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          fontWeight: 300,
          color: "white",
          marginBottom: "32px",
        }}
      >
        Objectives
      </h2>

      <ul style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "720px" }}>
        {objectives.map((objective) => (
          <li
            key={objective}
            style={{
              display: "flex",
              gap: "16px",
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(240,240,240,0.75)",
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: "8px",
                height: "8px",
                marginTop: "8px",
                background: "#f5c842",
              }}
            />
            {objective}
          </li>
        ))}
      </ul>
    </section>
  );
}
