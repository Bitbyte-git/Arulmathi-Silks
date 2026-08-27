export const varnikaPattuCollections = [
  {
    slug: 'sudar-pattu',
    name: 'Vasundhara Pattu',
    eyebrow: 'Radiant Sun Silks - Varnika Pattu',
    description: 'Vasundhara Pattu radiates like the morning sun, with bright warm tones, sun-inspired motifs, and luminous zari for weddings and grand celebrations.',
    heroImage: '/varnika-pattu/VP-VP-3.png',
    designs: [
      { slug: 'sunrise-gold-silk', name: 'Sunrise Gold Silk', code: 'VN-SP-0101', image: '/varnika-pattu/VN-SP-0101-3.png', images: ['/varnika-pattu/VN-SP-0101-3.png', '/varnika-pattu/VN-SP-0101-2.png', '/varnika-pattu/VN-SP-0101-3.png'], price: 'Rs. 21,400', oldPrice: 'Rs. 29,700', discount: '28% off', stock: 'In stock', color: 'Copper Gold', colors: ['Copper Gold', 'Antique Gold', 'Golden Sand'], fabric: 'Pure silk with sunrise gold woven body', zari: 'Warm gold sun motif zari border and pallu', occasion: 'Wedding, reception, grand celebrations', blouse: 'Gold blouse with sun motif zari border', details: 'Sunrise Gold Silk is the flagship Vasundhara Pattu saree, luminous copper-gold with warm sun motif zari for grand festive occasions.' },
    ],
  },
]

export const getVarnikaPattuCollection = (slug) => varnikaPattuCollections.find((c) => c.slug === slug)
export const getVarnikaPattuDesign = (collectionSlug, designSlug) => {
  const collection = getVarnikaPattuCollection(collectionSlug)
  return collection?.designs.find((d) => d.slug === designSlug)
}
