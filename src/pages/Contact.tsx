import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', mobile: '', email: '', message: '' });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      lines: ['+91 99999 99999', '+91 88888 88888'],
      link: 'tel:+919999999999',
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@psrgrand.com', 'bookings@psrgrand.com'],
      link: 'mailto:info@psrgrand.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      lines: ['PSR Grand, Main Road', 'Tiruthani, Tamil Nadu – 631209'],
      link: 'https://maps.app.goo.gl/8kmorDML7LL3uJFBA',
    },
    {
      icon: Clock,
      title: 'Reception Hours',
      lines: ['24/7 Open', 'Always here for you'],
      link: null,
    },
  ];

  // const venues = [
  //   { name: 'Marriage Hall', link: 'https://maps.app.goo.gl/8kmorDML7LL3uJFBA?g_st=aw', label: 'View on Google Maps' },
  //   { name: 'Regency Hall', link: 'https://maps.app.goo.gl/xhovs4ofBoVUYWm96?g_st=aw', label: 'View on Google Maps' },
  //   { name: 'Hotel Rooms', link: 'https://maps.app.goo.gl/N662ojxNj2xzHMsM6?g_st=aw', label: 'View on Google Maps' },
  // ];

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Header */}
      <div style={{ padding: '72px 24px 48px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <motion.span className="section-label" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          Get in Touch
        </motion.span>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          We're Here to <span className="gold-text">Help You</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ color: 'rgba(245,240,232,0.45)', maxWidth: 460, margin: '14px auto 0', lineHeight: 1.7 }}>
          Questions about booking, pricing, or events? Reach out — our team responds within 2 hours.
        </motion.p>
      </div>

      <section style={{ padding: '64px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 48 }}
          >
            {contactInfo.map(({ icon: Icon, title, lines, link }, i) => (
              <div key={i} style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 16, padding: '28px 24px',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon size={20} color="#4cc999ff" />
                </div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#F5F0E8', marginBottom: 8 }}>{title}</div>
                {lines.map((line, j) => (
                  link && j === 0 ? (
                    <a key={j} href={link} target={link.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                      style={{ display: 'block', color: '#4cc999ff', textDecoration: 'none', fontSize: '0.88rem', marginBottom: 2 }}>
                      {line}
                    </a>
                  ) : (
                    <div key={j} style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.85rem', marginBottom: 2 }}>{line}</div>
                  )
                ))}
              </div>
            ))}
          </motion.div>

          {/* Form + Map Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>

            {/* Message Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 36 }}
            >
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 700, color: '#F5F0E8', marginBottom: 24 }}>
                Send Us a Message
              </h3>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Check size={26} color="#4cc999ff" />
                  </div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#F5F0E8', marginBottom: 8 }}>Message Sent!</div>
                  <div style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.88rem' }}>We'll reply within 2 hours.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div>
                      <label>Your Name *</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Full name" />
                    </div>
                    <div>
                      <label>Mobile Number *</label>
                      <input name="mobile" value={form.mobile} onChange={handle} required placeholder="+91 00000 00000" type="tel" />
                    </div>
                    <div>
                      <label>Email Address</label>
                      <input name="email" value={form.email} onChange={handle} placeholder="email@example.com" type="email" />
                    </div>
                    <div>
                      <label>Message *</label>
                      <textarea name="message" value={form.message} onChange={handle} required placeholder="Tell us how we can help..." rows={4} style={{ resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 4 }}>
                      Send Message <Send size={15} />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Map + Venue Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              {/* Google Map embed */}
              {/* <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border)', flex: 1, minHeight: 260 }}>
                <iframe
                  title="PSR Grand Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.6!2d79.6210509!3d13.160026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52a5a57e02d979%3A0xec6be1ca8270300e!2sPSR+Kalyana+Mandapam+Tiruthani!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 260, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
                  allowFullScreen
                  loading="lazy"
                />
              </div> */}

              {/* Venue links */}
              {/* <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 28 }}>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 16 }}>
                  Find Our Venues
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {venues.map((v, i) => (
                    <a key={i} href={v.link} target="_blank" rel="noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '12px 16px', borderRadius: 10,
                        background: 'var(--surface2)', border: '1px solid var(--border)',
                        textDecoration: 'none', transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.3)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <MapPin size={14} color="#4cc999ffß" />
                        <span style={{ color: '#F5F0E8', fontSize: '0.88rem', fontWeight: 500 }}>{v.name}</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#4cc999ff' }}>Maps →</span>
                    </a>
                  ))}
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
