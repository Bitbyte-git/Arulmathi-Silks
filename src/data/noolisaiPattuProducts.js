export const noolisaiPattuCollections = [
  {
    slug: 'nool-veli',
    altSlugs: ['nool-kodi'],
    name: 'நூல் கொடி',
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
  {
    slug: 'animaalai-pattu',
    name: 'அணிமாலை பட்டு',
    eyebrow: 'Ornamental Garland Silks · Noolisai Pattu',
    description: 'Animaalai Pattu celebrates ornamental garland forms through graceful woven motifs and luminous zari, designed for weddings and refined festive occasions.',
    heroImage: '/noolisai-pattu/NP-NK-3.png',
    heroImages: ['/noolisai-pattu/NP-NK-3.png', '/noolisai-pattu/NP-NK-2.png', '/noolisai-pattu/NP-NK-4.png'],
    designs: [
      {
        slug: 'magenta-animaalai-silk',
        name: 'Magenta Animaalai Silk',
        code: 'NL-AM-0101',
        image: '/noolisai-pattu/NP-NK-3.png',
        images: ['/noolisai-pattu/NP-NK-3.png', '/noolisai-pattu/NP-NK-2.png', '/noolisai-pattu/NP-NK-4.png', '/noolisai-pattu/NP-NK-1.png'],
        price: 'Rs. 14,600',
        oldPrice: 'Rs. 20,300',
        discount: '28% off',
        stock: 'In stock',
        color: 'Festive Magenta',
        colors: ['Festive Magenta', 'Royal Blue', 'Antique Gold'],
        fabric: 'Pure handloom silk with ornamental garland-inspired woven motifs',
        zari: 'Antique gold zari detailing with a rich contrast border and coordinated pallu',
        occasion: 'Wedding, reception, pooja, and festive celebrations',
        blouse: 'Matching silk blouse piece with coordinated zari edging',
        details: 'Magenta Animaalai Silk presents ornamental garland motifs on a jewel-toned handloom silk body, completed with an antique gold zari finish.',
      },
    ],
  },
  {
    slug: 'pothumbu-pattu',
    name: 'பொதும்பு பட்டு',
    eyebrow: 'Nature Woven Silks · Noolisai Pattu',
    description: 'Pothumbu Pattu evokes a flourishing grove through nature-led woven texture, rich silk color, and traditional zari accents for festive dressing.',
    heroImage: '/noolisai-pattu/NP-NK-5.png',
    heroImages: ['/noolisai-pattu/NP-NK-5.png', '/noolisai-pattu/NP-NK-4.png', '/noolisai-pattu/NP-NK-1.png'],
    designs: [
      {
        slug: 'royal-blue-pothumbu-silk',
        name: 'Royal Blue Pothumbu Silk',
        code: 'NL-PT-0101',
        image: '/noolisai-pattu/NP-NK-5.png',
        images: ['/noolisai-pattu/NP-NK-5.png', '/noolisai-pattu/NP-NK-4.png', '/noolisai-pattu/NP-NK-1.png', '/noolisai-pattu/NP-NK-2.png'],
        price: 'Rs. 15,200',
        oldPrice: 'Rs. 21,100',
        discount: '28% off',
        stock: 'In stock',
        color: 'Royal Blue',
        colors: ['Royal Blue', 'Magenta', 'Antique Gold'],
        fabric: 'Pure handloom silk with lush nature-inspired woven texture',
        zari: 'Antique gold zari motifs with a bold contrast border and festive pallu',
        occasion: 'Reception, family celebrations, pooja, and festive gifting',
        blouse: 'Royal blue silk blouse piece with antique gold border detail',
        details: 'Royal Blue Pothumbu Silk combines a rich blue handloom body with flourishing nature-inspired motifs and antique gold zari accents.',
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
