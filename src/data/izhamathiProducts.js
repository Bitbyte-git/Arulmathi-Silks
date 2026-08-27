export const izhamathiCollections = [
  {
    slug: 'pushpanjali',
    name: 'புஷ்பாஞ்சலி',
    eyebrow: 'Floral woven silk design',
    description: 'A floral woven silk design family with graceful zari blooms, rich festive shades, and soft traditional elegance for weddings, poojas, and gifting.',
    heroImage: '/izhamathi-sarees/Pushpa/IZ-PA-3.png',
    heroImages: [
      '/izhamathi-sarees/Pushpa/IZ-PA-3.png',
      '/izhamathi-sarees/Pushpa/IZ-PA-5.png',
      '/izhamathi-sarees/Pushpa/IZ-PA-2.png',
    ],
    designs: [
      {
        slug: 'parrot-green-floral-zari',
        altSlugs: ['ruby-floral-zari', 'parrot-green-floral-jaal'],
        name: 'Parrot Green Floral Jaal',
        code: 'IZ-PA-2601',
        image: '/izhamathi-sarees/Pushpa/IZ-PA-2601-1.png',
        images: ['/izhamathi-sarees/Pushpa/IZ-PA-2601-1.png', '/izhamathi-sarees/Pushpa/IZ-PA-2601-2.png', '/izhamathi-sarees/Pushpa/IZ-PA-2601-3.png', '/izhamathi-sarees/Pushpa/IZ-PA-2601-4.png'],
        price: 'Rs. 32,900',
        oldPrice: 'Rs. 45,000',
        discount: '27% off',
        stock: 'In stock',
        color: 'Parrot Green',
        colors: ['Parrot Green', 'Teal Blue', 'Antique Gold', 'Temple Green'],
        fabric: 'Pure handloom silk with woven circular floral chakra buttas',
        zari: 'Rich antique gold floral vine border with teal selvedge accent and elaborate zari pallu',
        occasion: 'Weddings, bridal muhurtham, festive poojas, and auspicious celebrations',
        blouse: 'Matching parrot green silk blouse piece with antique gold zari sleeve border',
        details: 'A signature Pushpanjali saree in vibrant parrot green pure silk, adorned with radiant golden floral chakra motifs across the body, a rich antique gold floral vine border with teal piping, and an opulent grand zari pallu.',
      },
    ],
  },
  {
    slug: 'suvarna-thuli',
    name: 'சுவர்ண துளி',
    eyebrow: 'Golden butta silk design',
    description: 'A golden butta silk design family with warm metallic shine, delicate woven dots, and elegant festive styling for special occasions.',
    heroImage: '/izhamathi-sarees/IZ-Green-1.png',
    heroImages: [
      '/izhamathi-sarees/IZ-Green-1.png',
      '/izhamathi-sarees/IZ-Green-3.png',
      '/izhamathi-sarees/IZ-Green-5.png',
    ],
    designs: [
      {
        slug: 'emerald-paisley-zari',
        altSlugs: ['champagne-golden-butta'],
        name: 'Emerald Paisley Zari',
        code: 'IZ-ST-2701',
        image: '/izhamathi-sarees/IZ-ST-2701-1.png',
        images: ['/izhamathi-sarees/IZ-ST-2701-1.png', '/izhamathi-sarees/IZ-ST-2701-2.jpeg', '/izhamathi-sarees/IZ-ST-2701-3.jpeg', '/izhamathi-sarees/IZ-ST-2701-4.png'],
        price: 'Rs. 28,500',
        oldPrice: 'Rs. 39,900',
        discount: '29% off',
        stock: 'In stock',
        color: 'Emerald Green',
        colors: ['Emerald Green', 'Antique Gold', 'Maroon', 'Bottle Green'],
        fabric: 'Emerald green silk with tone-on-tone butta texture and paisley motifs',
        zari: 'Gold paisley buttas with a broad antique zari border, maroon contrast edging, and richly woven pallu',
        occasion: 'Wedding, muhurtham, pooja, and festive celebrations',
        blouse: 'Matching emerald green blouse with antique gold sleeve border',
        details: 'An emerald green silk saree w ith gold paisley motifs, subtle all-over butta texture, a broad antique zari border, maroon edging, and a richly woven pallu finished with tassels.',
      },
    ],
  },
]

export const getIzhamathiCollection = (slug) => izhamathiCollections.find((collection) => collection.slug === slug)

export const getIzhamathiDesign = (collectionSlug, designSlug) => {
  const collection = getIzhamathiCollection(collectionSlug)
  if (!collection) return undefined
  return (
    collection.designs.find((design) => design.slug === designSlug || design.altSlugs?.includes(designSlug)) ||
    collection.designs[0]
  )
}

