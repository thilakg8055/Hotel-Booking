import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Halls', path: '/halls' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? 'rgba(12,11,8,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 700, color: '#4cc999ff', lineHeight: 1 }}>
                PSR Grand
              </div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.45)', marginTop: 2 }}>
                Hotel & Event Venues
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: location.pathname === link.path ? '#4cc999ff' : 'rgba(245,240,232,0.65)',
                  transition: 'color 0.2s',
                  fontWeight: 500,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4cc999ff')}
                onMouseLeave={e => (e.currentTarget.style.color = location.pathname === link.path ? '#4cc999ff' : 'rgba(245,240,232,0.65)')}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/booking" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.78rem' }}>
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="tel:+919999999999" style={{ color: '#4cc999ff', display: 'none' }}>
              <Phone size={18} />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', color: '#F5F0E8', cursor: 'pointer', padding: 4 }}
              className="hide-desktop"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 60,
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(12,11,8,0.98)',
              backdropFilter: 'blur(30px)',
              borderBottom: '1px solid rgba(201,168,76,0.15)',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    color: location.pathname === link.path ? '#4cc999ff' : 'rgba(245,240,232,0.75)',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/booking" style={{ textDecoration: 'none', marginTop: 8 }}>
                <button className="btn-primary" style={{ width: '100%' }}>Book Now</button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
