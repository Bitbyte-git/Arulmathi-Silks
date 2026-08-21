import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const base = 'src/components'
const sailaCollTemplate = readFileSync(join(base, 'SailaCollectionPage.jsx'), 'utf8')
const sailaDetailTemplate = readFileSync(join(base, 'SailaDesignDetail.jsx'), 'utf8')

const collections = [
  {
    name: 'Velora', route: 'velora-pattu', dataFile: 'veloraPattuProducts',
    getCol: 'getVeloraPattuCollection', getDes: 'getVeloraPattuDesign',
    designs: [
      { name: 'Velli Malar Pattu', slug: 'velli-border', desc: 'Silver contrast border silk with lustrous zari', img: '/VP-VM-5.png', badge: 'Popular', badgeIcon: 'fa-star' },
      { name: 'Kolam Pattu', slug: 'kolam-pattu', desc: 'Geometric kolam woven saree with festive zari', img: '/sec-pose4.png' },
      { name: 'Venkai Kodi', slug: 'venkai-kodi', desc: 'Flame blossom silk with warm gold borders', img: '/VP-VM-2.png', badge: 'New', badgeIcon: 'fa-sparkles' },
    ],
    notes: ['Silver and gold contrast borders with geometric and floral motifs', 'Refined zari work for festive and reception occasions', 'Curated for weddings, gifting, and family celebrations'],
    heroImgs: ['/4-pose3.png', '/VP-VM-5.png', '/sec-pose4.png', '/VP-VM-2.png', '/sec-pose5.png'],
    mobileImg: '/VP-VM-5.png', mobileImg2: '/sec-pose4.png', mobileImg3: '/VP-VM-2.png',
    desc: 'Elegant silk sarees with silver-gold contrast borders, geometric kolam patterns, and flame blossom motifs for every festive occasion.',
  },
  {
    name: 'Ezhil', route: 'ezhil-pattu', dataFile: 'ezhilPattuProducts',
    getCol: 'getEzhilPattuCollection', getDes: 'getEzhilPattuDesign',
    designs: [
      { name: 'Thanga Thorana Pattu', slug: 'azhagu-pattu', desc: 'Beautiful woven festive silk with refined elegance', img: '/Ezhil-pattu/EP-TT-2.png', badge: 'Bestseller', badgeIcon: 'fa-crown' },
      { name: 'Kaanchi Ezhil', slug: 'kaanchi-ezhil', desc: 'Heritage silk with classic Kanchipuram-inspired weave', img: '/SP-Green-3.png' },
      { name: 'Parisil Pattu', slug: 'parisil-pattu', desc: 'Elegant gifting saree with soft borders and drape', img: '/image11.png', badge: 'Gifting', badgeIcon: 'fa-gift' },
    ],
    notes: ['Beautiful woven motifs celebrating traditional silk craftsmanship', 'Heritage weaving traditions translated into festive elegance', 'Curated for weddings, gifting, and refined celebrations'],
    heroImgs: ['/w5.png', '/Ezhil-pattu/EP-TT-2.png', '/SP-Green-3.png', '/image11.png', '/3-pose4.png'],
    mobileImg: '/Ezhil-pattu/EP-TT-2.png', mobileImg2: '/SP-Green-3.png', mobileImg3: '/image11.png',
    desc: 'Beautifully woven silks celebrating heritage craftsmanship — from classic Kanchipuram-inspired patterns to soft gifting sarees.',
  },
  {
    name: 'Kaithirai', route: 'kaithirai-pattu', dataFile: 'kaithiraiPattuProducts',
    getCol: 'getKaithiraiPattuCollection', getDes: 'getKaithiraiPattuDesign',
    designs: [
      { name: 'Poigai Pattu', slug: 'poigai-pattu', desc: 'Water lily motif woven silk for elegant occasions', img: '/Kathirai-pattu/KP-PP-2.png', badge: 'Popular', badgeIcon: 'fa-star' },
      { name: 'Punnai Kodi', slug: 'punnai-kodi', desc: 'Bay leaf vine patterned silk loved across Salem', img: '/3-pose3.png' },
      { name: 'Thennai Pattu', slug: 'thennai-pattu', desc: 'Palm weave festive silk with majestic natural beauty', img: '/sec-pose5.png', badge: 'New', badgeIcon: 'fa-sparkles' },
    ],
    notes: ['Nature-inspired motifs — lotus, bay leaf vine, and palm weave patterns', 'Antique gold zari borders for festive and gifting occasions', 'Curated for poojas, family functions, and refined celebrations'],
    heroImgs: ['/Kathirai-pattu/KP-PP-1.png', '/Kathirai-pattu/KP-PP-2.png', '/3-pose3.png', '/sec-pose5.png', '/Ezhil-pattu/EP-TT-2.png'],
    mobileImg: '/Kathirai-pattu/KP-PP-2.png', mobileImg2: '/3-pose3.png', mobileImg3: '/sec-pose5.png',
    desc: 'Nature-inspired silk sarees with water lily, bay leaf vine, and palm weave motifs — deeply loved across Salem for festive and gifting occasions.',
  },
  {
    name: 'Varnika', route: 'varnika-pattu', dataFile: 'varnikaPattuProducts',
    getCol: 'getVarnikaPattuCollection', getDes: 'getVarnikaPattuDesign',
    designs: [
      { name: 'Vasundhara Pattu', slug: 'sudar-pattu', desc: 'Radiant sun motif woven silk for grand celebrations', img: '/red-pose3.png', badge: 'Popular', badgeIcon: 'fa-sun' },
      { name: 'Niram Pattu', slug: 'niram-pattu', desc: 'Vivid color spectrum silk with rich gold borders', img: '/SP-MV-Blue4.png' },
      { name: 'Palamari Pattu', slug: 'palamari-pattu', desc: 'Antique heritage woven silk for heirloom occasions', img: '/4-pose4.png', badge: 'Heritage', badgeIcon: 'fa-crown' },
    ],
    notes: ['Radiant sun motifs, vivid color tones, and antique heritage weaving', 'Rich gold zari and bold borders for the grandest occasions', 'Curated for weddings, receptions, and heirloom gifting'],
    heroImgs: ['/red-pose2.png', '/red-pose3.png', '/SP-MV-Blue4.png', '/4-pose4.png', '/4-pose1.png'],
    mobileImg: '/red-pose3.png', mobileImg2: '/SP-MV-Blue4.png', mobileImg3: '/4-pose4.png',
    desc: 'Grand silks with sun-inspired motifs, vivid spectrum colors, and antique heritage weaving for weddings and the most special occasions.',
  },
  {
    name: 'Mangai', route: 'mangai-pattu', dataFile: 'mangaiPattuProducts',
    getCol: 'getMangaiPattuCollection', getDes: 'getMangaiPattuDesign',
    designs: [
      { name: 'Amudha Pattu', slug: 'amudha-pattu', desc: 'Nectar motif woven silk for festive gifting', img: '/SP-Blue-2.png', badge: 'Gifting', badgeIcon: 'fa-gift' },
      { name: 'Koovai Pattu', slug: 'koovai-pattu', desc: 'Kovai heritage patterned silk for family celebrations', img: '/4-pose3.png' },
      { name: 'Panneer Pattu', slug: 'panneer-pattu', desc: 'Rose water soft festive silk for everyday elegance', img: '/sec-pose1.png', badge: 'New', badgeIcon: 'fa-sparkles' },
    ],
    notes: ['Nectar, Kovai heritage, and rose water motifs for soft festive elegance', 'Lightweight and refined borders for gifting and pooja occasions', 'Curated for everyday festive wear, gifting, and family celebrations'],
    heroImgs: ['/VP-VM-5.png', '/SP-Blue-2.png', '/4-pose3.png', '/sec-pose1.png', '/sec-pose5.png'],
    mobileImg: '/SP-Blue-2.png', mobileImg2: '/4-pose3.png', mobileImg3: '/sec-pose1.png',
    desc: 'Soft festive silks with nectar motifs, Kovai heritage patterns, and rose water textures — perfect for gifting and everyday celebrations.',
  },
]

// Generate landing pages
for (const col of collections) {
  const designsArr = col.designs.map(d => {
    const badgePart = d.badge
      ? `, badge: '${d.badge}', badgeIcon: '${d.badgeIcon}'`
      : ''
    return `  { name: '${d.name}', slug: '${d.slug}', href: '/${col.route}/${d.slug}', desc: '${d.desc}', img: '${d.img}'${badgePart} },`
  }).join('\n')

  const notesArr = col.notes.map(n => `  '${n}',`).join('\n')
  const n = col.name.toLowerCase()

  const landing = `const ${n}Designs = [
${designsArr}
]

const ${n}Notes = [
${notesArr}
]

const ${n}Stats = [
  { value: '3', label: 'design families' },
  { value: '9', label: 'saree designs' },
  { value: '1:1', label: 'selection support' },
]

export default function ${col.name}Pattu() {
  return (
    <section id="${col.route}" className="section-reveal bg-[#13121f]">
      <div className="relative overflow-hidden bg-[#13121f] px-5 pb-10 pt-28 text-white sm:px-8 lg:min-h-[calc(100vh-120px)] lg:px-16 lg:pb-12 lg:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_22%,rgba(201,147,58,0.17),transparent_27%),radial-gradient(circle_at_78%_22%,rgba(37,88,62,0.24),transparent_30%),radial-gradient(circle_at_86%_76%,rgba(201,147,58,0.10),transparent_24%),linear-gradient(135deg,#13121f_0%,#0d0d1a_54%,#18111f_100%)]" />
        <div className="footer-weave absolute inset-x-0 top-0 h-44 opacity-30" />
        <div className="relative mx-auto grid max-w-[1540px] grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-12 xl:gap-16">
          <div className="max-w-[560px] lg:pb-6">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#c9933a]">Signature Collections</p>
            <h1 className="mt-4 font-serif text-[52px] font-normal leading-[0.98] text-white sm:text-[78px] lg:text-[92px] xl:text-[104px]">
              ${col.name}<br />
              <em className="italic text-[#d4a853]">Pattu</em>
            </h1>
            <p className="mt-6 max-w-[520px] font-sans text-[13px] leading-[1.95] text-white/76 sm:text-[14px]">
              ${col.desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/#shop" className="glow-cta inline-flex items-center gap-3 border border-[#c9933a]/80 px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[1.9px] text-[#d9a046] transition-colors hover:bg-[#c9933a] hover:text-[#13121f]">
                Shop ${col.name} Pattu <i className="fas fa-arrow-right" />
              </a>
              <a href="/#collections" className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[1.9px] text-white/78 transition-colors hover:border-[#c9933a] hover:text-[#d9a046]">
                Back to Collections
              </a>
            </div>
            <div className="mt-8 border-t border-white/16 pt-6">
              <div className="grid max-w-[560px] grid-cols-1 gap-4 sm:grid-cols-3">
                {${n}Stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-1 border-white/14 py-3 text-center sm:border-r sm:last:border-r-0">
                    <span className="font-serif text-[34px] leading-none text-[#d9a046]">{stat.value}</span>
                    <span className="font-sans text-[10px] uppercase tracking-[1.5px] text-white/62">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="hidden h-[620px] translate-x-[20px] grid-cols-12 grid-rows-10 gap-3 lg:grid xl:h-[700px]">
              <div className="hero-box-image hero-frame-gold col-start-1 col-end-4 row-start-3 row-end-6 overflow-hidden rounded-sm bg-[#eadfce] p-1.5 shadow-[0_18px_42px_rgba(0,0,0,0.36)]" style={{ '--frame-delay': '80ms' }}>
                <img src="${col.heroImgs[0]}" alt="${col.name} Pattu silk" className="h-full w-full rounded-[2px] object-cover object-top brightness-[0.9]" />
              </div>
              <div className="hero-box-image hero-frame-gold col-start-4 col-end-9 row-start-1 row-end-5 overflow-hidden rounded-sm bg-[#eadfce] p-2 shadow-[0_24px_66px_rgba(0,0,0,0.46)]" style={{ '--frame-delay': '0ms' }}>
                <img src="${col.heroImgs[1]}" alt="${col.name} Pattu main" className="h-full w-full rounded-[2px] object-cover object-top brightness-[0.92]" />
              </div>
              <div className="hero-box-image hero-frame-gold col-start-9 col-end-12 row-start-1 row-end-3 overflow-hidden rounded-sm bg-[#eadfce] p-1.5 shadow-[0_16px_38px_rgba(0,0,0,0.34)]" style={{ '--frame-delay': '160ms' }}>
                <img src="${col.heroImgs[2]}" alt="${col.name} Pattu detail" className="h-full w-full rounded-[2px] object-cover object-top brightness-[0.9]" />
              </div>
              <div className="hero-box-image hero-frame-gold col-start-2 col-end-7 row-start-5 row-end-10 overflow-hidden rounded-sm bg-[#eadfce] p-2 shadow-[0_24px_62px_rgba(0,0,0,0.44)]" style={{ '--frame-delay': '240ms' }}>
                <img src="${col.heroImgs[3]}" alt="${col.name} Pattu festive" className="h-full w-full rounded-[2px] object-cover object-top brightness-[0.9]" />
              </div>
              <div className="hero-box-image hero-frame-gold col-start-7 col-end-10 row-start-5 row-end-8 overflow-hidden rounded-sm bg-[#eadfce] p-1.5 shadow-[0_16px_38px_rgba(0,0,0,0.34)]" style={{ '--frame-delay': '320ms' }}>
                <img src="${col.heroImgs[4]}" alt="${col.name} Pattu classic" className="h-full w-full rounded-[2px] object-cover object-top brightness-[0.9]" />
              </div>
            </div>
            <div className="grid gap-4 lg:hidden">
              <div className="hero-box-image overflow-hidden rounded-lg border border-[#c9933a]/34 bg-[#0d0d1a] shadow-[0_26px_70px_rgba(0,0,0,0.42)]">
                <img src="${col.mobileImg}" alt="${col.name} Pattu" className="h-[440px] w-full object-cover object-top brightness-[0.88]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg border border-[#c9933a]/24 bg-[#0d0d1a]">
                  <img src="${col.mobileImg2}" alt="${col.name} Pattu detail" className="h-[180px] w-full object-cover object-top brightness-[0.84]" />
                </div>
                <div className="overflow-hidden rounded-lg border border-[#c9933a]/24 bg-[#0d0d1a]">
                  <img src="${col.mobileImg3}" alt="${col.name} Pattu festive" className="h-[180px] w-full object-cover object-top brightness-[0.88]" />
                </div>
              </div>
              <div className="hero-box-info rounded-lg border border-[#c9933a]/28 bg-[#1b1930]/78 p-5 shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[2.4px] text-[#c9933a]">${col.name} Notes</p>
                <ul className="mt-4 space-y-3">
                  {${n}Notes.map((item, index) => (
                    <li key={item} className="hero-weave-item flex gap-3 font-sans text-[12px] leading-[1.8] text-white/72" style={{ animationDelay: \`\${index * 120}ms\` }}>
                      <i className="fas fa-chevron-right mt-1.5 text-[9px] text-[#c9933a]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#f5f0e8] px-5 py-12 text-[#1a1420] sm:px-8 lg:px-16 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(201,147,58,0.13),transparent_24%),radial-gradient(circle_at_88%_78%,rgba(75,26,110,0.06),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1480px]">
          <div className="mb-8 text-center">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[3px] text-[#c9933a]">Explore Our</p>
            <h2 className="mt-3 font-serif text-[34px] font-normal leading-[1.12] text-[#1a1a2e] sm:text-[44px] lg:text-[50px]">
              ${col.name} <em className="italic text-[#c9933a]">Silk Designs</em>
            </h2>
            <div className="mx-auto mt-4 h-px w-28 bg-gradient-to-r from-transparent via-[#c9933a] to-transparent" />
          </div>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-3 pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {${n}Designs.map((saree) => (
                <article key={saree.name} className="group relative min-w-[245px] overflow-hidden rounded-xl border border-[#e4cba8] bg-[#fffaf2] text-[#1a1a2e] shadow-[0_14px_34px_rgba(92,58,24,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9933a]/70 hover:shadow-[0_24px_52px_rgba(92,58,24,0.20)] sm:min-w-[280px] lg:min-w-[265px] xl:min-w-[250px]">
                  {saree.badge && (
                    <span className="absolute left-0 top-0 z-10 inline-flex items-center gap-2 rounded-br-lg bg-[#7b250f]/92 px-3 py-2 font-sans text-[10px] font-semibold text-[#ffe7b2] shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
                      <i className={\`fas \${saree.badgeIcon} text-[9px]\`} /> {saree.badge}
                    </span>
                  )}
                  <a href={saree.href} className="block h-[220px] overflow-hidden bg-[#e8ddcf]" aria-label={\`Open \${saree.name} designs\`}>
                    <img src={saree.img} alt={saree.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </a>
                  <div className="rounded-t-lg bg-[#fffaf2] px-5 pb-5 pt-4 text-center shadow-[0_-10px_22px_rgba(74,45,18,0.08)]">
                    <h3 className="font-serif text-[20px] font-medium leading-tight text-[#1a1a2e]">{saree.name}</h3>
                    <p className="mx-auto mt-2 min-h-[42px] max-w-[210px] font-sans text-[12px] leading-[1.45] text-[#5e5f6b]">{saree.desc}</p>
                    <div className="mx-auto mt-3 flex w-16 items-center justify-center gap-2 text-[#b57922]">
                      <span className="h-px flex-1 bg-[#d7b578]" />
                      <i className="fas fa-spa text-[9px]" />
                      <span className="h-px flex-1 bg-[#d7b578]" />
                    </div>
                    <a href={saree.href} className="mt-3 inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[2px] text-[#9a6720] transition-colors hover:text-[#c9933a]">
                      Explore <i className="fas fa-arrow-right text-[10px]" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
`
  writeFileSync(join(base, `${col.name}Pattu.jsx`), landing)
  console.log(`Written ${col.name}Pattu.jsx`)

  // Collection page
  const collPage = sailaCollTemplate
    .replace(/getSailaPattuCollection/g, col.getCol)
    .replace(/sailaPattuProducts/g, col.dataFile)
    .replace(/SailaCollectionPage/g, `${col.name}CollectionPage`)
    .replace(/\/saila-pattu\//g, `/${col.route}/`)
    .replace(/href="\/saila-pattu"/g, `href="/${col.route}"`)
    .replace(/Back to Saila Pattu/g, `Back to ${col.name} Pattu`)
    .replace(/Saila Pattu/g, `${col.name} Pattu`)
  writeFileSync(join(base, `${col.name}CollectionPage.jsx`), collPage)
  console.log(`Written ${col.name}CollectionPage.jsx`)

  // Detail page
  const detailPage = sailaDetailTemplate
    .replace(/getSailaPattuCollection/g, col.getCol)
    .replace(/getSailaPattuDesign/g, col.getDes)
    .replace(/sailaPattuProducts/g, col.dataFile)
    .replace(/SailaDesignDetail/g, `${col.name}DesignDetail`)
    .replace(/\/saila-pattu\//g, `/${col.route}/`)
    .replace(/href="\/saila-pattu"/g, `href="/${col.route}"`)
    .replace(/Back to Saila Pattu/g, `Back to ${col.name} Pattu`)
    .replace(/Saila Pattu/g, `${col.name} Pattu`)
  writeFileSync(join(base, `${col.name}DesignDetail.jsx`), detailPage)
  console.log(`Written ${col.name}DesignDetail.jsx`)
}

// Also fix Sezhinool collection and detail pages
const sezColl = sailaCollTemplate
  .replace(/getSailaPattuCollection/g, 'getSezhinoolPattuCollection')
  .replace(/sailaPattuProducts/g, 'sezhinoolPattuProducts')
  .replace(/SailaCollectionPage/g, 'SezhinoolCollectionPage')
  .replace(/\/saila-pattu\//g, '/sezhinool-pattu/')
  .replace(/href="\/saila-pattu"/g, 'href="/sezhinool-pattu"')
  .replace(/Back to Saila Pattu/g, 'Back to Sezhinool Pattu')
  .replace(/Saila Pattu/g, 'Sezhinool Pattu')
writeFileSync(join(base, 'SezhinoolCollectionPage.jsx'), sezColl)

const sezDetail = sailaDetailTemplate
  .replace(/getSailaPattuCollection/g, 'getSezhinoolPattuCollection')
  .replace(/getSailaPattuDesign/g, 'getSezhinoolPattuDesign')
  .replace(/sailaPattuProducts/g, 'sezhinoolPattuProducts')
  .replace(/SailaDesignDetail/g, 'SezhinoolDesignDetail')
  .replace(/\/saila-pattu\//g, '/sezhinool-pattu/')
  .replace(/href="\/saila-pattu"/g, 'href="/sezhinool-pattu"')
  .replace(/Back to Saila Pattu/g, 'Back to Sezhinool Pattu')
  .replace(/Saila Pattu/g, 'Sezhinool Pattu')
writeFileSync(join(base, 'SezhinoolDesignDetail.jsx'), sezDetail)

console.log('Done! All 17 files written.')
