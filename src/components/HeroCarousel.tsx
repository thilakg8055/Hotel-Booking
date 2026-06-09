// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const slides = [
//   {
//     image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=85",
//     label: "Luxury Accommodation",
//     title: "90 Rooms of Pure Comfort",
//     subtitle: "Single to Double beds, AC & Non-AC — crafted for the discerning traveller",
//     cta: "Explore Rooms",
//     link: "/rooms",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=85",
//     label: "Grand Celebrations",
//     title: "Where Weddings Become Legends",
//     subtitle: "4 majestic marriage halls ready to make your special day unforgettable",
//     cta: "View Halls",
//     link: "/halls",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&q=85",
//     label: "Regency Hall",
//     title: "Sophistication for Every Occasion",
//     subtitle: "2 premium regency halls for receptions, corporate meets & grand events",
//     cta: "Book a Hall",
//     link: "/booking",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=85",
//     label: "Party & Events",
//     title: "Celebrate in Style",
//     subtitle: "Party hall & exclusive guest house for intimate celebrations",
//     cta: "Book Now",
//     link: "/booking",
//   },
// ];

// export default function HeroCarousel() {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const next = useCallback(() => {
//     setDirection(1);
//     setCurrent(c => (c + 1) % slides.length);
//   }, []);

//   const prev = useCallback(() => {
//     setDirection(-1);
//     setCurrent(c => (c - 1 + slides.length) % slides.length);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(next, 6000);
//     return () => clearInterval(timer);
//   }, [next]);

//   return (
//     <div style={{ position: 'relative', height: '100svh', overflow: 'hidden', minHeight: 600 }}>
//       {/* Slides */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
//           style={{ position: 'absolute', inset: 0 }}
//         >
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//           {/* Overlays */}
//           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(12,11,8,0.92) 0%, rgba(12,11,8,0.5) 60%, rgba(12,11,8,0.2) 100%)' }} />
//           <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,11,8,0.8) 0%, transparent 50%)' }} />
//         </motion.div>
//       </AnimatePresence>

//       {/* Content */}
//       <div style={{
//         position: 'absolute', inset: 0,
//         display: 'flex', alignItems: 'center',
//         maxWidth: 1280, margin: '0 auto', padding: '0 24px',
//         left: '50%', transform: 'translateX(-50%)', width: '100%',
//       }}>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             style={{ maxWidth: 640 }}
//           >
//             <motion.span
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="section-label"
//               style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
//             >
//               <span style={{ width: 24, height: 1, background: '#4cc999ff', display: 'inline-block' }} />
//               {slides[current].label}
//             </motion.span>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               style={{
//                 fontFamily: 'Cormorant Garamond, serif',
//                 fontSize: 'clamp(2.5rem, 6vw, 5rem)',
//                 fontWeight: 700,
//                 lineHeight: 1.08,
//                 color: '#F5F0E8',
//                 marginBottom: 20,
//               }}
//             >
//               {slides[current].title}
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.55 }}
//               style={{ color: 'rgba(245,240,232,0.6)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 36 }}
//             >
//               {slides[current].subtitle}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.7 }}
//               style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
//             >
//               <Link to={slides[current].link} style={{ textDecoration: 'none' }}>
//                 <button className="btn-primary">{slides[current].cta}</button>
//               </Link>
//               <Link to="/contact" style={{ textDecoration: 'none' }}>
//                 <button className="btn-outline">Contact Us</button>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prev}
//         style={{
//           position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)',
//           background: 'rgba(12,11,8,0.6)', border: '1px solid rgba(201,168,76,0.25)',
//           borderRadius: '50%', width: 48, height: 48,
//           display: 'flex', alignItems: 'center', justifyContent: 'center',
//           cursor: 'pointer', color: '#4cc999ff', zIndex: 10,
//           backdropFilter: 'blur(10px)', transition: 'all 0.2s',
//         }}
//         onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.15)'; }}
//         onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(12,11,8,0.6)'; }}
//       >
//         <ChevronLeft size={20} />
//       </button>
//       <button
//         onClick={next}
//         style={{
//           position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)',
//           background: 'rgba(12,11,8,0.6)', border: '1px solid rgba(201,168,76,0.25)',
//           borderRadius: '50%', width: 48, height: 48,
//           display: 'flex', alignItems: 'center', justifyContent: 'center',
//           cursor: 'pointer', color: '#4cc999ff', zIndex: 10,
//           backdropFilter: 'blur(10px)', transition: 'all 0.2s',
//         }}
//         onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.15)'; }}
//         onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(12,11,8,0.6)'; }}
//       >
//         <ChevronRight size={20} />
//       </button>

//       {/* Slide dots */}
//       <div style={{
//         position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
//         display: 'flex', gap: 10, zIndex: 10,
//       }}>
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
//             style={{
//               width: i === current ? 32 : 8,
//               height: 8, borderRadius: 4, border: 'none',
//               background: i === current ? '#4cc999ff' : 'rgba(201,168,76,0.3)',
//               cursor: 'pointer', transition: 'all 0.3s', padding: 0,
//             }}
//           />
//         ))}
//       </div>

//       {/* Slide counter */}
//       <div style={{
//         position: 'absolute', right: 32, bottom: 40,
//         fontFamily: 'Cormorant Garamond, serif',
//         fontSize: '0.9rem', color: 'rgba(245,240,232,0.35)',
//         zIndex: 10,
//       }}>
//         <span style={{ color: '#4cc999ff', fontSize: '1.1rem', fontWeight: 600 }}>{String(current + 1).padStart(2, '0')}</span>
//         {' / '}{String(slides.length).padStart(2, '0')}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=85",
    label: "Luxury Accommodation",
    title: "90 Rooms of Pure Comfort",
    subtitle: "Single to Double beds, AC & Non-AC — crafted for the discerning traveller",
    cta: "Explore Rooms",
    link: "/rooms",
  },
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=85",
    label: "Grand Celebrations",
    title: "Where Weddings Become Legends",
    subtitle: "4 majestic marriage halls ready to make your special day unforgettable",
    cta: "View Halls",
    link: "/halls",
  },
  {
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&q=85",
    label: "Regency Hall",
    title: "Sophistication for Every Occasion",
    subtitle: "2 premium regency halls for receptions, corporate meets & grand events",
    cta: "Book a Hall",
    link: "/booking",
  },
  {
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=85",
    label: "Party & Events",
    title: "Celebrate in Style",
    subtitle: "Party hall & exclusive guest house for intimate celebrations",
    cta: "Book Now",
    link: "/booking",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [_direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(c => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(c => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div style={{ position: 'relative', height: '100svh', overflow: 'hidden', minHeight: 600 }}>
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Overlays */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(12,11,8,0.92) 0%, rgba(12,11,8,0.5) 60%, rgba(12,11,8,0.2) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,11,8,0.8) 0%, transparent 50%)' }} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center',
        maxWidth: 1280, margin: '0 auto', padding: '0 24px',
        left: '50%', transform: 'translateX(-50%)', width: '100%',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ maxWidth: 640 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="section-label"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <span style={{ width: 24, height: 1, background: '#4cc999ff', display: 'inline-block' }} />
              {slides[current].label}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                color: '#F5F0E8',
                marginBottom: 20,
              }}
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              style={{ color: 'rgba(245,240,232,0.6)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 36 }}
            >
              {slides[current].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
            >
              <Link to={slides[current].link} style={{ textDecoration: 'none' }}>
                <button className="btn-primary">{slides[current].cta}</button>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <button className="btn-outline">Contact Us</button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        style={{
          position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(12,11,8,0.6)', border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: '50%', width: 48, height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#4cc999ff', zIndex: 10,
          backdropFilter: 'blur(10px)', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.15)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(12,11,8,0.6)'; }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        style={{
          position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(12,11,8,0.6)', border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: '50%', width: 48, height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#4cc999ff', zIndex: 10,
          backdropFilter: 'blur(10px)', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.15)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(12,11,8,0.6)'; }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide dots */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 10, zIndex: 10,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            style={{
              width: i === current ? 32 : 8,
              height: 8, borderRadius: 4, border: 'none',
              background: i === current ? '#4cc999ff' : 'rgba(201,168,76,0.3)',
              cursor: 'pointer', transition: 'all 0.3s', padding: 0,
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div style={{
        position: 'absolute', right: 32, bottom: 40,
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '0.9rem', color: 'rgba(245,240,232,0.35)',
        zIndex: 10,
      }}>
        <span style={{ color: '#4cc999ff', fontSize: '1.1rem', fontWeight: 600 }}>{String(current + 1).padStart(2, '0')}</span>
        {' / '}{String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
}