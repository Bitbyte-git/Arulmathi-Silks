export const mayuraPattuCollections = [
  {
    slug: 'mayil-peru',
    altSlugs: ['vaira-mayil'],
    name: 'வைர மயில்',
    eyebrow: 'Peacock Feather Silks · Mayura Pattu',
    description: 'Vaira Mayil captures the full glory of the peacock — feather and sprig motifs woven across deep jewel-toned silk, with a vibrant contrast border for weddings and grand festive celebrations.',
    cardImage: '/mayura-pattu/MY-VM-0101-2.png',
    heroImage: '/mayura-pattu/MY-VM-0101-2.png',
    heroImages: ['/mayura-pattu/MY-VM-0101-2.png', '/mayura-pattu/MY-VM-0201-2.png', '/mayura-pattu/MY-VM-0201-3.png'],
    designs: [
      {
        slug: 'teal-peacock-feather',
        altSlugs: ['teal-peacock-feather-silk', 'vaira-mayil-silk', 'gold-fan-border', 'sage-peacock-vine', 'mayil-peru-silk'],
        name: 'Teal Blue Vaira Mayil Silk',
        code: 'MY-VM-0101',
        image: '/mayura-pattu/MY-VM-0101-1.png',
        images: [
          '/mayura-pattu/MY-VM-0101-1.png',
          '/mayura-pattu/MY-VM-0101-2.png',
          '/mayura-pattu/MY-VM-0101-3.png',
          '/mayura-pattu/MY-VM-0101-4.png',


        ],
        price: 'Rs. 22,400',
        oldPrice: 'Rs. 31,200',
        discount: '28% off',
        stock: 'In stock',
        color: 'Teal Blue',
        colors: ['Teal Blue', 'Rani Pink', 'Antique Gold', 'Midnight Navy'],
        fabric: 'Pure handloom silk with woven golden leaf sprig & peacock feather buttas',
        zari: 'Antique gold zari weave with contrasting rani pink border piping and grand zari pallu',
        occasion: 'Wedding reception, muhurtham, festive celebrations, and family poojas',
        blouse: 'Matching teal blue silk blouse piece with rani pink border edging',
        details: 'A signature Vaira Mayil saree in rich peacock teal pure silk, decorated with delicate golden sprig buttas across the body, paired with an antique gold zari weave, contrasting rani pink border piping, and a traditionally woven festive pallu.',
      },
      {
        slug: 'royal-violet-peacock-feather',
        name: 'Emerald Green Vaira Mayil Silk',
        code: 'MY-VM-0201',
        image: '/mayura-pattu/MY-VM-0201-1.png',
        images: [
          '/mayura-pattu/MY-VM-0201-1.png',
          '/mayura-pattu/MY-VM-0201-2.png',
          '/mayura-pattu/MY-VM-0201-3.png',
          '/mayura-pattu/MY-VM-0201-4.png',
        ],
        price: 'Rs. 22,400',
        oldPrice: 'Rs. 31,200',
        discount: '28% off',
        stock: 'In stock',
        color: 'Emerald Green',
        colors: ['Emerald Green', 'Parrot Green', 'Antique Gold'],
        fabric: 'Pure handloom silk with a vibrant emerald-green body and vertically arranged antique-gold floral buttas',
        zari: 'Antique-gold floral and ornamental zari motifs woven in elegant vertical lines with a coordinated traditional pallu',
        occasion: 'Wedding, engagement, festive pooja, reception, and family celebrations',
        blouse: 'Matching emerald-green pure-silk blouse piece with antique-gold zari edging',
        details: 'Emerald Green Vaira Mayil Silk features a vivid green handloom-silk body enriched with delicate antique-gold floral motifs arranged in graceful vertical lines. Its luminous zari detailing and rich jewel tone create an elegant traditional drape for weddings, engagements, poojas, and festive celebrations.',
      },
    ],
  },
  {
    slug: 'aambal-pattu',
    name: 'ஆம்பல் பட்டு',
    eyebrow: 'Water Lily Silks · Mayura Pattu',
    description: 'Aambal Pattu draws inspiration from the serene water lily, bringing graceful golden floral motifs to rich peacock-toned silk for elegant festive occasions.',
    cardImage: '/mayura-pattu/Aambal-pattu/MY-AP-0101-2.png',
    heroImage: '/mayura-pattu/Aambal-pattu/MY-AP-0101-4.png',
    heroImages: ['/mayura-pattu/Aambal-pattu/MY-AP-0101-4.png', '/mayura-pattu/Aambal-pattu/MY-AP-0101-2.png'],
    designs: [
      {
        slug: 'peacock-blue-aambal-silk',
        name: 'Royal Blue Aambal Silk',
        code: 'MY-AP-0101',
        image: '/mayura-pattu/Aambal-pattu/MY-AP-0101-2.png',
        images: ['/mayura-pattu/Aambal-pattu/MY-AP-0101-1.png', '/mayura-pattu/Aambal-pattu/MY-AP-0101-2.png', '/mayura-pattu/Aambal-pattu/MY-AP-0101-3.png', '/mayura-pattu/Aambal-pattu/MY-AP-0101-4.png'],
        price: 'Rs. 21,800',
        oldPrice: 'Rs. 30,300',
        discount: '28% off',
        stock: 'In stock',
        color: 'Royal Blue',
        colors: ['Royal Blue', 'Emerald Green', 'Antique Gold'],
        fabric: 'Pure handloom silk with a lustrous royal-blue body and evenly woven antique-gold floral medallion buttas',
        zari: 'Antique-gold floral medallion zari motifs with a refined emerald-green contrast edge and coordinated traditional pallu',
        occasion: 'Wedding, engagement, reception, festive pooja, and family celebrations',
        blouse: 'Matching royal-blue pure-silk blouse piece with emerald-green piping and antique-gold zari edging',
        details: 'Royal Blue Aambal Silk features a luminous blue handloom-silk body adorned with repeating antique-gold floral medallion buttas. A crisp emerald-green contrast edge adds a fresh finish, making this saree an elegant choice for weddings, engagements, receptions, poojas, and festive celebrations.',
      },
    ],
  },
]

export const getMayuraPattuCollection = (slug) =>
  mayuraPattuCollections.find((c) => c.slug === slug || c.altSlugs?.includes(slug))

export const getMayuraPattuDesign = (collectionSlug, designSlug) => {
  const collection = getMayuraPattuCollection(collectionSlug)
  if (!collection) return undefined
  return (
    collection.designs.find((d) => d.slug === designSlug || d.altSlugs?.includes(designSlug)) ||
    collection.designs[0]
  )
}
