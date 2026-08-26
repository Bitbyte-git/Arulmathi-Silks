export const mayuraPattuCollections = [
  {
    slug: 'mayil-peru',
    altSlugs: ['vaira-mayil'],
    name: 'Vaira Mayil',
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


