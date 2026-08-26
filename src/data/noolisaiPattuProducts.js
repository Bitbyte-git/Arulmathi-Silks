export const noolisaiPattuCollections = [
  {
    slug: 'nool-veli',
    altSlugs: ['nool-kodi'],
    name: 'Nool Kodi',
    eyebrow: 'Butta Silk Collection · Noolisai Pattu',
    description: 'Nool Kodi showcases the beauty of bold contrast border silks — a rich magenta pure silk body adorned with a grand royal blue border bearing large antique gold diamond butta motifs, curated for weddings, poojas, and festive celebrations.',
    heroImage: '/noolisai-pattu/NP-NK-1.png',
    heroImages: ['/noolisai-pattu/NP-NK-1.png', '/noolisai-pattu/NP-NK-3.png', '/noolisai-pattu/NP-NK-5.png'],
    designs: [
      {
        slug: 'magenta-royal-blue-butta',
        altSlugs: ['ivory-thread-border', 'nool-kodi-silk', 'nool-veli-silk'],
        name: 'Magenta Royal Blue Butta Silk',
        code: 'NL-NK-0101',
        image: '/noolisai-pattu/NL-NK-0101-1.png',
        images: [
          '/noolisai-pattu/NL-NK-0101-1.png',
          '/noolisai-pattu/NL-NK-0101-2.png',
          '/noolisai-pattu/NL-NK-0101-3.png',
          '/noolisai-pattu/NL-NK-0101-4.png',
         
        ],
        price: 'Rs. 13,800',
        oldPrice: 'Rs. 19,200',
        discount: '28% off',
        stock: 'In stock',
        color: 'Magenta',
        colors: ['Magenta', 'Royal Blue', 'Antique Gold'],
        fabric: 'Pure handloom silk with woven self-pattern jaal motifs on rich magenta body',
        zari: 'Royal blue contrast border with large antique gold diamond chakra butta weave and matching pallu',
        occasion: 'Wedding, reception, pooja, festive celebrations',
        blouse: 'Royal blue silk blouse with antique gold diamond butta border',
        details: 'Magenta Royal Blue Butta Silk is the signature Nool Kodi design — a deep magenta pure handloom silk with a woven self-pattern body, paired with a bold royal blue contrast border bearing large antique gold diamond chakra buttas and a richly woven festive pallu.',
      },
    ],
  },
]

export const getNoolisaiPattuCollection = (slug) =>
  noolisaiPattuCollections.find((c) => c.slug === slug || c.altSlugs?.includes(slug))

export const getNoolisaiPattuDesign = (collectionSlug, designSlug) => {
  const collection = getNoolisaiPattuCollection(collectionSlug)
  if (!collection) return undefined
  return (
    collection.designs.find((d) => d.slug === designSlug || d.altSlugs?.includes(designSlug)) ||
    collection.designs[0]
  )
}
