export const mangaiPattuCollections = [
  {
    slug: 'amudha-pattu',
    name: 'Amudha Pattu',
    eyebrow: 'Nectar Woven Silks · Mangai Pattu',
    description: 'Amudha Pattu is the sweetest collection of Mangai Pattu — soft nectar-inspired motifs and golden zari woven into silk for festive gifting and family celebrations.',
    heroImage: '/mangai-pattu/MP-AP-5.png',
    heroImages: ['/mangai-pattu/MP-AP-3.png', '/mangai-pattu/MP-AP-2.png', '/mangai-pattu/MP-AP-1.png'],
    designs: [
      { slug: 'honey-amudha-silk', name: 'Honey Amudha Silk', code: 'MG-AM-0101', image: '/mangai-pattu/MG-AM-0101-2.png', images: ['/mangai-pattu/MG-AM-0101-2.png', '/mangai-pattu/MG-AM-0101.png', '/mangai-pattu/MG-AM-0101-3.png', '/mangai-pattu/MG-AM-0101-4.png'], price: 'Rs. 15,600', oldPrice: 'Rs. 21,700', discount: '28% off', stock: 'In stock', color: 'Golden Sand', colors: ['Golden Sand', 'Champagne Gold', 'Copper Gold'], fabric: 'Soft silk with honey nectar woven body', zari: 'Warm gold nectar motif zari border', occasion: 'Festival, gifting, pooja', blouse: 'Honey blouse with gold nectar border', details: 'Honey Amudha Silk is the signature Amudha Pattu saree — warm golden honey tones with sweet nectar motif zari for festive gifting.' },
    ],
  },
]

export const getMangaiPattuCollection = (slug) => mangaiPattuCollections.find((c) => c.slug === slug)
export const getMangaiPattuDesign = (collectionSlug, designSlug) => {
  const collection = getMangaiPattuCollection(collectionSlug)
  return collection?.designs.find((d) => d.slug === designSlug)
}
