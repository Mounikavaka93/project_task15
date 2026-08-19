export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Tours / Packages', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=70',
    caption: 'Open road, new continent',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=70',
    caption: 'Islands in every shade of blue',
  },
  {
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=70',
    caption: 'Cities, peaks, and slow mornings',
  },
]

export const destinations = [
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    category: 'Beach',
    price: 1199,
    description: 'Whitewashed villages, caldera sunsets, and the endless blue of the Aegean.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=70',
    ],
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    category: 'City',
    price: 1649,
    description: 'Temple gardens, tea houses, and a quiet rhythm between old and new Japan.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=70',
    ],
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Peru',
    region: 'Americas',
    category: 'Mountains',
    price: 1890,
    description: 'Misty peaks, Incan stonework, and a journey that stays with you for life.',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=70',
    ],
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    region: 'Africa',
    category: 'City',
    price: 1420,
    description: 'Table Mountain views, coastal roads, and a city that never sits still.',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=800&q=70',
    ],
  },
  {
    id: 'amalfi',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Europe',
    category: 'Beach',
    price: 1350,
    description: 'Cliffside towns, lemon groves, and long lunches overlooking the sea.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=70',
    ],
  },
  {
    id: 'banff',
    name: 'Banff',
    country: 'Canada',
    region: 'Americas',
    category: 'Mountains',
    price: 1720,
    description: 'Turquoise lakes, alpine trails, and the kind of quiet that resets everything.',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1610878180933-123728745d22?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1561134643-668f9057cce4?auto=format&fit=crop&w=800&q=70',
    ],
  },
]

export const packages = [
  {
    id: 'bali-escape',
    name: 'Bali Escape',
    destination: 'Ubud & Uluwatu, Indonesia',
    region: 'Asia',
    category: 'Beach',
    days: 7,
    duration: '7 Days / 6 Nights',
    rating: 4.9,
    price: 1849,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=70',
    ],
    tag: 'Most loved',
    details: 'Rice terraces, temple mornings, and sunset dinners on the cliffs of Uluwatu.',
    highlights: ['Private villa stay', 'Ubud cultural tour', 'Beach club evening', 'Airport transfers'],
  },
  {
    id: 'dubai-adventure',
    name: 'Dubai Adventure',
    destination: 'Dubai, United Arab Emirates',
    region: 'Asia',
    category: 'City',
    days: 5,
    duration: '5 Days / 4 Nights',
    rating: 4.8,
    price: 1599,
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=70',
    ],
    tag: 'Trending',
    details: 'Skyline nights, desert golden hour, and a city that never runs out of spectacle.',
    highlights: ['Desert safari', 'Burj Khalifa visit', 'Marina cruise', '4-star hotel'],
  },
  {
    id: 'paris-experience',
    name: 'Paris Experience',
    destination: 'Paris, France',
    region: 'Europe',
    category: 'City',
    days: 6,
    duration: '6 Days / 5 Nights',
    rating: 4.8,
    price: 2240,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1522098543979-ffc7f79d5bb9?auto=format&fit=crop&w=800&q=70',
    ],
    tag: 'New',
    details: 'Museums, café terraces, and a Seine-side itinerary designed for first-timers and return visitors.',
    highlights: ['Louvre timed entry', 'Seine dinner cruise', 'Montmartre walk', 'Central stay'],
  },
  {
    id: 'maldives-getaway',
    name: 'Maldives Getaway',
    destination: 'North Malé Atoll, Maldives',
    region: 'Asia',
    category: 'Beach',
    days: 6,
    duration: '6 Days / 5 Nights',
    rating: 5.0,
    price: 3190,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1573843981267-be011ca0d949?auto=format&fit=crop&w=800&q=70',
    ],
    tag: 'Best seller',
    details: 'Overwater villas, glass-clear lagoons, and slow mornings with nothing on the agenda.',
    highlights: ['Overwater villa', 'Snorkeling trip', 'Sunset cruise', 'All-inclusive dining'],
  },
  {
    id: 'swiss-alps-tour',
    name: 'Swiss Alps Tour',
    destination: 'Interlaken & Zermatt, Switzerland',
    region: 'Europe',
    category: 'Mountains',
    days: 8,
    duration: '8 Days / 7 Nights',
    rating: 4.9,
    price: 2890,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=70',
    ],
    tag: 'Scenic',
    details: 'Train journeys through the Alps, lake towns, and a front-row view of the Matterhorn.',
    highlights: ['Scenic rail pass', 'Jungfrau region', 'Zermatt stay', 'Mountain guide day'],
  },
  {
    id: 'singapore-explorer',
    name: 'Singapore Explorer',
    destination: 'Singapore',
    region: 'Asia',
    category: 'City',
    days: 5,
    duration: '5 Days / 4 Nights',
    rating: 4.7,
    price: 1479,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1565967511849-76a60a69e63c?auto=format&fit=crop&w=800&q=70',
    ],
    tag: 'City break',
    details: 'Gardens by the Bay, hawker flavours, and a polished city itinerary with room to wander.',
    highlights: ['Marina Bay lights', 'Food trail', 'Gardens by the Bay', 'Boutique hotel'],
  },
]

export const destinationRegions = ['All', 'Europe', 'Asia', 'Americas', 'Africa']
export const destinationCategories = ['All', 'Beach', 'City', 'Mountains']
export const packageCategories = ['All', 'Beach', 'City', 'Mountains']
export const packageDurations = [
  { label: 'All lengths', value: 'all' },
  { label: 'Short (5 days)', value: 'short' },
  { label: 'Week (6–7 days)', value: 'week' },
  { label: 'Long (8+ days)', value: 'long' },
]

export const features = [
  {
    id: 'price',
    title: 'Best Price Guarantee',
    description: 'Transparent packages with no hidden fees. If you find a better rate, we will match it.',
  },
  {
    id: 'partners',
    title: 'Trusted Travel Partners',
    description: 'Local guides, vetted stays, and operators we have worked with for years — not last-minute listings.',
  },
  {
    id: 'support',
    title: '24/7 Customer Support',
    description: 'A real travel specialist is available around the clock, from first search to the flight home.',
  },
  {
    id: 'booking',
    title: 'Easy & Secure Booking',
    description: 'Book in minutes with encrypted payments, flexible dates, and instant confirmation.',
  },
]

export const stats = [
  { value: '10K+', label: 'Happy Travelers' },
  { value: '500+', label: 'Destinations' },
  { value: '100+', label: 'Travel Packages' },
  { value: '24/7', label: 'Support' },
]

export const testimonials = [
  {
    id: 'maya',
    name: 'Maya Chen',
    rating: 5,
    review: 'Every detail felt considered — the stay, the transfers, even the quiet extra time at sunset. I stopped planning and actually travelled.',
    destination: 'Santorini, Greece',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'daniel',
    name: 'Daniel Okonkwo',
    rating: 5,
    review: 'The Bali Escape was paced perfectly. We had a local guide who knew the island beyond the usual checklist, and support was instant when our flight changed.',
    destination: 'Bali, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'priya',
    name: 'Priya Sharma',
    rating: 4.8,
    review: 'Paris felt effortless. Timed museum entries, a beautiful hotel, and a itinerary that still left room for getting lost on purpose.',
    destination: 'Paris, France',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
]

export const footerDestinations = ['Santorini', 'Kyoto', 'Bali', 'Paris', 'Maldives', 'Swiss Alps']
export const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Tours & Packages', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)

export const durationKeys = ['all', 'short', 'week', 'long']

export const matchesDuration = (days, value) => {
  const length = Number(days)
  const key = String(value || 'all').toLowerCase().trim()
  if (key === 'short') return length <= 5
  if (key === 'week') return length >= 6 && length <= 7
  if (key === 'long') return length >= 8
  return true
}

export const parsePackageFilters = (searchParams) => {
  let category = searchParams.get('category') || 'All'
  let duration = (searchParams.get('duration') || 'all').toLowerCase().trim()
  if (durationKeys.includes(category.toLowerCase())) {
    duration = category.toLowerCase()
    category = 'All'
  }
  if (!packageCategories.includes(category)) category = 'All'
  if (!durationKeys.includes(duration)) duration = 'all'
  return { category, duration }
}
