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
    card: '/mangai-pattu/MG-TG-0201-3.png',
    hero: '/mangai-pattu/MG-TG-0201-3.png',
    gallery: [
      '/mangai-pattu/MG-TG-0201-3.png',
      '/mangai-pattu/MG-TG-0201-4.png',
      '/mangai-pattu/MG-TG-0201-1.png',
      '/mangai-pattu/MG-TG-0201-2.png',
    ],
  },
  thogaiTwo: {
    card: '/mangai-pattu/MG-TG-0202-3.png',
    hero: '/mangai-pattu/MG-TG-0202-3.png',
    gallery: [
      '/mangai-pattu/MG-TG-0202-3.png',
      '/mangai-pattu/MG-TG-0202-4.png',
      '/mangai-pattu/MG-TG-0202-1.png',
      '/mangai-pattu/MG-TG-0202-2.png',
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
    heroImages: [mangaiProductImages.amudha.card],
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
    heroImage: '/mangai-pattu/MG-TG-0201-3.png',
    heroImages: [
      '/mangai-pattu/MG-TG-0201-3.png',
      '/mangai-pattu/MG-TG-0201-4.png',
    ],
    designs: [
      {
        slug: 'peacock-thogai-silk',
        altSlugs: ['olive-thogai-silk'],
        name: 'Olive Thogai Silk',
        code: 'MG-TG-0201',
        cardImage: mangaiProductImages.thogaiOne.card,
        image: mangaiProductImages.thogaiOne.gallery[0],
        images: mangaiProductImages.thogaiOne.gallery,
        price: 'Rs. 17,800',
        oldPrice: 'Rs. 24,700',
        discount: '28% off',
        stock: 'In stock',
        color: 'Olive Green',
        colors: ['Olive Green', 'Coral Pink', 'Gold Zari'],
        fabric: 'Soft pure silk in olive green with coral pink contrast border',
        zari: 'Antique gold feather and mango motif zari border with contrast pallu',
        occasion: 'Engagement, reception, pooja, family celebrations',
        blouse: 'Coral pink silk blouse piece with gold zari border',
        details: 'Olive Thogai Silk pairs an olive green silk body with delicate golden motifs and a vivid coral pink contrast border.',
      },
      {
        slug: 'royal-blue-thogai-silk',
        altSlugs: ['copper-brown-thogai-silk'],
        name: 'Copper Brown Thogai Silk',
        code: 'MG-TG-0202',
        cardImage: mangaiProductImages.thogaiTwo.card,
        image: mangaiProductImages.thogaiTwo.gallery[0],
        images: mangaiProductImages.thogaiTwo.gallery,
        price: 'Rs. 18,400',
        oldPrice: 'Rs. 25,600',
        discount: '28% off',
        stock: 'In stock',
        color: 'Copper Brown',
        colors: ['Copper Brown', 'Clay Brown', 'Copper Gold Zari'],
        fabric: 'Pure silk in warm copper brown tone with delicate plume-pattern weaving',
        zari: 'Copper gold zari border with traditional woven pallu',
        occasion: 'Wedding, reception, festive gifting',
        blouse: 'Matching copper brown silk blouse piece with zari border',
        details: 'Copper Brown Thogai Silk features a rich earth-toned copper silk body with delicate golden motifs and a regal woven zari border.',
      },
    ],
  },
]

export const getMangaiPattuCollection = (slug) => mangaiPattuCollections.find((c) => c.slug === slug)
export const getMangaiPattuDesign = (collectionSlug, designSlug) => {
  const collection = getMangaiPattuCollection(collectionSlug)
  return collection?.designs.find((d) => d.slug === designSlug || d.altSlugs?.includes(designSlug))
}
