import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, MapPin, Users } from 'lucide-react';
import { halls } from '../data';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

export default function Halls() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Page Header */}
      <div style={{
        padding: '80px 24px 60px', textAlign: 'center',
        borderBottom: '1px solid var(--border)',
        background: 'linear-gradient(to bottom, rgba(201,168,76,0.04), var(--bg))',
      }}>
        <motion.span className="section-label" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Event Venues
        </motion.span>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
          Halls Made for <span className="gold-text">Grand Moments</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
          style={{ color: 'rgba(245,240,232,0.45)', maxWidth: 540, margin: '16px auto 0', lineHeight: 1.7 }}>
          From intimate celebrations to grand weddings with 500+ guests — PSR Grand offers 8 premier event venues to suit every occasion.
        </motion.p>
      </div>

      {/* Hall Cards — alternating layout */}
      <section style={{ padding: '72px 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 56 }}>
          {halls.map((hall, i) => (
            <FadeIn key={hall.id} delay={i * 0.08}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1.3fr 1fr' : '1fr 1.3fr',
                gap: 0,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 24, overflow: 'hidden',
                transition: 'border-color 0.4s, box-shadow 0.4s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
                  e.currentTarget.style.boxShadow = '0 24px 80px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image */}
                <div style={{ order: i % 2 === 0 ? 0 : 1, position: 'relative', minHeight: 340, overflow: 'hidden' }}>
                  <img src={hall.image} alt={hall.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s', display: 'block' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,11,8,0.5) 0%, transparent 60%)', pointerEvents: 'none' }} />

                  {/* Tag */}
                  <div style={{
                    position: 'absolute', top: 16, left: 16,
                    background: 'rgba(12,11,8,0.85)', border: '1px solid rgba(201,168,76,0.35)',
                    borderRadius: 20, padding: '5px 14px', fontSize: '0.72rem',
                    color: '#4cc999ff', backdropFilter: 'blur(10px)', letterSpacing: '0.05em',
                  }}>
                    {hall.tag}
                  </div>

                  {/* Capacity badge */}
                  <div style={{
                    position: 'absolute', bottom: 16, left: 16,
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: 'rgba(12,11,8,0.75)', borderRadius: 20, padding: '6px 14px',
                    fontSize: '0.78rem', color: 'rgba(245,240,232,0.7)', backdropFilter: 'blur(8px)',
                  }}>
                    <Users size={12} color="#4cc999ff" /> {hall.capacity}
                  </div>

                  {/* Map link */}
                  <a href={hall.mapLink} target="_blank" rel="noreferrer"
                    style={{
                      position: 'absolute', bottom: 16, right: 16,
                      display: 'flex', alignItems: 'center', gap: 6,
                      background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)',
                      borderRadius: 20, padding: '6px 14px', fontSize: '0.75rem',
                      color: '#4cc999ff', textDecoration: 'none', backdropFilter: 'blur(8px)',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.25)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.15)')}
                  >
                    <MapPin size={12} /> View on Map
                  </a>
                </div>

                {/* Content */}
                <div style={{
                  order: i % 2 === 0 ? 1 : 0,
                  padding: '44px 40px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                  {/* Count indicator */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    marginBottom: 16,
                    background: 'rgba(201,168,76,0.07)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    borderRadius: 8, padding: '4px 12px', width: 'fit-content',
                  }}>
                    <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4cc999ff' }}>
                      {hall.count} {hall.count > 1 ? 'Halls' : 'Hall'} Available
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                    fontWeight: 700, color: '#F5F0E8', marginBottom: 14,
                  }}>
                    {hall.name}
                  </h2>

                  <p style={{ color: 'rgba(245,240,232,0.5)', lineHeight: 1.75, fontSize: '0.9rem', marginBottom: 28 }}>
                    {hall.description}
                  </p>

                  {/* Features */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
                    {hall.features.map(f => (
                      <span key={f} style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        background: 'rgba(201,168,76,0.06)',
                        border: '1px solid rgba(201,168,76,0.14)',
                        borderRadius: 20, padding: '5px 12px',
                        fontSize: '0.75rem', color: 'rgba(245,240,232,0.6)',
                      }}>
                        <Check size={10} color="#4cc999ff" /> {f}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                    <div>
                      <div style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '2rem', fontWeight: 700, color: '#4cc999ff', lineHeight: 1,
                      }}>
                        ₹{hall.price.toLocaleString()}
                      </div>
                      <div style={{ color: 'rgba(245,240,232,0.35)', fontSize: '0.78rem', marginTop: 4 }}>per event</div>
                    </div>
                    <Link to={`/booking?hall=${hall.id}`} style={{ textDecoration: 'none' }}>
                      <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                        Book This Hall <ArrowRight size={15} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '72px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-label">Why PSR Grand</span>
              <h2 className="section-title">Everything You Need<br /><span className="gold-text">Under One Roof</span></h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { num: '01', label: 'Full-Day Access', desc: 'Venue yours from morning setup to midnight wrap-up' },
              { num: '02', label: 'In-House Catering', desc: 'Vegetarian & non-vegetarian menus available on request' },
              { num: '03', label: 'Décor & Setup', desc: 'Professional decoration included in the package' },
              { num: '04', label: 'Ample Parking', desc: 'Dedicated parking for 100+ vehicles' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 16, padding: 28 }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 700, color: 'rgba(201,168,76,0.2)', marginBottom: 12 }}>
                    {item.num}
                  </div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#F5F0E8', marginBottom: 8 }}>
                    {item.label}
                  </div>
                  <div style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
