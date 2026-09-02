export const varnikaPattuCollections = [
  {
    slug: 'sudar-pattu',
    name: 'வசுந்தரா பட்டு',
    eyebrow: 'Radiant Sun Silks - Varnika Pattu',
    description: 'Vasundhara Pattu radiates like the morning sun, with bright warm tones, sun-inspired motifs, and luminous zari for weddings and grand celebrations.',
    heroImage: '/varnika-pattu/VP-VP-3.png',
    designs: [
      { slug: 'sunrise-gold-silk', name: 'Sunrise Gold Silk', code: 'VN-SP-0101', image: '/varnika-pattu/VN-SP-0101-3.png', images: ['/varnika-pattu/VN-SP-0101-3.png', '/varnika-pattu/VN-SP-0101-1.png', '/varnika-pattu/VN-SP-0101-2.png', '/varnika-pattu/VN-SP-0101-4.png'], price: 'Rs. 21,400', oldPrice: 'Rs. 29,700', discount: '28% off', stock: 'In stock', color: 'Copper Gold', colors: ['Copper Gold', 'Antique Gold', 'Golden Sand'], fabric: 'Pure silk with sunrise gold woven body', zari: 'Warm gold sun motif zari border and pallu', occasion: 'Wedding, reception, grand celebrations', blouse: 'Gold blouse with sun motif zari border', details: 'Sunrise Gold Silk is the flagship Vasundhara Pattu saree, luminous copper-gold with warm sun motif zari for grand festive occasions.' },
      { slug: 'olive-vasundhara-silk', name: 'Olive Vasundhara Silk', code: 'VN-SP-0102', image: '/varnika-pattu/VP-VP-3.png', images: ['/varnika-pattu/VP-VP-3.png', '/varnika-pattu/VP-VP-4.png', '/varnika-pattu/VP-VP-1.png'], price: 'Rs. 20,800', oldPrice: 'Rs. 28,900', discount: '28% off', stock: 'In stock', color: 'Olive Gold', colors: ['Olive Gold', 'Antique Gold', 'Maroon'], fabric: 'Pure silk with radiant sun-inspired woven motifs', zari: 'Antique gold zari border with a warm contrast finish', occasion: 'Wedding, reception, festive celebrations', blouse: 'Olive silk blouse with gold zari edging', details: 'Olive Vasundhara Silk brings radiant motifs to a refined olive-gold festive palette.' },
    ],
  },
  {
    slug: 'mugizh-pattu', name: 'முகிழ் பட்டு', eyebrow: 'Floral Bud Silks - Varnika Pattu', description: 'Mugizh Pattu celebrates the beauty of a flower bud through delicate motifs and luminous zari weaving.', heroImage: '/varnika-pattu/VP-VP-4.png',
    designs: [
      { slug: 'golden-mugizh-silk', name: 'Golden Mugizh Silk', code: 'VN-MG-0201', image: '/varnika-pattu/VP-VP-4.png', images: ['/varnika-pattu/VP-VP-4.png', '/varnika-pattu/VP-VP-3.png', '/varnika-pattu/VP-VP-1.png'], price: 'Rs. 18,600', oldPrice: 'Rs. 25,800', discount: '28% off', stock: 'In stock', color: 'Golden Olive', colors: ['Golden Olive', 'Champagne Gold', 'Maroon'], fabric: 'Pure silk with delicate flower-bud motifs', zari: 'Gold bud-pattern zari border and woven pallu', occasion: 'Engagement, reception, pooja, festive gifting', blouse: 'Golden olive blouse with zari edging', details: 'Golden Mugizh Silk combines delicate budding-flower motifs with a luminous gold zari finish.' },
    ],
  },
  {
    slug: 'mangolam-pattu', name: 'மாங்கோலம் பட்டு', eyebrow: 'Mango Motif Silks - Varnika Pattu', description: 'Mangolam Pattu features classic mango motifs woven into rich silk for auspicious celebrations.', heroImage: '/varnika-pattu/VP-VP-1.png',
    designs: [
      { slug: 'royal-mangolam-silk', name: 'Royal Mangolam Silk', code: 'VN-MK-0301', image: '/varnika-pattu/VP-VP-1.png', images: ['/varnika-pattu/VP-VP-1.png', '/varnika-pattu/VP-VP-3.png', '/varnika-pattu/VP-VP-4.png'], price: 'Rs. 19,800', oldPrice: 'Rs. 27,500', discount: '28% off', stock: 'In stock', color: 'Royal Gold', colors: ['Royal Gold', 'Olive', 'Maroon'], fabric: 'Pure silk with traditional mango motifs', zari: 'Rich antique-gold mango zari border and pallu', occasion: 'Muhurtham, wedding, family celebrations', blouse: 'Coordinated silk blouse with mango zari border', details: 'Royal Mangolam Silk showcases auspicious mango motifs in a rich heritage zari composition.' },
      { slug: 'maroon-mangolam-silk', name: 'Maroon Mangolam Silk', code: 'VN-MK-0302', image: '/Images/red-pose3.png', images: ['/Images/red-pose3.png', '/Images/red-pose4.png', '/Images/red-pose5.png'], price: 'Rs. 20,400', oldPrice: 'Rs. 28,300', discount: '28% off', stock: 'In stock', color: 'Festive Maroon', colors: ['Festive Maroon', 'Ruby Red', 'Antique Gold'], fabric: 'Pure silk with classic mango-pattern weaving', zari: 'Antique-gold mango zari with a grand contrast pallu', occasion: 'Wedding, reception, grand festive occasions', blouse: 'Maroon blouse with antique-gold zari edging', details: 'Maroon Mangolam Silk pairs classic mango motifs with a deep festive-maroon body and antique-gold zari.' },
    ],
  },
]

export const getVarnikaPattuCollection = (slug) => varnikaPattuCollections.find((c) => c.slug === slug)
export const getVarnikaPattuDesign = (collectionSlug, designSlug) => {
  const collection = getVarnikaPattuCollection(collectionSlug)
  return collection?.designs.find((d) => d.slug === designSlug)
}
