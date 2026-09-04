export const AanchaliPattuCollections = [
  {
    slug: 'kattam-pattu',
    name: 'கட்டம் பட்டு',
    eyebrow: 'Geometric Weaves · Aanchali Pattu',
    description: 'Kattam Pattu brings the timeless beauty of handloom checks, rich textures, and delicate gold buttas into pure festive silk — a Salem favourite for weddings and family celebrations.',
    cardImage: '/aanchali-pattu/AP-KP-0101-1.png',
    heroImage: '/aanchali-pattu/AP-KP-0101-1.png',
    heroImages: [
      '/aanchali-pattu/AP-KP-0101-3.png',
    ],
    designs: [
      {
        slug: 'olive-green-antique-zari',
        altSlugs: ['ruby-kattam-silk', 'olive-kattam-silk'],
        name: 'Olive Green Antique Zari Silk',
        code: 'AP-KP-0101',
        image: '/aanchali-pattu/AP-KP-0101-1.png',
        images: [
          '/aanchali-pattu/AP-KP-0101-1.png',
          '/aanchali-pattu/AP-KP-0101-2.png',
          '/aanchali-pattu/AP-KP-0101-3.png',
          '/aanchali-pattu/AP-KP-0101-4.png',
        ],
        price: 'Rs. 17,500',
        oldPrice: 'Rs. 24,500',
        discount: '29% off',
        stock: 'In stock',
        color: 'Olive Green',
        colors: ['Olive Green', 'Antique Gold', 'Maroon', 'Bottle Green'],
        fabric: 'Pure handloom silk with woven delicate gold floral buttas',
        zari: 'Rich antique gold zari border with maroon selvedge edging and woven zari pallu',
        occasion: 'Wedding, muhurtham, festive celebrations, and family poojas',
        blouse: 'Matching olive green silk blouse piece with antique gold zari border',
        details: 'A signature Aanchali Pattu saree in rich olive green pure silk, decorated with subtle golden butta motifs across the body, paired with an antique gold zari border accented with maroon piping, and a traditionally woven pallu.',
      },
    ],
  },
]

export const getAanchaliPattuCollection = (slug) => AanchaliPattuCollections.find((c) => c.slug === slug)

export const getAanchaliPattuDesign = (collectionSlug, designSlug) => {
  const collection = getAanchaliPattuCollection(collectionSlug)
  if (!collection) return undefined
  return (
    collection.designs.find((d) => d.slug === designSlug || d.altSlugs?.includes(designSlug)) ||
    collection.designs[0]
  )
}

