"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: "rgba(245,200,66,0.05)",
          border: "1px solid rgba(245,200,66,0.2)",
          borderRadius: "12px",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.4rem",
            color: "white",
            marginBottom: "8px",
          }}
        >
          Message sent
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            color: "rgba(240,240,240,0.55)",
          }}
        >
          Thanks for reaching out — we&apos;ll respond within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="contact-label">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="contact-input"
          placeholder="Your full name"
          autoComplete="name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="contact-label">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="contact-input"
          placeholder="your@email.com"
          autoComplete="email"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="contact-label">
          Subject
        </label>
        <select id="contact-subject" name="subject" required className="contact-input" defaultValue="">
          <option value="" disabled>Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="sponsorship">Sponsorship &amp; Partnership</option>
          <option value="membership">Membership Question</option>
          <option value="media">Media &amp; Press</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="contact-label">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="contact-input"
          placeholder="How can we help you?"
        />
      </div>

      {/* Submit */}
      <button type="submit" className="contact-submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "#ff6b6b",
            textAlign: "center",
            marginTop: "12px",
          }}
        >
          Something went wrong — please try again or email us directly.
        </p>
      )}

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.8rem",
          color: "rgba(240,240,240,0.35)",
          textAlign: "center",
          marginTop: "12px",
        }}
      >
        We&apos;ll respond within 48 hours
      </p>
    </form>
  );
}
