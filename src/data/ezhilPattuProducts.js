export const ezhilPattuCollections = [
  {
    slug: 'azhagu-pattu',
    name: 'Thanga Thorana Pattu',
    eyebrow: 'Golden Festive Borders - Ezhil Pattu',
    description: 'Thanga Thorana Pattu features warm festive silk shades, paisley-inspired woven motifs, and gold zari borders made for celebrations, gifting, and graceful traditional draping.',
    heroImage: '/ezhil-pattu/EP-TT-2.png',
    heroImages: [
      '/ezhil-pattu/EP-TT-1.png',
      '/ezhil-pattu/EP-TT-2.png',
      
    ],
    designs: [
      {
        slug: 'teal-azhagu-silk',
        name: 'Amber Thanga Thorana Silk',
        code: 'EZ-TT-0101',
        image: '/ezhil-pattu/EZ-TT-0101-1.png',
        images: ['/ezhil-pattu/EZ-TT-0101-1.png', '/ezhil-pattu/EZ-TT-0101-2.png', '/ezhil-pattu/EZ-TT-0101-3.png', '/ezhil-pattu/EZ-TT-0101-4.png'],
        price: 'Rs. 17,200',
        oldPrice: 'Rs. 23,900',
        discount: '28% off',
        stock: 'In stock',
        color: 'Amber Orange',
        colors: ['Amber Orange', 'Antique Gold', 'Sindoor Red'],
        fabric: 'Pure silk saree with woven paisley butta motifs across the body',
        zari: 'Antique gold zari border with traditional floral and paisley detailing',
        occasion: 'Festivals, pooja functions, engagement gifting, and family celebrations',
        blouse: 'Matching amber silk blouse piece with gold zari border accent',
        details: 'Amber Thanga Thorana Silk from Ezhil Pattu brings a bright amber-orange body, woven paisley buttas, antique gold zari, and a rich sindoor-red border accent for a polished festive drape.',
      },
    ],
  },
]

export const getEzhilPattuCollection = (slug) => ezhilPattuCollections.find((c) => c.slug === slug)
export const getEzhilPattuDesign = (collectionSlug, designSlug) => {
  const collection = getEzhilPattuCollection(collectionSlug)
  return collection?.designs.find((d) => d.slug === designSlug)
}
