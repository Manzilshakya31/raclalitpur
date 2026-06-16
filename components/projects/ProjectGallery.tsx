import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
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
        Gallery
      </h2>

      {images.length === 0 ? (
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "64px 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "rgba(240,240,240,0.4)",
            }}
          >
            Project gallery coming soon
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {images.map((src) => (
            <div
              key={src}
              style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}
            >
              <Image
                src={src}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
