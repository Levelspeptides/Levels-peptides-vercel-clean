import React from 'react'

const featuredProducts = [
  { name: 'RETATRUTIDE', mg: '10mg', price: '$119' },
  { name: 'TIRZEPATIDE', mg: '10mg', price: '$99' },
  { name: 'TESAMORELIN', mg: '10mg', price: '$89' },
  { name: 'NAD+', mg: '200mg', price: '$99' },
]

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoWrap}>
        <div style={styles.logoMain}>LEVEL</div>
        <div style={styles.logoSub}>PEPTIDES</div>
      </div>

      <nav style={styles.nav}>
        <a href="#" style={{ ...styles.navLink, ...styles.navLinkActive }}>HOME</a>
        <a href="#shop" style={styles.navLink}>SHOP</a>
        <a href="#peptides" style={styles.navLink}>PEPTIDES</a>
        <a href="#guides" style={styles.navLink}>RESEARCH GUIDES</a>
        <a href="#about" style={styles.navLink}>ABOUT US</a>
      </nav>

      <div style={styles.headerIcons}>
        <span style={styles.icon}>⌕</span>
        <span style={styles.icon}>◯</span>
        <span style={styles.icon}>🛒</span>
      </div>
    </header>
  )
}

function HeroVial() {
  return (
    <div style={styles.heroVialWrap}>
      <div style={styles.heroMoleculeA} />
      <div style={styles.heroMoleculeB} />
      <div style={styles.heroPedestal} />

      <div style={styles.heroVial}>
        <div style={styles.capTop} />
        <div style={styles.capBottom} />
        <div style={styles.glassLarge}>
          <div style={styles.labelLarge}>
            <div style={styles.brandLarge}>LEVEL</div>
            <div style={styles.brandSubLarge}>PEPTIDES</div>
            <div style={styles.redLine} />
            <div style={styles.productNameLarge}>RETATRUTIDE</div>
            <div style={styles.mgLarge}>10mg</div>
            <div style={styles.purityBand}>99% PURITY</div>
            <div style={styles.disclaimerLarge}>FOR RESEARCH<br />PURPOSES ONLY<br /><span style={styles.disclaimerSmall}>NOT FOR HUMAN CONSUMPTION</span></div>
            <div style={styles.verifiedBand}>LEVEL VERIFIED</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductVial({ name, mg }) {
  return (
    <div style={styles.smallVialWrap}>
      <div style={styles.smallCapTop} />
      <div style={styles.smallCapBottom} />
      <div style={styles.smallGlass}>
        <div style={styles.smallLabel}>
          <div style={styles.smallBrand}>LEVEL</div>
          <div style={styles.smallBrandSub}>PEPTIDES</div>
          <div style={styles.redLineSmall} />
          <div style={styles.smallName}>{name}</div>
          <div style={styles.smallMg}>{mg}</div>
          <div style={styles.smallPurityBand}>99% PURITY</div>
          <div style={styles.smallDisclaimer}>RESEARCH USE ONLY</div>
          <div style={styles.smallVerified}>LEVEL VERIFIED</div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ name, mg, price }) {
  return (
    <div style={styles.productCard}>
      <div style={styles.productCardGlow} />
      <ProductVial name={name} mg={mg} />
      <div style={styles.productTitle}>{name}</div>
      <div style={styles.productMg}>{mg}</div>
      <div style={styles.stars}>★★★★★</div>
      <div style={styles.productPrice}>{price}</div>
    </div>
  )
}

function FeatureBadge({ icon, title, subtitle }) {
  return (
    <div style={styles.badgeItem}>
      <div style={styles.badgeIcon}>{icon}</div>
      <div>
        <div style={styles.badgeTitle}>{title}</div>
        <div style={styles.badgeSubtitle}>{subtitle}</div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.pageGlowTop} />
      <div style={styles.pageGlowBottom} />

      <Header />

      <section style={styles.heroSection}>
        <div style={styles.heroOverlay} />

        <div style={styles.heroTextBlock}>
          <h1 style={styles.heroTitle}>PREMIUM RESEARCH<br />PEPTIDES</h1>
          <div style={styles.heroBulletLine}>ADVANCED FORMULAS <span style={styles.dot}>•</span> VERIFIED PURITY</div>
          <div style={styles.heroBulletLine}>FAST SHIPPING</div>

          <div style={styles.heroButtons}>
            <a href="#shop" style={{ ...styles.ctaButton, ...styles.primaryCta }}>SHOP PEPTIDES</a>
            <a href="#about" style={{ ...styles.ctaButton, ...styles.secondaryCta }}>LEARN MORE</a>
          </div>
        </div>

        <HeroVial />
      </section>

      <section id="shop" style={styles.featuredSection}>
        <h2 style={styles.sectionTitle}>FEATURED PEPTIDE PRODUCTS</h2>
        <div style={styles.sectionUnderline} />

        <div style={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <section style={styles.badgesRow}>
        <FeatureBadge icon="⇄" title="FAST SHIPPING" subtitle="2-5 DAYS" />
        <FeatureBadge icon="⬡" title="LAB TESTED" subtitle="99% PURITY" />
        <FeatureBadge icon="⬢" title="SECURE" subtitle="CHECKOUT" />
        <FeatureBadge icon="🇺🇸" title="USA SELLER" subtitle="" />
      </section>

      <section style={styles.paymentSection}>
        <div style={styles.paymentTitle}>PAYMENT OPTIONS</div>
        <div style={styles.paymentRow}>
          <div style={styles.paymentChip}>ZELLE: levels.peptides.ca@gmail.com</div>
          <div style={styles.paymentChip}>PAYPAL: levels.peptides.ca@gmail.com</div>
        </div>
      </section>

      <footer style={styles.footer}>
        100% RESEARCH GRADE <span style={styles.dot}>•</span> VERIFIED QUALITY <span style={styles.dot}>•</span> TRUSTED BY RESEARCHERS
      </footer>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'radial-gradient(circle at 65% 20%, rgba(255,0,0,0.18), transparent 30%), linear-gradient(180deg, #080808 0%, #000 30%, #050505 100%)',
    color: '#fff',
    fontFamily: 'Arial, Helvetica, sans-serif',
    position: 'relative',
    overflowX: 'hidden',
  },
  pageGlowTop: {
    position: 'absolute',
    top: -120,
    right: -80,
    width: 420,
    height: 420,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,20,20,0.35), rgba(255,20,20,0))',
    filter: 'blur(40px)',
    pointerEvents: 'none',
  },
  pageGlowBottom: {
    position: 'absolute',
    bottom: 40,
    left: -120,
    width: 420,
    height: 420,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,20,20,0.2), rgba(255,20,20,0))',
    filter: 'blur(50px)',
    pointerEvents: 'none',
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 18,
    padding: '18px 34px',
    borderBottom: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(0,0,0,0.82)',
    backdropFilter: 'blur(6px)',
  },
  logoWrap: { minWidth: 200 },
  logoMain: { fontSize: 42, fontWeight: 800, letterSpacing: 2, lineHeight: 0.9 },
  logoSub: { fontSize: 24, letterSpacing: 1.5, lineHeight: 1, marginTop: 4 },
  nav: { display: 'flex', gap: 34, flexWrap: 'wrap', justifyContent: 'center' },
  navLink: { color: '#f2f2f2', textDecoration: 'none', fontSize: 16, fontWeight: 700 },
  navLinkActive: { color: '#ff1330' },
  headerIcons: { display: 'flex', gap: 16, fontSize: 28, alignItems: 'center' },
  icon: { opacity: 0.95 },
  heroSection: {
    position: 'relative',
    minHeight: 760,
    display: 'grid',
    gridTemplateColumns: '1.05fr 0.95fr',
    gap: 10,
    alignItems: 'center',
    padding: '48px 54px 36px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 78% 45%, rgba(255,40,0,0.28), transparent 20%), radial-gradient(circle at 82% 52%, rgba(255,0,0,0.18), transparent 34%)',
    pointerEvents: 'none',
  },
  heroTextBlock: { position: 'relative', zIndex: 2, maxWidth: 620 },
  heroTitle: { fontSize: 82, lineHeight: 0.95, margin: 0, fontWeight: 800, letterSpacing: -1 },
  heroBulletLine: { color: '#f8f8f8', fontSize: 24, marginTop: 22, fontWeight: 500 },
  dot: { color: '#ff1c2b', padding: '0 10px' },
  heroButtons: { display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 40 },
  ctaButton: {
    textDecoration: 'none',
    minWidth: 260,
    textAlign: 'center',
    padding: '20px 24px',
    borderRadius: 14,
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: 0.4,
    border: '1px solid rgba(255,255,255,0.18)',
  },
  primaryCta: { background: '#ff1130', color: '#fff', boxShadow: '0 0 24px rgba(255,17,48,0.28)' },
  secondaryCta: { background: 'rgba(10,10,10,0.7)', color: '#fff' },
  heroVialWrap: {
    position: 'relative',
    height: 620,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  heroMoleculeA: {
    position: 'absolute',
    top: 50,
    right: 40,
    width: 240,
    height: 240,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.12), rgba(255,0,0,0.18), rgba(255,255,255,0))',
    filter: 'blur(18px)',
  },
  heroMoleculeB: {
    position: 'absolute',
    right: 10,
    bottom: 90,
    width: 260,
    height: 260,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.08), rgba(255,0,0,0.22), rgba(255,255,255,0))',
    filter: 'blur(20px)',
  },
  heroPedestal: {
    position: 'absolute',
    bottom: 36,
    width: 380,
    height: 56,
    borderRadius: 999,
    background: 'radial-gradient(circle at center, rgba(255,40,0,0.24), rgba(20,20,20,1) 65%)',
    boxShadow: '0 0 30px rgba(255,0,0,0.2)',
  },
  heroVial: { width: 310, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' },
  capTop: { width: 220, height: 46, borderRadius: 20, background: 'linear-gradient(180deg, #ff2b18, #b80000)', boxShadow: '0 0 22px rgba(255,0,0,0.34)' },
  capBottom: { width: 196, height: 18, background: '#111', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, marginTop: -2 },
  glassLarge: {
    width: 180,
    height: 390,
    borderRadius: 34,
    background: 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03))',
    border: '2px solid rgba(255,255,255,0.22)',
    marginTop: -1,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 18,
    boxShadow: '0 14px 40px rgba(0,0,0,0.55)',
  },
  labelLarge: { width: 146, background: '#090909', borderRadius: 20, padding: '18px 10px 14px', textAlign: 'center' },
  brandLarge: { fontWeight: 800, fontSize: 28, lineHeight: 0.95 },
  brandSubLarge: { fontSize: 16, marginTop: 2, letterSpacing: 1 },
  redLine: { height: 2, background: '#ff1733', borderRadius: 999, margin: '12px 10px 14px' },
  productNameLarge: { fontWeight: 800, fontSize: 26, lineHeight: 1.05 },
  mgLarge: { color: '#ff1733', fontWeight: 800, fontSize: 28, marginTop: 8 },
  purityBand: { marginTop: 14, padding: '6px 0', fontSize: 12, color: '#111', background: 'linear-gradient(90deg, #d7d7d7, #f3f3f3, #cacaca)', fontWeight: 800 },
  disclaimerLarge: { fontSize: 10, lineHeight: 1.35, marginTop: 12, color: '#efefef', fontWeight: 700 },
  disclaimerSmall: { fontSize: 9 },
  verifiedBand: { marginTop: 12, padding: '7px 0', fontSize: 11, background: 'linear-gradient(90deg, #c8c8c8, #efefef, #c8c8c8)', color: '#111', fontWeight: 800 },
  featuredSection: { padding: '36px 34px 24px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' },
  sectionTitle: { fontSize: 30, letterSpacing: 1, margin: 0, fontWeight: 500 },
  sectionUnderline: { width: 360, maxWidth: '85%', height: 3, margin: '14px auto 30px', background: 'linear-gradient(90deg, transparent, #ff1531, transparent)' },
  productsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18 },
  productCard: {
    position: 'relative',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
    borderRadius: 20,
    border: '1px solid rgba(255,255,255,0.12)',
    padding: '18px 14px 20px',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 40px rgba(255,0,0,0.06)',
  },
  productCardGlow: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 50% 35%, rgba(255,25,25,0.18), rgba(255,25,25,0) 52%)',
    pointerEvents: 'none',
  },
  smallVialWrap: { display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 },
  smallCapTop: { width: 94, height: 22, borderRadius: 12, background: 'linear-gradient(180deg, #ff2a18, #bb0000)' },
  smallCapBottom: { width: 84, height: 9, background: '#101010', borderBottomLeftRadius: 8, borderBottomRightRadius: 8, marginTop: -1 },
  smallGlass: {
    width: 86,
    height: 150,
    borderRadius: 18,
    border: '1.5px solid rgba(255,255,255,0.18)',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.02))',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 8,
  },
  smallLabel: { width: 70, background: '#090909', borderRadius: 10, padding: '6px 4px', textAlign: 'center' },
  smallBrand: { fontWeight: 800, fontSize: 11, lineHeight: 0.95 },
  smallBrandSub: { fontSize: 6.5, letterSpacing: 0.7 },
  redLineSmall: { height: 1.5, background: '#ff1733', margin: '5px 6px 6px' },
  smallName: { fontWeight: 800, fontSize: 7.5, lineHeight: 1 },
  smallMg: { color: '#ff1733', fontWeight: 800, fontSize: 10, marginTop: 4 },
  smallPurityBand: { fontSize: 5.7, background: '#f2f2f2', color: '#111', marginTop: 5, padding: '2px 0', fontWeight: 800 },
  smallDisclaimer: { fontSize: 4.8, marginTop: 5, color: '#ddd', lineHeight: 1.2 },
  smallVerified: { fontSize: 5.4, marginTop: 5, background: '#e6e6e6', color: '#111', padding: '2px 0', fontWeight: 800 },
  productTitle: { marginTop: 16, fontSize: 18, fontWeight: 500, position: 'relative', zIndex: 1 },
  productMg: { fontSize: 24, color: '#ff1733', marginTop: 6, fontWeight: 700, position: 'relative', zIndex: 1 },
  stars: { color: '#ff1733', fontSize: 28, letterSpacing: 1, marginTop: 4, position: 'relative', zIndex: 1 },
  productPrice: { fontSize: 28, fontWeight: 800, marginTop: 6, position: 'relative', zIndex: 1 },
  badgesRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: 18,
    padding: '28px 34px 20px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  badgeItem: { display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', minHeight: 72 },
  badgeIcon: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    border: '2px solid #ff1733',
    color: '#ff1733',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 26,
    flexShrink: 0,
  },
  badgeTitle: { fontSize: 16, fontWeight: 700 },
  badgeSubtitle: { fontSize: 16, lineHeight: 1.2, marginTop: 2 },
  paymentSection: { padding: '22px 34px 28px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' },
  paymentTitle: { fontSize: 26, marginBottom: 16, fontWeight: 700 },
  paymentRow: { display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' },
  paymentChip: { padding: '14px 18px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)', fontSize: 16 },
  footer: { textAlign: 'center', padding: '24px 20px 44px', color: '#f0f0f0', fontSize: 22 },
}

