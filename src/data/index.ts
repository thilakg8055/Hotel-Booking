export const HOTEL_NAME = "PSR Grand";
export const HOTEL_TAGLINE = "Where Celebrations Become Timeless Memories";

export const rooms = [
  {
    id: "double-ac",
    type: "Double Bed AC",
    price: 3000,
    tag: "Most Popular",
    description: "Spacious double-bed room with full air conditioning, premium bedding, and modern amenities for a refreshing stay.",
    features: ["Air Conditioning", "Double Bed", "Private Bathroom", "24/7 Room Service", "Free Wi-Fi", "LED TV"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    id: "double-nonac",
    type: "Double Bed Non-AC",
    price: 2000,
    tag: "Budget Friendly",
    description: "Comfortable double-bed room with ceiling fan and all essential amenities at an affordable price.",
    features: ["Ceiling Fan", "Double Bed", "Private Bathroom", "Room Service", "Free Wi-Fi", "LED TV"],
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
  },
  {
    id: "single-ac",
    type: "Single Bed AC",
    price: 2000,
    tag: "Solo Traveler",
    description: "Cozy air-conditioned single room perfect for solo business or leisure travellers seeking comfort.",
    features: ["Air Conditioning", "Single Bed", "Private Bathroom", "Room Service", "Free Wi-Fi", "LED TV"],
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
  },
  {
    id: "single-nonac",
    type: "Single Bed Non-AC",
    price: 1500,
    tag: "Economy",
    description: "Clean and comfortable single room with all basic amenities at the most economical rate.",
    features: ["Ceiling Fan", "Single Bed", "Private Bathroom", "Room Service", "Free Wi-Fi"],
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
  },
];

export const halls = [
  {
    id: "marriage",
    name: "Marriage Hall",
    count: 4,
    price: 100000,
    description: "Grand celebration halls adorned for the most special day of your life. Accommodates large gatherings with elegant décor, stage, and full event support.",
    capacity: "200–500 Guests",
    features: ["Professional Stage Setup", "Bridal Room", "Catering Kitchen", "Parking for 100+ Vehicles", "Sound & Lighting", "Decoration Included", "Backup Generator", "Air Conditioned"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    mapLink: "https://maps.app.goo.gl/8kmorDML7LL3uJFBA",
    tag: "4 Halls Available",
    color: "#4cc999ff",
  },
  {
    id: "regency",
    name: "Regency Hall",
    count: 2,
    price: 100000,
    description: "Sophisticated banquet spaces ideal for receptions, corporate events, and mid-scale celebrations with contemporary interiors.",
    capacity: "100–300 Guests",
    features: ["Elegant Interiors", "Modern AV System", "Dedicated Entry & Exit", "Catering Facility", "Ample Parking", "AC Throughout", "Event Coordinator"],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    mapLink: "https://maps.app.goo.gl/xhovs4ofBoVUYWm96",
    tag: "2 Halls Available",
    color: "#B8860B",
  },
  {
    id: "party",
    name: "Party Hall",
    count: 1,
    price: 30000,
    description: "Vibrant and versatile party space perfect for birthdays, anniversaries, kitty parties, and informal gatherings.",
    capacity: "50–150 Guests",
    features: ["Party Lighting & Sound", "Dance Floor Area", "Bar Counter Space", "Lounge Seating", "Catering Support", "Air Conditioned"],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    mapLink: "https://maps.app.goo.gl/8kmorDML7LL3uJFBA",
    tag: "1 Hall Available",
    color: "#D4A843",
  },
  {
    id: "guesthouse",
    name: "Guest House",
    count: 1,
    price: 15000,
    description: "Exclusive private guest house for intimate gatherings, family functions, and small corporate retreats with a homely atmosphere.",
    capacity: "20–60 Guests",
    features: ["Full Privacy", "Private Kitchenette", "Living Area", "Multiple Rooms", "Garden Space", "24-hr Security"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    mapLink: "https://maps.app.goo.gl/8kmorDML7LL3uJFBA",
    tag: "Exclusive Booking",
    color: "#A0845C",
  },
];

export const stats = [
  { value: 90, suffix: "+", label: "Guest Rooms" },
  { value: 8, suffix: "", label: "Event Venues" },
  { value: 500, suffix: "+", label: "Events Hosted" },
  { value: 15, suffix: "+", label: "Years of Legacy" },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80", label: "Luxury Suite" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", label: "Marriage Hall" },
  { src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80", label: "Celebration" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", label: "Regency Hall" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", label: "Guest House" },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80", label: "Party Hall" },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    event: "Wedding Reception",
    text: "The marriage hall was beyond our expectations. The team handled everything seamlessly. Our guests couldn't stop complimenting the décor and arrangements.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    event: "Corporate Event",
    text: "Booked the Regency Hall for our annual company meet. Professional setup, excellent catering, and the event coordinator was incredibly helpful.",
    rating: 5,
  },
  {
    name: "Anitha Krishnan",
    event: "Birthday Party",
    text: "The party hall was perfect for our daughter's 18th birthday. Great sound system, beautiful lighting, and the staff was very accommodating.",
    rating: 5,
  },
];
