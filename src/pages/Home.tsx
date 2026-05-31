import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, Users, Building2, Bed } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import { rooms, halls, stats, testimonials, galleryImages } from '../data';

function FadeIn({ children, delay = 0, y = 30 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroCarousel />

      {/* Stats Bar */}
      <section style={{ background: '#0d0c09', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(201,168,76,0.08)' }}>
          {stats.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{
                padding: '40px 24px', textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid rgba(201,168,76,0.08)' : 'none',
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#4cc999ff', lineHeight: 1 }}>
                  {s.value}{s.suffix}
                </div>
                <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', marginTop: 8 }}>
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* About Strip */}
      <section style={{ background: 'var(--surface)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <FadeIn>
            <div>
              <span className="section-label">About PSR Grand</span>
              <h2 className="section-title" style={{ marginBottom: 20 }}>
                Tiruthani's Finest<br />
                <span className="gold-text">Hotel & Event Hub</span>
              </h2>
              <p style={{ color: 'rgba(245,240,232,0.55)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 24 }}>
                Nestled in the heart of Tiruthani, PSR Grand has been the city's premier destination for luxury accommodation and grand celebrations. With 90 well-appointed rooms and 8 stunning event venues, we offer an unmatched experience for every occasion.
              </p>
              <p style={{ color: 'rgba(245,240,232,0.55)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 32 }}>
                From intimate gatherings to grand weddings hosting 500+ guests, our professional team ensures every detail is perfect.
              </p>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Get in Touch <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: Bed, label: '90 Rooms', sub: 'AC & Non-AC' },
                { icon: Building2, label: '4 Marriage Halls', sub: 'Grand Venues' },
                { icon: Users, label: '500+ Capacity', sub: 'Per Hall' },
                { icon: Star, label: '5★ Service', sub: 'Excellence' },
              ].map(({ icon: Icon, label, sub }, i) => (
                <div key={i} style={{
                  background: 'var(--surface2)', border: '1px solid var(--border)',
                  borderRadius: 16, padding: '24px 20px', textAlign: 'center',
                  transition: 'all 0.3s',
                }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                    <Icon size={20} color="#4cc999ff" />
                  </div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#F5F0E8' }}>{label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.35)', marginTop: 4 }}>{sub}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Rooms Section */}
      <section style={{ padding: '96px 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <span className="section-label">Accommodation</span>
                <h2 className="section-title">
                  Rooms Designed<br />
                  <span style={{ color: 'rgba(245,240,232,0.3)' }}>for Every Need</span>
                </h2>
              </div>
              <Link to="/rooms" style={{ textDecoration: 'none', color: 'rgba(245,240,232,0.45)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4cc999ff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')}>
                View All Rooms <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {rooms.map((room, i) => (
              <FadeIn key={room.id} delay={i * 0.1}>
                <div className="card" style={{ cursor: 'pointer' }}>
                  <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                    <img src={room.image} alt={room.type} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                    <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(12,11,8,0.8)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20, padding: '4px 12px', fontSize: '0.72rem', color: '#4cc999ff', letterSpacing: '0.08em', backdropFilter: 'blur(10px)' }}>
                      {room.tag}
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: '#F5F0E8', marginBottom: 8 }}>{room.type}</h3>
                    <p style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 20 }}>{room.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 700, color: '#4cc999ff' }}>
                          ₹{room.price.toLocaleString()}
                        </span>
                        <span style={{ color: 'rgba(245,240,232,0.35)', fontSize: '0.78rem' }}>/night</span>
                      </div>
                      <Link to="/booking" style={{ textDecoration: 'none' }}>
                        <button className="btn-primary" style={{ padding: '9px 20px', fontSize: '0.76rem' }}>Book</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Halls Section */}
      <section style={{ padding: '96px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="section-label">Event Venues</span>
              <h2 className="section-title">Grand Halls for<br /><span className="gold-text">Every Celebration</span></h2>
              <p style={{ color: 'rgba(245,240,232,0.45)', maxWidth: 520, margin: '16px auto 0', lineHeight: 1.7, fontSize: '0.95rem' }}>
                From intimate gatherings to grand weddings, our venues are crafted to make every event extraordinary.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {halls.map((hall, i) => (
              <FadeIn key={hall.id} delay={i * 0.1}>
                <div className="card" style={{ cursor: 'pointer' }}>
                  <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                    <img src={hall.image} alt={hall.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,11,8,0.7) 0%, transparent 60%)' }} />
                    <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(12,11,8,0.8)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20, padding: '4px 12px', fontSize: '0.72rem', color: '#4cc999ff', backdropFilter: 'blur(10px)' }}>
                      {hall.tag}
                    </div>
                    <div style={{ position: 'absolute', bottom: 12, left: 16, display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(245,240,232,0.7)', fontSize: '0.78rem' }}>
                      <Users size={12} /> {hall.capacity}
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: '#F5F0E8', marginBottom: 8 }}>{hall.name}</h3>
                    <p style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 20 }}>{hall.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 700, color: '#4cc999ff' }}>
                          ₹{hall.price.toLocaleString()}
                        </span>
                        <span style={{ color: 'rgba(245,240,232,0.35)', fontSize: '0.78rem' }}>/event</span>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <a href={hall.mapLink} target="_blank" rel="noreferrer"
                          style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4cc999ff', textDecoration: 'none' }}>
                          <MapPin size={14} />
                        </a>
                        <Link to="/booking" style={{ textDecoration: 'none' }}>
                          <button className="btn-primary" style={{ padding: '9px 20px', fontSize: '0.76rem' }}>Book</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section style={{ padding: '96px 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <span className="section-label">Gallery</span>
                <h2 className="section-title">A Glimpse of<br /><span className="gold-text">PSR Grand</span></h2>
              </div>
              <Link to="/gallery" style={{ textDecoration: 'none', color: 'rgba(245,240,232,0.45)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4cc999ff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')}>
                View Full Gallery <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '220px 220px', gap: 16 }}>
            {galleryImages.slice(0, 5).map((img, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{
                  borderRadius: 16, overflow: 'hidden', position: 'relative',
                  gridColumn: i === 0 ? 'span 2' : 'auto',
                  height: '100%',
                }}>
                  <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,11,8,0.6) 0%, transparent 50%)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', bottom: 14, left: 16, fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', fontWeight: 600, color: 'rgba(245,240,232,0.8)' }}>
                    {img.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '96px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="section-label">Guest Reviews</span>
              <h2 className="section-title">What Our <span className="gold-text">Guests Say</span></h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 16, padding: '32px' }}>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} fill="#4cc999ff" color="#4cc999ff" />
                    ))}
                  </div>
                  <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '0.92rem', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24 }}>
                    "{t.text}"
                  </p>
                  <div>
                    <div style={{ fontWeight: 600, color: '#F5F0E8', fontSize: '0.95rem' }}>{t.name}</div>
                    <div style={{ color: '#4cc999ff', fontSize: '0.78rem', marginTop: 2 }}>{t.event}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <FadeIn>
            <div style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, var(--surface) 100%)',
              border: '1px solid rgba(201,168,76,0.2)', borderRadius: 24,
              padding: 'clamp(40px, 6vw, 80px)', textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)', width: 300, height: 300, borderRadius: '50%', background: 'rgba(201,168,76,0.06)', filter: 'blur(60px)', pointerEvents: 'none' }} />
              <span className="section-label">Reserve Your Stay</span>
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                Ready to Create<br /><span className="gold-text">Lasting Memories?</span>
              </h2>
              <p style={{ color: 'rgba(245,240,232,0.5)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.7 }}>
                Book your stay or event venue today. Our team is ready to make your occasion truly special.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/booking" style={{ textDecoration: 'none' }}>
                  <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    Book Now <ArrowRight size={16} />
                  </button>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button className="btn-outline">Contact Us</button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
