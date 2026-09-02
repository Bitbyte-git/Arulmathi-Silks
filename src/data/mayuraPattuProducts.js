export const mayuraPattuCollections = [
  {
    slug: 'mayil-peru',
    altSlugs: ['vaira-mayil'],
    name: 'வைர மயில்',
    eyebrow: 'Peacock Feather Silks · Mayura Pattu',
    description: 'Vaira Mayil captures the full glory of the peacock — feather and sprig motifs woven across deep jewel-toned silk, with a vibrant contrast border for weddings and grand festive celebrations.',
    cardImage: '/mayura-pattu/MY-VM-0101-2.png',
    heroImage: '/mayura-pattu/MP-VM-3.png',
    heroImages: ['/mayura-pattu/MP-VM-4.png','/mayura-pattu/MP-VM-5.png','/mayura-pattu/MY-VM-0101-2.png'],
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
        name: 'Royal Violet Vaira Mayil Silk',
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
        color: 'Royal Violet',
        colors: ['Royal Violet', 'Rani Pink', 'Antique Gold'],
        fabric: 'Pure handloom royal violet silk with woven golden leaf sprig and peacock feather buttas',
        zari: 'Antique gold zari weave with contrasting rani pink border piping and a coordinated festive pallu',
        occasion: 'Wedding reception, engagement, festive celebrations, and family poojas',
        blouse: 'Matching royal violet silk blouse piece with rani pink border edging',
        details: 'A royal violet colorway of the Vaira Mayil silk, finished with golden sprig and peacock motifs and a vibrant rani pink edge for an elegant jewel-toned festive look.',
      },
    ],
  },
  {
    slug: 'aambal-pattu',
    name: 'ஆம்பல் பட்டு',
    eyebrow: 'Water Lily Silks · Mayura Pattu',
    description: 'Aambal Pattu draws inspiration from the serene water lily, bringing graceful golden floral motifs to rich peacock-toned silk for elegant festive occasions.',
    cardImage: '/mayura-pattu/MP-VM-2.png',
    heroImage: '/mayura-pattu/MP-VM-6.png',
    heroImages: ['/mayura-pattu/MP-VM-2.png', '/mayura-pattu/MP-VM-6.png', '/mayura-pattu/MP-VM-1.png'],
    designs: [
      {
        slug: 'peacock-blue-aambal-silk',
        name: 'Peacock Blue Aambal Silk',
        code: 'MY-AP-0101',
        image: '/mayura-pattu/MP-VM-2.png',
        images: ['/mayura-pattu/MP-VM-2.png', '/mayura-pattu/MP-VM-6.png', '/mayura-pattu/MP-VM-1.png', '/mayura-pattu/MP-VM-4.png'],
        price: 'Rs. 21,800',
        oldPrice: 'Rs. 30,300',
        discount: '28% off',
        stock: 'In stock',
        color: 'Peacock Blue',
        colors: ['Peacock Blue', 'Rani Pink', 'Antique Gold'],
        fabric: 'Pure handloom silk with delicate water-lily and leaf-inspired woven motifs',
        zari: 'Antique gold floral zari with a contrasting rani pink edge and coordinated pallu',
        occasion: 'Reception, engagement, festive celebrations, and family poojas',
        blouse: 'Matching peacock blue silk blouse piece with rani pink border edging',
        details: 'Peacock Blue Aambal Silk combines a rich jewel-toned body with delicate golden floral weaving and a vivid rani pink border for a graceful festive drape.',
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


