import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Wifi, Wind, Tv, Coffee } from 'lucide-react';
import { rooms } from '../data';

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

export default function Rooms() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Page Header */}
      <div style={{
        background: 'linear-gradient(to bottom, rgba(12,11,8,0.9), var(--bg))',
        padding: '80px 24px 60px', textAlign: 'center', position: 'relative',
        borderBottom: '1px solid var(--border)',
      }}>
        <motion.span className="section-label" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Accommodation
        </motion.span>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
          Our Guest <span className="gold-text">Rooms</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'rgba(245,240,232,0.45)', maxWidth: 500, margin: '16px auto 0', lineHeight: 1.7 }}>
          90 thoughtfully designed rooms — from cozy single rooms to spacious double suites, all at exceptional value.
        </motion.p>
      </div>

      {/* Room Cards */}
      <section style={{ padding: '72px 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
          {rooms.map((room, i) => (
            <FadeIn key={room.id} delay={i * 0.1}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                gap: 0,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 20, overflow: 'hidden',
                transition: 'all 0.4s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                {/* Image (order flips on odd) */}
                <div style={{ order: i % 2 === 0 ? 0 : 1, position: 'relative', minHeight: 300, overflow: 'hidden' }}>
                  <img src={room.image} alt={room.type}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', display: 'block' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  <div style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(12,11,8,0.85)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20, padding: '5px 14px', fontSize: '0.72rem', color: '#4cc999ff', backdropFilter: 'blur(10px)' }}>
                    {room.tag}
                  </div>
                </div>

                {/* Content */}
                <div style={{ order: i % 2 === 0 ? 1 : 0, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 700, color: '#F5F0E8', marginBottom: 12 }}>
                    {room.type}
                  </h2>
                  <p style={{ color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: 24 }}>
                    {room.description}
                  </p>

                  {/* Amenity tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                    {room.features.map(f => (
                      <span key={f} style={{
                        display: 'flex', alignItems: 'center', gap: 5,
                        background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)',
                        borderRadius: 20, padding: '4px 12px', fontSize: '0.76rem', color: 'rgba(245,240,232,0.6)',
                      }}>
                        <Check size={10} color="#4cc999ff" /> {f}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                    <div>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 700, color: '#4cc999ff', lineHeight: 1 }}>
                        ₹{room.price.toLocaleString()}
                      </div>
                      <div style={{ color: 'rgba(245,240,232,0.35)', fontSize: '0.78rem', marginTop: 4 }}>per night</div>
                    </div>
                    <Link to={`/booking?room=${room.id}`} style={{ textDecoration: 'none' }}>
                      <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                        Book This Room <ArrowRight size={15} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section style={{ padding: '72px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-label">In Every Room</span>
              <h2 className="section-title">Amenities That <span className="gold-text">Matter</span></h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {[
              { icon: Wifi, label: 'Free Wi-Fi', desc: 'High-speed internet throughout' },
              { icon: Wind, label: 'AC / Fan', desc: 'Climate comfort options' },
              { icon: Tv, label: 'LED Television', desc: 'Premium channels included' },
              { icon: Coffee, label: 'Room Service', desc: '24-hour at your doorstep' },
            ].map(({ icon: Icon, label, desc }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 16, padding: 28, textAlign: 'center' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Icon size={22} color="#4cc999ff" />
                  </div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, color: '#F5F0E8', marginBottom: 6 }}>{label}</div>
                  <div style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.82rem' }}>{desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
