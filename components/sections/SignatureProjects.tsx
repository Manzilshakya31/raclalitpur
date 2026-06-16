'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { projects } from '@/lib/constants'

export default function SignatureProjects() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section style={{ background: '#0a0a0a', padding: '96px 0' }}>

      {/* Section Header */}
      <div style={{ textAlign: 'center', paddingBottom: '48px',
        paddingLeft: '8vw', paddingRight: '8vw' }}>
        <div style={{ display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '16px',
          marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '1px',
            background: '#f5c842' }} />
          <span style={{ fontSize: '0.75rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#f5c842' }}>WHAT WE DO</span>
          <div style={{ width: '40px', height: '1px',
            background: '#f5c842' }} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
          color: 'white', marginBottom: '12px' }}>
          Signature Projects
        </h2>
        <p style={{ color: 'rgba(240,240,240,0.5)',
          fontSize: '0.9rem' }}>
          27 years of impact, one project at a time.
        </p>
      </div>

      {/* Scrollable Cards Container */}
      <div
        ref={scrollRef}
        className="projects-scroll"
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          minWidth: 0,
          gap: '24px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          cursor: 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onMouseDown={(e) => {
          const el = scrollRef.current
          if (!el) return
          el.style.cursor = 'grabbing'
          const startX = e.pageX - el.offsetLeft
          const scrollLeft = el.scrollLeft

          const onMove = (e: MouseEvent) => {
            const x = e.pageX - el.offsetLeft
            el.scrollLeft = scrollLeft - (x - startX) * 1.5
          }
          const onUp = () => {
            el.style.cursor = 'grab'
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseup', onUp)
          }
          window.addEventListener('mousemove', onMove)
          window.addEventListener('mouseup', onUp)
        }}
      >
        {projects.map((project, i) => {
          const gradients = [
            'linear-gradient(135deg, #1a0a00, #3d1f00)',
            'linear-gradient(135deg, #0a001a, #1f003d)',
            'linear-gradient(135deg, #001a0a, #003d1f)',
            'linear-gradient(135deg, #0a0a1a, #1f1f3d)',
          ]
          return (
            <div
              key={project.slug}
              style={{
                flex: '0 0 clamp(280px, 75vw, 380px)',
                minWidth: 'clamp(280px, 75vw, 380px)',
                height: 'clamp(380px, 50vw, 500px)',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                background: gradients[i % gradients.length],
                scrollSnapAlign: 'start',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e =>
                (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={e =>
                (e.currentTarget.style.transform = 'scale(1)')}
            >
              {/* Background image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 767px) 75vw, 380px"
              />

              {/* Bottom gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
              }} />

              {/* Card content */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0,
                right: 0, padding: '32px',
              }}>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(245,200,66,0.1)',
                  border: '1px solid rgba(245,200,66,0.3)',
                  color: '#f5c842',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  marginBottom: '12px',
                }}>
                  {project.category}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem', color: 'white',
                  marginBottom: '8px',
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.85rem', lineHeight: 1.6,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {project.description}
                </p>
                <a href={`/projects/${project.slug}`} style={{
                  display: 'inline-block',
                  color: '#f5c842', fontSize: '0.85rem',
                  marginTop: '16px', textDecoration: 'none',
                }}>
                  View Project →
                </a>
              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        .projects-scroll { padding-left: 8vw; padding-right: 8vw; }
        @media (max-width: 767px) {
          .projects-scroll { padding-left: 5vw; padding-right: 5vw; }
        }
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}
