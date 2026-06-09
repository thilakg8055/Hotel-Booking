// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Check, ChevronRight, Phone, Mail } from 'lucide-react';
// // import { rooms, halls } from '../data';

// // type BookingType = 'room' | 'hall';

// // interface FormData {
// //   name: string;
// //   mobile: string;
// //   email: string;
// //   idProof: string;
// //   checkIn: string;
// //   checkOut: string;
// //   guests: string;
// //   roomType: string;
// //   acType: string;
// //   hallType: string;
// //   bookingType: BookingType;
// //   special: string;
// // }

// // const initialForm: FormData = {
// //   name: '', mobile: '', email: '', idProof: '',
// //   checkIn: '', checkOut: '', guests: '1',
// //   roomType: '', acType: 'ac', hallType: '',
// //   bookingType: 'room', special: '',
// // };

// // export default function Booking() {
// //   const [form, setForm] = useState<FormData>(initialForm);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [step, setStep] = useState(1);

// //   const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
// //     setForm(f => ({ ...f, [e.target.name]: e.target.value }));
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setSubmitted(true);
// //   };

// //   const selectedRoom = rooms.find(r => {
// //     if (form.roomType === 'double') return r.id === (form.acType === 'ac' ? 'double-ac' : 'double-nonac');
// //     if (form.roomType === 'single') return r.id === (form.acType === 'ac' ? 'single-ac' : 'single-nonac');
// //     return false;
// //   });

// //   const selectedHall = halls.find(h => h.id === form.hallType);

// //   const nights = form.checkIn && form.checkOut
// //     ? Math.max(0, Math.round((new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime()) / 86400000))
// //     : 0;

// //   const totalPrice = form.bookingType === 'room'
// //     ? (selectedRoom?.price || 0) * (nights || 1)
// //     : (selectedHall?.price || 0);

// //   if (submitted) {
// //     return (
// //       <div style={{ paddingTop: 80, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.6 }}
// //           style={{
// //             background: 'var(--surface)', border: '1px solid rgba(201,168,76,0.25)',
// //             borderRadius: 24, padding: '64px 48px', textAlign: 'center', maxWidth: 520,
// //           }}
// //         >
// //           <div style={{
// //             width: 72, height: 72, borderRadius: '50%',
// //             background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)',
// //             display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
// //           }}>
// //             <Check size={32} color="#4cc999ff" />
// //           </div>
// //           <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 700, color: '#F5F0E8', marginBottom: 12 }}>
// //             Booking Requested!
// //           </h2>
// //           <p style={{ color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
// //             Thank you, <strong style={{ color: '#4cc98fff' }}>{form.name}</strong>! Your booking request has been received. Our team will contact you at <strong style={{ color: '#4cc999ff' }}>{form.mobile}</strong> within 2 hours to confirm.
// //           </p>
// //           {totalPrice > 0 && (
// //             <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 12, padding: '16px 24px', marginBottom: 28 }}>
// //               <div style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.4)', marginBottom: 4 }}>Estimated Total</div>
// //               <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 700, color: '#4cc999ff' }}>
// //                 ₹{totalPrice.toLocaleString()}
// //               </div>
// //             </div>
// //           )}
// //           <button className="btn-primary" onClick={() => { setSubmitted(false); setForm(initialForm); setStep(1); }}>
// //             Make Another Booking
// //           </button>
// //         </motion.div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={{ paddingTop: 80 }}>
// //       {/* Header */}
// //       <div style={{ padding: '72px 24px 48px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
// //         <motion.span className="section-label" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
// //           Reservations
// //         </motion.span>
// //         <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
// //           Book Your <span className="gold-text">Stay or Event</span>
// //         </motion.h1>
// //       </div>

// //       <section style={{ padding: '60px 24px 80px' }}>
// //         <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'start' }}>

// //           {/* Form */}
// //           <motion.form
// //             onSubmit={handleSubmit}
// //             initial={{ opacity: 0, y: 24 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.2 }}
// //             style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: '40px' }}
// //           >
// //             {/* Booking Type Toggle */}
// //             <div style={{ marginBottom: 32 }}>
// //               <label style={{ marginBottom: 12 }}>Booking Type</label>
// //               <div style={{ display: 'flex', background: 'var(--surface2)', borderRadius: 12, padding: 4, gap: 4 }}>
// //                 {(['room', 'hall'] as BookingType[]).map(t => (
// //                   <button
// //                     key={t}
// //                     type="button"
// //                     onClick={() => setForm(f => ({ ...f, bookingType: t }))}
// //                     style={{
// //                       flex: 1, padding: '10px 16px',
// //                       borderRadius: 9, border: 'none', cursor: 'pointer',
// //                       fontFamily: 'Jost, sans-serif', fontSize: '0.85rem', fontWeight: 500,
// //                       textTransform: 'capitalize', transition: 'all 0.25s',
// //                       background: form.bookingType === t ? 'linear-gradient(135deg, 4cc999ff, 399f79ff)' : 'transparent',
// //                       color: form.bookingType === t ? '#0C0B08' : 'rgba(245,240,232,0.5)',
// //                     }}
// //                   >
// //                     {t === 'room' ? '🛏 Room Booking' : '🏛 Hall Booking'}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Section: Personal Details */}
// //             <div style={{ marginBottom: 28 }}>
// //               <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
// //                 Personal Details
// //               </div>
// //               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
// //                 <div>
// //                   <label>Full Name *</label>
// //                   <input name="name" value={form.name} onChange={handle} required placeholder="Your full name" />
// //                 </div>
// //                 <div>
// //                   <label>Mobile Number *</label>
// //                   <input name="mobile" value={form.mobile} onChange={handle} required placeholder="+91 00000 00000" type="tel" />
// //                 </div>
// //                 <div>
// //                   <label>Email Address</label>
// //                   <input name="email" value={form.email} onChange={handle} placeholder="email@example.com" type="email" />
// //                 </div>
// //                 <div>
// //                   <label>ID Proof Type *</label>
// //                   <select name="idProof" value={form.idProof} onChange={handle} required>
// //                     <option value="">Select ID Type</option>
// //                     <option value="aadhaar">Aadhaar Card</option>
// //                     <option value="passport">Passport</option>
// //                     <option value="driving">Driving Licence</option>
// //                     <option value="voter">Voter ID</option>
// //                     <option value="pan">PAN Card</option>
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Section: Stay / Event Details */}
// //             <div style={{ marginBottom: 28 }}>
// //               <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
// //                 {form.bookingType === 'room' ? 'Stay Details' : 'Event Details'}
// //               </div>
// //               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
// //                 <div>
// //                   <label>Check-in Date *</label>
// //                   <input name="checkIn" value={form.checkIn} onChange={handle} required type="date" min={new Date().toISOString().split('T')[0]} />
// //                 </div>
// //                 <div>
// //                   <label>Check-out Date *</label>
// //                   <input name="checkOut" value={form.checkOut} onChange={handle} required type="date" min={form.checkIn || new Date().toISOString().split('T')[0]} />
// //                 </div>
// //                 <div>
// //                   <label>Number of Guests *</label>
// //                   <select name="guests" value={form.guests} onChange={handle} required>
// //                     {[...Array(20)].map((_, i) => (
// //                       <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
// //                     ))}
// //                     <option value="21+">21+ Guests</option>
// //                   </select>
// //                 </div>

// //                 {form.bookingType === 'room' ? (
// //                   <>
// //                     <div>
// //                       <label>Room Type *</label>
// //                       <select name="roomType" value={form.roomType} onChange={handle} required>
// //                         <option value="">Select Room Type</option>
// //                         <option value="double">Double Bed</option>
// //                         <option value="single">Single Bed</option>
// //                       </select>
// //                     </div>
// //                     <div style={{ gridColumn: 'span 2' }}>
// //                       <label style={{ marginBottom: 10 }}>Room Preference *</label>
// //                       <div style={{ display: 'flex', gap: 12 }}>
// //                         {[{ val: 'ac', label: '❄️ AC Room' }, { val: 'nonac', label: '🌀 Non-AC Room' }].map(opt => (
// //                           <label key={opt.val} style={{
// //                             flex: 1, display: 'flex', alignItems: 'center', gap: 10,
// //                             background: form.acType === opt.val ? 'rgba(201,168,76,0.08)' : 'var(--surface2)',
// //                             border: `1px solid ${form.acType === opt.val ? 'rgba(201,168,76,0.4)' : 'var(--border)'}`,
// //                             borderRadius: 10, padding: '12px 16px', cursor: 'pointer',
// //                             color: form.acType === opt.val ? '#4cc999ff' : 'rgba(245,240,232,0.5)',
// //                             fontSize: '0.88rem', textTransform: 'none', letterSpacing: 'normal',
// //                             transition: 'all 0.2s',
// //                           }}>
// //                             <input type="radio" name="acType" value={opt.val} checked={form.acType === opt.val}
// //                               onChange={handle} style={{ width: 'auto', padding: 0, margin: 0, border: 'none', background: 'none', accentColor: '#4cc999ff' }} />
// //                             {opt.label}
// //                           </label>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </>
// //                 ) : (
// //                   <div style={{ gridColumn: 'span 1' }}>
// //                     <label>Hall Type *</label>
// //                     <select name="hallType" value={form.hallType} onChange={handle} required>
// //                       <option value="">Select Hall</option>
// //                       {halls.map(h => (
// //                         <option key={h.id} value={h.id}>{h.name} — ₹{h.price.toLocaleString()}</option>
// //                       ))}
// //                     </select>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Special Requests */}
// //             <div style={{ marginBottom: 32 }}>
// //               <label>Special Requests / Notes</label>
// //               <textarea name="special" value={form.special} onChange={handle}
// //                 placeholder="Any special requirements or requests..."
// //                 rows={3}
// //                 style={{ resize: 'vertical' }} />
// //             </div>

// //             <button type="submit" className="btn-primary"
// //               style={{ width: '100%', fontSize: '0.9rem', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
// //               Confirm Booking Request <ChevronRight size={16} />
// //             </button>

// //             <p style={{ textAlign: 'center', color: 'rgba(245,240,232,0.3)', fontSize: '0.78rem', marginTop: 16 }}>
// //               Our team will call you within 2 hours to confirm your booking.
// //             </p>
// //           </motion.form>

// //           {/* Summary Card */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.6, delay: 0.35 }}
// //             style={{ position: 'sticky', top: 100 }}
// //           >
// //             {/* Booking Summary */}
// //             <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 28, marginBottom: 20 }}>
// //               <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 20 }}>
// //                 Booking Summary
// //               </div>

// //               {form.bookingType === 'room' && selectedRoom ? (
// //                 <>
// //                   <div style={{ background: 'rgba(201,168,76,0.06)', borderRadius: 12, padding: '16px', marginBottom: 16 }}>
// //                     <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#F5F0E8', marginBottom: 4 }}>{selectedRoom.type}</div>
// //                     <div style={{ color: '#4cc999ff', fontSize: '0.82rem' }}>₹{selectedRoom.price.toLocaleString()} / night</div>
// //                   </div>
// //                   {nights > 0 && (
// //                     <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
// //                       <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(245,240,232,0.5)', fontSize: '0.85rem' }}>
// //                         <span>{nights} Night{nights > 1 ? 's' : ''}</span>
// //                         <span>× ₹{selectedRoom.price.toLocaleString()}</span>
// //                       </div>
// //                       <div style={{ borderTop: '1px solid var(--border)', paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
// //                         <span style={{ fontWeight: 600, color: '#F5F0E8' }}>Total</span>
// //                         <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: '#4cc999ff' }}>₹{totalPrice.toLocaleString()}</span>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </>
// //               ) : form.bookingType === 'hall' && selectedHall ? (
// //                 <>
// //                   <div style={{ background: 'rgba(201,168,76,0.06)', borderRadius: 12, padding: '16px', marginBottom: 16 }}>
// //                     <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#F5F0E8', marginBottom: 4 }}>{selectedHall.name}</div>
// //                     <div style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.8rem' }}>Capacity: {selectedHall.capacity}</div>
// //                   </div>
// //                   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
// //                     <span style={{ fontWeight: 600, color: '#F5F0E8' }}>Hall Charge</span>
// //                     <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: '#4cc999ff' }}>₹{selectedHall.price.toLocaleString()}</span>
// //                   </div>
// //                 </>
// //               ) : (
// //                 <p style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.85rem', textAlign: 'center', padding: '20px 0' }}>
// //                   Select a {form.bookingType} to see pricing
// //                 </p>
// //               )}
// //             </div>

// //             {/* Pricing Reference */}
// //             <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 28, marginBottom: 20 }}>
// //               <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 16 }}>
// //                 Room Rates
// //               </div>
// //               {rooms.map(r => (
// //                 <div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(201,168,76,0.06)', fontSize: '0.82rem' }}>
// //                   <span style={{ color: 'rgba(245,240,232,0.5)' }}>{r.type}</span>
// //                   <span style={{ color: '#4cc999ff', fontWeight: 500 }}>₹{r.price.toLocaleString()}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Contact */}
// //             <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 28 }}>
// //               <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 16 }}>
// //                 Need Help?
// //               </div>
// //               <a href="tel:+919999999999" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(245,240,232,0.65)', textDecoration: 'none', fontSize: '0.88rem', marginBottom: 12 }}>
// //                 <Phone size={14} color="#4cc999ff" /> +91 99999 99999
// //               </a>
// //               <a href="mailto:info@psrgrand.com" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(245,240,232,0.65)', textDecoration: 'none', fontSize: '0.88rem' }}>
// //                 <Mail size={14} color="#4cc999ff" /> info@psrgrand.com
// //               </a>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </section>
// //     </div>
// //   );
// // }



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Check, ChevronRight, Phone, Mail } from 'lucide-react';
// import { rooms, halls } from '../data';

// type BookingType = 'room' | 'hall';

// interface FormData {
//   name: string;
//   mobile: string;
//   email: string;
//   idProof: string;
//   checkIn: string;
//   checkOut: string;
//   guests: string;
//   roomType: string;
//   acType: string;
//   hallType: string;
//   bookingType: BookingType;
//   special: string;
// }

// const initialForm: FormData = {
//   name: '', mobile: '', email: '', idProof: '',
//   checkIn: '', checkOut: '', guests: '1',
//   roomType: '', acType: 'ac', hallType: '',
//   bookingType: 'room', special: '',
// };

// export default function Booking() {
//   const [form, setForm] = useState<FormData>(initialForm);
//   const [submitted, setSubmitted] = useState(false);
//   const [_step, setStep] = useState(1);

//   const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setForm(f => ({ ...f, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const selectedRoom = rooms.find(r => {
//     if (form.roomType === 'double') return r.id === (form.acType === 'ac' ? 'double-ac' : 'double-nonac');
//     if (form.roomType === 'single') return r.id === (form.acType === 'ac' ? 'single-ac' : 'single-nonac');
//     return false;
//   });

//   const selectedHall = halls.find(h => h.id === form.hallType);

//   const nights = form.checkIn && form.checkOut
//     ? Math.max(0, Math.round((new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime()) / 86400000))
//     : 0;

//   const totalPrice = form.bookingType === 'room'
//     ? (selectedRoom?.price || 0) * (nights || 1)
//     : (selectedHall?.price || 0);

//   if (submitted) {
//     return (
//       <div style={{ paddingTop: 80, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           style={{
//             background: 'var(--surface)', border: '1px solid rgba(201,168,76,0.25)',
//             borderRadius: 24, padding: '64px 48px', textAlign: 'center', maxWidth: 520,
//           }}
//         >
//           <div style={{
//             width: 72, height: 72, borderRadius: '50%',
//             background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)',
//             display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
//           }}>
//             <Check size={32} color="#4cc999ff" />
//           </div>
//           <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 700, color: '#F5F0E8', marginBottom: 12 }}>
//             Booking Requested!
//           </h2>
//           <p style={{ color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
//             Thank you, <strong style={{ color: '#4cc98fff' }}>{form.name}</strong>! Your booking request has been received. Our team will contact you at <strong style={{ color: '#4cc999ff' }}>{form.mobile}</strong> within 2 hours to confirm.
//           </p>
//           {totalPrice > 0 && (
//             <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 12, padding: '16px 24px', marginBottom: 28 }}>
//               <div style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.4)', marginBottom: 4 }}>Estimated Total</div>
//               <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 700, color: '#4cc999ff' }}>
//                 ₹{totalPrice.toLocaleString()}
//               </div>
//             </div>
//           )}
//           <button className="btn-primary" onClick={() => { setSubmitted(false); setForm(initialForm); setStep(1); }}>
//             Make Another Booking
//           </button>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div style={{ paddingTop: 80 }}>
//       {/* Header */}
//       <div style={{ padding: '72px 24px 48px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
//         <motion.span className="section-label" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
//           Reservations
//         </motion.span>
//         <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
//           Book Your <span className="gold-text">Stay or Event</span>
//         </motion.h1>
//       </div>

//       <section style={{ padding: '60px 24px 80px' }}>
//         <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'start' }}>

//           {/* Form */}
//           <motion.form
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: '40px' }}
//           >
//             {/* Booking Type Toggle */}
//             <div style={{ marginBottom: 32 }}>
//               <label style={{ marginBottom: 12 }}>Booking Type</label>
//               <div style={{ display: 'flex', background: 'var(--surface2)', borderRadius: 12, padding: 4, gap: 4 }}>
//                 {(['room', 'hall'] as BookingType[]).map(t => (
//                   <button
//                     key={t}
//                     type="button"
//                     onClick={() => setForm(f => ({ ...f, bookingType: t }))}
//                     style={{
//                       flex: 1, padding: '10px 16px',
//                       borderRadius: 9, border: 'none', cursor: 'pointer',
//                       fontFamily: 'Jost, sans-serif', fontSize: '0.85rem', fontWeight: 500,
//                       textTransform: 'capitalize', transition: 'all 0.25s',
//                       background: form.bookingType === t ? 'linear-gradient(135deg, 4cc999ff, 399f79ff)' : 'transparent',
//                       color: form.bookingType === t ? '#0C0B08' : 'rgba(245,240,232,0.5)',
//                     }}
//                   >
//                     {t === 'room' ? '🛏 Room Booking' : '🏛 Hall Booking'}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Section: Personal Details */}
//             <div style={{ marginBottom: 28 }}>
//               <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
//                 Personal Details
//               </div>
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
//                 <div>
//                   <label>Full Name *</label>
//                   <input name="name" value={form.name} onChange={handle} required placeholder="Your full name" />
//                 </div>
//                 <div>
//                   <label>Mobile Number *</label>
//                   <input name="mobile" value={form.mobile} onChange={handle} required placeholder="+91 00000 00000" type="tel" />
//                 </div>
//                 <div>
//                   <label>Email Address</label>
//                   <input name="email" value={form.email} onChange={handle} placeholder="email@example.com" type="email" />
//                 </div>
//                 <div>
//                   <label>ID Proof Type *</label>
//                   <select name="idProof" value={form.idProof} onChange={handle} required>
//                     <option value="">Select ID Type</option>
//                     <option value="aadhaar">Aadhaar Card</option>
//                     <option value="passport">Passport</option>
//                     <option value="driving">Driving Licence</option>
//                     <option value="voter">Voter ID</option>
//                     <option value="pan">PAN Card</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Section: Stay / Event Details */}
//             <div style={{ marginBottom: 28 }}>
//               <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
//                 {form.bookingType === 'room' ? 'Stay Details' : 'Event Details'}
//               </div>
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
//                 <div>
//                   <label>Check-in Date *</label>
//                   <input name="checkIn" value={form.checkIn} onChange={handle} required type="date" min={new Date().toISOString().split('T')[0]} />
//                 </div>
//                 <div>
//                   <label>Check-out Date *</label>
//                   <input name="checkOut" value={form.checkOut} onChange={handle} required type="date" min={form.checkIn || new Date().toISOString().split('T')[0]} />
//                 </div>
//                 <div>
//                   <label>Number of Guests *</label>
//                   <select name="guests" value={form.guests} onChange={handle} required>
//                     {[...Array(20)].map((_, i) => (
//                       <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
//                     ))}
//                     <option value="21+">21+ Guests</option>
//                   </select>
//                 </div>

//                 {form.bookingType === 'room' ? (
//                   <>
//                     <div>
//                       <label>Room Type *</label>
//                       <select name="roomType" value={form.roomType} onChange={handle} required>
//                         <option value="">Select Room Type</option>
//                         <option value="double">Double Bed</option>
//                         <option value="single">Single Bed</option>
//                       </select>
//                     </div>
//                     <div style={{ gridColumn: 'span 2' }}>
//                       <label style={{ marginBottom: 10 }}>Room Preference *</label>
//                       <div style={{ display: 'flex', gap: 12 }}>
//                         {[{ val: 'ac', label: '❄️ AC Room' }, { val: 'nonac', label: '🌀 Non-AC Room' }].map(opt => (
//                           <label key={opt.val} style={{
//                             flex: 1, display: 'flex', alignItems: 'center', gap: 10,
//                             background: form.acType === opt.val ? 'rgba(201,168,76,0.08)' : 'var(--surface2)',
//                             border: `1px solid ${form.acType === opt.val ? 'rgba(201,168,76,0.4)' : 'var(--border)'}`,
//                             borderRadius: 10, padding: '12px 16px', cursor: 'pointer',
//                             color: form.acType === opt.val ? '#4cc999ff' : 'rgba(245,240,232,0.5)',
//                             fontSize: '0.88rem', textTransform: 'none', letterSpacing: 'normal',
//                             transition: 'all 0.2s',
//                           }}>
//                             <input type="radio" name="acType" value={opt.val} checked={form.acType === opt.val}
//                               onChange={handle} style={{ width: 'auto', padding: 0, margin: 0, border: 'none', background: 'none', accentColor: '#4cc999ff' }} />
//                             {opt.label}
//                           </label>
//                         ))}
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <div style={{ gridColumn: 'span 1' }}>
//                     <label>Hall Type *</label>
//                     <select name="hallType" value={form.hallType} onChange={handle} required>
//                       <option value="">Select Hall</option>
//                       {halls.map(h => (
//                         <option key={h.id} value={h.id}>{h.name} — ₹{h.price.toLocaleString()}</option>
//                       ))}
//                     </select>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Special Requests */}
//             <div style={{ marginBottom: 32 }}>
//               <label>Special Requests / Notes</label>
//               <textarea name="special" value={form.special} onChange={handle}
//                 placeholder="Any special requirements or requests..."
//                 rows={3}
//                 style={{ resize: 'vertical' }} />
//             </div>

//             <button type="submit" className="btn-primary"
//               style={{ width: '100%', fontSize: '0.9rem', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
//               Confirm Booking Request <ChevronRight size={16} />
//             </button>

//             <p style={{ textAlign: 'center', color: 'rgba(245,240,232,0.3)', fontSize: '0.78rem', marginTop: 16 }}>
//               Our team will call you within 2 hours to confirm your booking.
//             </p>
//           </motion.form>

//           {/* Summary Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.35 }}
//             style={{ position: 'sticky', top: 100 }}
//           >
//             {/* Booking Summary */}
//             <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 28, marginBottom: 20 }}>
//               <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 20 }}>
//                 Booking Summary
//               </div>

//               {form.bookingType === 'room' && selectedRoom ? (
//                 <>
//                   <div style={{ background: 'rgba(201,168,76,0.06)', borderRadius: 12, padding: '16px', marginBottom: 16 }}>
//                     <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#F5F0E8', marginBottom: 4 }}>{selectedRoom.type}</div>
//                     <div style={{ color: '#4cc999ff', fontSize: '0.82rem' }}>₹{selectedRoom.price.toLocaleString()} / night</div>
//                   </div>
//                   {nights > 0 && (
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//                       <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(245,240,232,0.5)', fontSize: '0.85rem' }}>
//                         <span>{nights} Night{nights > 1 ? 's' : ''}</span>
//                         <span>× ₹{selectedRoom.price.toLocaleString()}</span>
//                       </div>
//                       <div style={{ borderTop: '1px solid var(--border)', paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
//                         <span style={{ fontWeight: 600, color: '#F5F0E8' }}>Total</span>
//                         <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: '#4cc999ff' }}>₹{totalPrice.toLocaleString()}</span>
//                       </div>
//                     </div>
//                   )}
//                 </>
//               ) : form.bookingType === 'hall' && selectedHall ? (
//                 <>
//                   <div style={{ background: 'rgba(201,168,76,0.06)', borderRadius: 12, padding: '16px', marginBottom: 16 }}>
//                     <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#F5F0E8', marginBottom: 4 }}>{selectedHall.name}</div>
//                     <div style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.8rem' }}>Capacity: {selectedHall.capacity}</div>
//                   </div>
//                   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                     <span style={{ fontWeight: 600, color: '#F5F0E8' }}>Hall Charge</span>
//                     <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: '#4cc999ff' }}>₹{selectedHall.price.toLocaleString()}</span>
//                   </div>
//                 </>
//               ) : (
//                 <p style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.85rem', textAlign: 'center', padding: '20px 0' }}>
//                   Select a {form.bookingType} to see pricing
//                 </p>
//               )}
//             </div>

//             {/* Pricing Reference */}
//             <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 28, marginBottom: 20 }}>
//               <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 16 }}>
//                 Room Rates
//               </div>
//               {rooms.map(r => (
//                 <div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(201,168,76,0.06)', fontSize: '0.82rem' }}>
//                   <span style={{ color: 'rgba(245,240,232,0.5)' }}>{r.type}</span>
//                   <span style={{ color: '#4cc999ff', fontWeight: 500 }}>₹{r.price.toLocaleString()}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Contact */}
//             <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 28 }}>
//               <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 16 }}>
//                 Need Help?
//               </div>
//               <a href="tel:+919999999999" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(245,240,232,0.65)', textDecoration: 'none', fontSize: '0.88rem', marginBottom: 12 }}>
//                 <Phone size={14} color="#4cc999ff" /> +91 99999 99999
//               </a>
//               <a href="mailto:info@psrgrand.com" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(245,240,232,0.65)', textDecoration: 'none', fontSize: '0.88rem' }}>
//                 <Mail size={14} color="#4cc999ff" /> info@psrgrand.com
//               </a>
//             </div>
//           </motion.div>

//         </div>
//       </section>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, Phone, Mail } from 'lucide-react';
import { rooms, halls } from '../data';

type BookingType = 'room' | 'hall';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  idProof: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  acType: string;
  hallType: string;
  bookingType: BookingType;
  special: string;
}

const initialForm: FormData = {
  name: '', mobile: '', email: '', idProof: '',
  checkIn: '', checkOut: '', guests: '1',
  roomType: '', acType: 'ac', hallType: '',
  bookingType: 'room', special: '',
};

export default function Booking() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedRoom = rooms.find(r => {
    if (form.roomType === 'double') return r.id === (form.acType === 'ac' ? 'double-ac' : 'double-nonac');
    if (form.roomType === 'single') return r.id === (form.acType === 'ac' ? 'single-ac' : 'single-nonac');
    return false;
  });

  const selectedHall = halls.find(h => h.id === form.hallType);

  const nights = form.checkIn && form.checkOut
    ? Math.max(0, Math.round((new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime()) / 86400000))
    : 0;

  const totalPrice = form.bookingType === 'room'
    ? (selectedRoom?.price || 0) * (nights || 1)
    : (selectedHall?.price || 0);

  if (submitted) {
    return (
      <div style={{ paddingTop: 80, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'var(--surface)', border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: 24, padding: '64px 48px', textAlign: 'center', maxWidth: 520,
          }}
        >
          <div style={{
            width: 72, height: 72, borderRadius: '50%',
            background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
          }}>
            <Check size={32} color="#4cc999ff" />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 700, color: '#F5F0E8', marginBottom: 12 }}>
            Booking Requested!
          </h2>
          <p style={{ color: 'rgba(245,240,232,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
            Thank you, <strong style={{ color: '#4cc98fff' }}>{form.name}</strong>! Your booking request has been received. Our team will contact you at <strong style={{ color: '#4cc999ff' }}>{form.mobile}</strong> within 2 hours to confirm.
          </p>
          {totalPrice > 0 && (
            <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 12, padding: '16px 24px', marginBottom: 28 }}>
              <div style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.4)', marginBottom: 4 }}>Estimated Total</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 700, color: '#4cc999ff' }}>
                ₹{totalPrice.toLocaleString()}
              </div>
            </div>
          )}
          <button className="btn-primary" onClick={() => { setSubmitted(false); setForm(initialForm); }}>
            Make Another Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Header */}
      <div style={{ padding: '72px 24px 48px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <motion.span className="section-label" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          Reservations
        </motion.span>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Book Your <span className="gold-text">Stay or Event</span>
        </motion.h1>
      </div>

      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'start' }}>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: '40px' }}
          >
            {/* Booking Type Toggle */}
            <div style={{ marginBottom: 32 }}>
              <label style={{ marginBottom: 12 }}>Booking Type</label>
              <div style={{ display: 'flex', background: 'var(--surface2)', borderRadius: 12, padding: 4, gap: 4 }}>
                {(['room', 'hall'] as BookingType[]).map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm(f => ({ ...f, bookingType: t }))}
                    style={{
                      flex: 1, padding: '10px 16px',
                      borderRadius: 9, border: 'none', cursor: 'pointer',
                      fontFamily: 'Jost, sans-serif', fontSize: '0.85rem', fontWeight: 500,
                      textTransform: 'capitalize', transition: 'all 0.25s',
                      background: form.bookingType === t ? 'linear-gradient(135deg, 4cc999ff, 399f79ff)' : 'transparent',
                      color: form.bookingType === t ? '#0C0B08' : 'rgba(245,240,232,0.5)',
                    }}
                  >
                    {t === 'room' ? '🛏 Room Booking' : '🏛 Hall Booking'}
                  </button>
                ))}
              </div>
            </div>

            {/* Section: Personal Details */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
                Personal Details
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handle} required placeholder="Your full name" />
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
                  <label>ID Proof Type *</label>
                  <select name="idProof" value={form.idProof} onChange={handle} required>
                    <option value="">Select ID Type</option>
                    <option value="aadhaar">Aadhaar Card</option>
                    <option value="passport">Passport</option>
                    <option value="driving">Driving Licence</option>
                    <option value="voter">Voter ID</option>
                    <option value="pan">PAN Card</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Stay / Event Details */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
                {form.bookingType === 'room' ? 'Stay Details' : 'Event Details'}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label>Check-in Date *</label>
                  <input name="checkIn" value={form.checkIn} onChange={handle} required type="date" min={new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                  <label>Check-out Date *</label>
                  <input name="checkOut" value={form.checkOut} onChange={handle} required type="date" min={form.checkIn || new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                  <label>Number of Guests *</label>
                  <select name="guests" value={form.guests} onChange={handle} required>
                    {[...Array(20)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="21+">21+ Guests</option>
                  </select>
                </div>

                {form.bookingType === 'room' ? (
                  <>
                    <div>
                      <label>Room Type *</label>
                      <select name="roomType" value={form.roomType} onChange={handle} required>
                        <option value="">Select Room Type</option>
                        <option value="double">Double Bed</option>
                        <option value="single">Single Bed</option>
                      </select>
                    </div>
                    <div style={{ gridColumn: 'span 2' }}>
                      <label style={{ marginBottom: 10 }}>Room Preference *</label>
                      <div style={{ display: 'flex', gap: 12 }}>
                        {[{ val: 'ac', label: '❄️ AC Room' }, { val: 'nonac', label: '🌀 Non-AC Room' }].map(opt => (
                          <label key={opt.val} style={{
                            flex: 1, display: 'flex', alignItems: 'center', gap: 10,
                            background: form.acType === opt.val ? 'rgba(201,168,76,0.08)' : 'var(--surface2)',
                            border: `1px solid ${form.acType === opt.val ? 'rgba(201,168,76,0.4)' : 'var(--border)'}`,
                            borderRadius: 10, padding: '12px 16px', cursor: 'pointer',
                            color: form.acType === opt.val ? '#4cc999ff' : 'rgba(245,240,232,0.5)',
                            fontSize: '0.88rem', textTransform: 'none', letterSpacing: 'normal',
                            transition: 'all 0.2s',
                          }}>
                            <input type="radio" name="acType" value={opt.val} checked={form.acType === opt.val}
                              onChange={handle} style={{ width: 'auto', padding: 0, margin: 0, border: 'none', background: 'none', accentColor: '#4cc999ff' }} />
                            {opt.label}
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div style={{ gridColumn: 'span 1' }}>
                    <label>Hall Type *</label>
                    <select name="hallType" value={form.hallType} onChange={handle} required>
                      <option value="">Select Hall</option>
                      {halls.map(h => (
                        <option key={h.id} value={h.id}>{h.name} — ₹{h.price.toLocaleString()}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Special Requests */}
            <div style={{ marginBottom: 32 }}>
              <label>Special Requests / Notes</label>
              <textarea name="special" value={form.special} onChange={handle}
                placeholder="Any special requirements or requests..."
                rows={3}
                style={{ resize: 'vertical' }} />
            </div>

            <button type="submit" className="btn-primary"
              style={{ width: '100%', fontSize: '0.9rem', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              Confirm Booking Request <ChevronRight size={16} />
            </button>

            <p style={{ textAlign: 'center', color: 'rgba(245,240,232,0.3)', fontSize: '0.78rem', marginTop: 16 }}>
              Our team will call you within 2 hours to confirm your booking.
            </p>
          </motion.form>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ position: 'sticky', top: 100 }}
          >
            {/* Booking Summary */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 28, marginBottom: 20 }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 20 }}>
                Booking Summary
              </div>

              {form.bookingType === 'room' && selectedRoom ? (
                <>
                  <div style={{ background: 'rgba(201,168,76,0.06)', borderRadius: 12, padding: '16px', marginBottom: 16 }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#F5F0E8', marginBottom: 4 }}>{selectedRoom.type}</div>
                    <div style={{ color: '#4cc999ff', fontSize: '0.82rem' }}>₹{selectedRoom.price.toLocaleString()} / night</div>
                  </div>
                  {nights > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(245,240,232,0.5)', fontSize: '0.85rem' }}>
                        <span>{nights} Night{nights > 1 ? 's' : ''}</span>
                        <span>× ₹{selectedRoom.price.toLocaleString()}</span>
                      </div>
                      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 10, display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 600, color: '#F5F0E8' }}>Total</span>
                        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: '#4cc999ff' }}>₹{totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                </>
              ) : form.bookingType === 'hall' && selectedHall ? (
                <>
                  <div style={{ background: 'rgba(201,168,76,0.06)', borderRadius: 12, padding: '16px', marginBottom: 16 }}>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#F5F0E8', marginBottom: 4 }}>{selectedHall.name}</div>
                    <div style={{ color: 'rgba(245,240,232,0.45)', fontSize: '0.8rem' }}>Capacity: {selectedHall.capacity}</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 600, color: '#F5F0E8' }}>Hall Charge</span>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: '#4cc999ff' }}>₹{selectedHall.price.toLocaleString()}</span>
                  </div>
                </>
              ) : (
                <p style={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.85rem', textAlign: 'center', padding: '20px 0' }}>
                  Select a {form.bookingType} to see pricing
                </p>
              )}
            </div>

            {/* Pricing Reference */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 28, marginBottom: 20 }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 16 }}>
                Room Rates
              </div>
              {rooms.map(r => (
                <div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(201,168,76,0.06)', fontSize: '0.82rem' }}>
                  <span style={{ color: 'rgba(245,240,232,0.5)' }}>{r.type}</span>
                  <span style={{ color: '#4cc999ff', fontWeight: 500 }}>₹{r.price.toLocaleString()}</span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 28 }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4cc999ff', fontWeight: 600, marginBottom: 16 }}>
                Need Help?
              </div>
              <a href="tel:+919999999999" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(245,240,232,0.65)', textDecoration: 'none', fontSize: '0.88rem', marginBottom: 12 }}>
                <Phone size={14} color="#4cc999ff" /> +91 99999 99999
              </a>
              <a href="mailto:info@psrgrand.com" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(245,240,232,0.65)', textDecoration: 'none', fontSize: '0.88rem' }}>
                <Mail size={14} color="#4cc999ff" /> info@psrgrand.com
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}