import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const allImages = [
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=85", label: "Luxury Suite", category: "Rooms" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=85", label: "Double Bed Room", category: "Rooms" },
  { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=85", label: "Standard Room", category: "Rooms" },
  { src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=900&q=85", label: "Single Room", category: "Rooms" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85", label: "Marriage Hall", category: "Halls" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85", label: "Regency Hall", category: "Halls" },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=85", label: "Party Hall", category: "Halls" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85", label: "Guest House", category: "Halls" },
  { src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&q=85", label: "Grand Celebration", category: "Events" },
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=85", label: "Wedding Setup", category: "Events" },
  { src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&q=85", label: "Banquet Dinner", category: "Events" },
  { src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=900&q=85", label: "Stage Décor", category: "Events" },
];

const categories = ['All', 'Rooms', 'Halls', 'Events'];

function GalleryItem({ img, index, onClick }: { img: typeof allImages[0]; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
      onClick={onClick}
      style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer', position: 'relative', aspectRatio: '4/3' }}
    >
      <img src={img.src} alt={img.label}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', display: 'block' }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(12,11,8,0.75) 0%, transparent 55%)',
        opacity: 0, transition: 'opacity 0.3s',
      }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
      />
      <div style={{
        position: 'absolute', bottom: 12, left: 14,
        fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 600,
        color: '#F5F0E8', pointerEvents: 'none',
      }}>
        {img.label}
      </div>
      <div style={{
        position: 'absolute', top: 12, right: 12,
        background: 'rgba(12,11,8,0.7)', border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: 20, padding: '3px 10px', fontSize: '0.68rem',
        color: '#4cc999ff', backdropFilter: 'blur(8px)',
      }}>
        {img.category}
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'All' ? allImages : allImages.filter(i => i.category === filter);

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Header */}
      <div style={{ padding: '72px 24px 48px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <motion.span className="section-label" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          Visual Tour
        </motion.span>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Explore <span className="gold-text">PSR Grand</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ color: 'rgba(245,240,232,0.45)', maxWidth: 440, margin: '14px auto 0', lineHeight: 1.7 }}>
          A glimpse inside our rooms, halls, and memorable events
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div style={{ padding: '32px 24px 0', display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '9px 22px', borderRadius: 50,
              border: `1px solid ${filter === cat ? 'rgba(201,168,76,0.5)' : 'var(--border)'}`,
              background: filter === cat ? 'rgba(201,168,76,0.1)' : 'transparent',
              color: filter === cat ? '#4cc999ff' : 'rgba(245,240,232,0.45)',
              fontFamily: 'Jost, sans-serif', fontSize: '0.82rem',
              cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section style={{ padding: '36px 24px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            layout
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <GalleryItem key={img.src} img={img} index={i} onClick={() => setLightbox(allImages.indexOf(img))} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(12,11,8,0.95)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              padding: 24, backdropFilter: 'blur(20px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: 900, width: '100%' }}
            >
              <img
                src={allImages[lightbox].src.replace('w=900', 'w=1200')}
                alt={allImages[lightbox].label}
                style={{ width: '100%', borderRadius: 16, display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: -40, left: 0,
                fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'rgba(245,240,232,0.6)',
              }}>
                {allImages[lightbox].label} · {allImages[lightbox].category}
              </div>
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: 'absolute', top: -16, right: -16,
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#4cc999ff',
                }}
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
