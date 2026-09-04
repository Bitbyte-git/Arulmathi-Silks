const mangaiProductImages = {
  amudha: {
    card: '/mangai-pattu/MG-AM-0101-2.png',
    hero: '/mangai-pattu/MG-AM-0101-2.png',
    gallery: [
      '/mangai-pattu/MG-AM-0101-2.png',
      '/mangai-pattu/MG-AM-0101.png',
      '/mangai-pattu/MG-AM-0101-3.png',
      '/mangai-pattu/MG-AM-0101-4.png',
    ],
  },
  thogaiOne: {
    card: '/mangai-pattu/MG-TG-0201-1.png',
    hero: '/mangai-pattu/MG-TG-0201-1.png',
    gallery: [
      '/mangai-pattu/MG-TG-0201-1.png',
      '/mangai-pattu/MG-TG-0201-2.png',
      '/mangai-pattu/MG-TG-0201-3.png',
      '/mangai-pattu/MG-TG-0201-4.png',
    ],
  },
  thogaiTwo: {
    card: '/mangai-pattu/MG-TG-0202-1.png',
    hero: '/mangai-pattu/MG-TG-0202-1.png',
    gallery: [
      '/mangai-pattu/MG-TG-0202-1.png',
      '/mangai-pattu/MG-TG-0202-2.png',
      '/mangai-pattu/MG-TG-0202-3.png',
      '/mangai-pattu/MG-TG-0202-4.png',
    ],
  },
}

export const mangaiPattuCollections = [
  {
    slug: 'amudha-pattu',
    name: 'அமுத பட்டு',
    eyebrow: 'Nectar Woven Silks · Mangai Pattu',
    description: 'Amudha Pattu is the sweetest collection of Mangai Pattu — soft nectar-inspired motifs and golden zari woven into silk for festive gifting and family celebrations.',
    cardImage: mangaiProductImages.amudha.card,
    heroImage: mangaiProductImages.amudha.hero,
    heroImages: mangaiProductImages.amudha.gallery,
    designs: [
      {
        slug: 'honey-amudha-silk',
        name: 'Honey Amudha Silk',
        code: 'MG-AM-0101',
        cardImage: mangaiProductImages.amudha.card,
        image: mangaiProductImages.amudha.gallery[0],
        images: mangaiProductImages.amudha.gallery,
        price: 'Rs. 15,600',
        oldPrice: 'Rs. 21,700',
        discount: '28% off',
        stock: 'In stock',
        color: 'Golden Sand',
        colors: ['Golden Sand', 'Champagne Gold', 'Copper Gold'],
        fabric: 'Soft silk with honey nectar woven body',
        zari: 'Warm gold nectar motif zari border',
        occasion: 'Festival, gifting, pooja',
        blouse: 'Honey blouse with gold nectar border',
        details: 'Honey Amudha Silk is the signature Amudha Pattu saree — warm golden honey tones with sweet nectar motif zari for festive gifting.',
      },
    ],
  },
  {
    slug: 'thogai-pattu',
    name: 'தோகை பட்டு',
    eyebrow: 'Peacock Plume Silks · Mangai Pattu',
    description: 'Thogai Pattu draws inspiration from the graceful peacock plume, combining elegant colors with delicate zari for festive occasions.',
    cardImage: mangaiProductImages.thogaiOne.card,
    heroImage: mangaiProductImages.thogaiOne.hero,
    heroImages: [
      '/mangai-pattu/MG-TG-0201-1.png',
      '/mangai-pattu/MG-TG-0201-2.png',
      '/mangai-pattu/MG-TG-0202-1.png',
      '/mangai-pattu/MG-TG-0202-2.png',
    ],
    designs: [
      {
        slug: 'peacock-thogai-silk',
        name: 'Peacock Thogai Silk',
        code: 'MG-TG-0201',
        cardImage: mangaiProductImages.thogaiOne.card,
        image: mangaiProductImages.thogaiOne.gallery[0],
        images: mangaiProductImages.thogaiOne.gallery,
        price: 'Rs. 17,800',
        oldPrice: 'Rs. 24,700',
        discount: '28% off',
        stock: 'In stock',
        color: 'Peacock Green',
        colors: ['Peacock Green', 'Teal Blue', 'Antique Gold'],
        fabric: 'Soft pure silk with peacock-plume inspired woven motifs',
        zari: 'Antique gold feather zari border and coordinated pallu',
        occasion: 'Engagement, reception, pooja, family celebrations',
        blouse: 'Peacock-green silk blouse with gold zari edging',
        details: 'Peacock Thogai Silk combines graceful plume-inspired motifs with peacock green silk and antique-gold zari.',
      },
      {
        slug: 'royal-blue-thogai-silk',
        name: 'Royal Blue Thogai Silk',
        code: 'MG-TG-0202',
        cardImage: mangaiProductImages.thogaiTwo.card,
        image: mangaiProductImages.thogaiTwo.gallery[0],
        images: mangaiProductImages.thogaiTwo.gallery,
        price: 'Rs. 18,400',
        oldPrice: 'Rs. 25,600',
        discount: '28% off',
        stock: 'In stock',
        color: 'Royal Blue',
        colors: ['Royal Blue', 'Peacock Blue', 'Gold'],
        fabric: 'Pure silk with delicate plume-pattern weaving',
        zari: 'Gold peacock-plume zari border with a rich festive pallu',
        occasion: 'Wedding, reception, festive gifting',
        blouse: 'Royal-blue silk blouse with gold feather border',
        details: 'Royal Blue Thogai Silk presents elegant plume motifs on a luminous blue body with a rich gold zari finish.',
      },
    ],
  },
]

export const getMangaiPattuCollection = (slug) => mangaiPattuCollections.find((c) => c.slug === slug)
export const getMangaiPattuDesign = (collectionSlug, designSlug) => {
  const collection = getMangaiPattuCollection(collectionSlug)
  return collection?.designs.find((d) => d.slug === designSlug)
}
