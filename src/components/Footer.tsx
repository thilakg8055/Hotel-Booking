import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Share2, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#080706',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      padding: '64px 24px 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 700, color: '#4cc999ff' }}>
              PSR Grand
            </div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.35)', marginTop: 4, marginBottom: 16 }}>
              Hotel & Event Venues
            </div>
            <p style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.88rem', lineHeight: 1.7 }}>
              Tiruthani's premier destination for luxurious stays and grand celebrations.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer"
                style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4cc999ff', textDecoration: 'none' }}>
                <Share2 size={15} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer"
                style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4cc999ff', textDecoration: 'none' }}>
                <Globe size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Jost', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', marginBottom: 20, fontWeight: 600 }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'Room Booking', path: '/rooms' },
                { label: 'Marriage Halls', path: '/halls' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Book Now', path: '/booking' },
              ].map(link => (
                <Link key={link.path} to={link.path}
                  style={{ color: 'rgba(245,240,232,0.45)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#4cc999ff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Jost', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', marginBottom: 20, fontWeight: 600 }}>
              Venues
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Marriage Hall (4)', 'Regency Hall (2)', 'Party Hall (1)', 'Guest House (1)', '90 Guest Rooms'].map(s => (
                <span key={s} style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.88rem' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Jost', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', marginBottom: 20, fontWeight: 600 }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <MapPin size={15} style={{ color: '#4cc999ff', marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  PSR Grand, Tiruthani,<br />Tamil Nadu, India
                </span>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Phone size={15} style={{ color: '#4cc999ff', flexShrink: 0 }} />
                <a href="tel:+919999999999" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.88rem', textDecoration: 'none' }}>
                  +91 99999 99999
                </a>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Mail size={15} style={{ color: '#4cc999ff', flexShrink: 0 }} />
                <a href="mailto:info@psrgrand.com" style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.88rem', textDecoration: 'none' }}>
                  info@psrgrand.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.08)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(245,240,232,0.25)', fontSize: '0.78rem' }}>
            © 2025 PSR Grand. All rights reserved.
          </p>
          <p style={{ color: 'rgba(245,240,232,0.25)', fontSize: '0.78rem' }}>
            Tiruthani, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
