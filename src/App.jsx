import React from 'react'

const products = [
  { name: 'Retatrutide', mg: '10mg', price: '$299' },
  { name: 'Retatrutide', mg: '20mg', price: '$399' },
  { name: 'Tirzepatide', mg: '10mg', price: '$249' },
  { name: 'Tirzepatide', mg: '20mg', price: '$349' },
  { name: 'Tesamorelin', mg: '10mg', price: '$179' },
  { name: 'NAD+', mg: '500mg', price: '$129' },
  { name: 'BPC-157', mg: '10mg', price: '$99' },
  { name: 'TB-500', mg: '10mg', price: '$149' },
  { name: 'MOTS-C', mg: '10mg', price: '$149' },
  { name: 'GHK-CU', mg: '100mg', price: '$169' },
  { name: 'SEMAX', mg: '10mg', price: '$119' },
]

function VialCard({ name, mg, price }) {
  return (
    <div style={styles.card}>
      <div style={styles.vialWrap}>
        <div style={styles.capTop} />
        <div style={styles.capBottom} />
        <div style={styles.glass}>
          <div style={styles.label}>
            <div style={styles.brand}>LEVEL<br />PEPTIDES</div>
            <div style={styles.redLine} />
            <div style={styles.productName}>{name}</div>
            <div style={styles.mg}>{mg}</div>
            <div style={styles.purity}>99% PURITY</div>
            <div style={styles.disclaimer}>FOR RESEARCH PURPOSES ONLY<br />NOT FOR HUMAN CONSUMPTION</div>
            <div style={styles.verified}>LEVEL VERIFIED</div>
          </div>
        </div>
      </div>
      <div style={styles.cardInfo}>
        <div>
          <div style={styles.cardTitle}>{name}</div>
          <div style={styles.cardSubtitle}>{mg} vial</div>
        </div>
        <div style={styles.price}>{price}</div>
      </div>
      <button style={styles.button}>Order Now</button>
    </div>
  )
}

function PaymentChip({ title, value }) {
  return (
    <div style={styles.paymentChip}>
      <div style={styles.paymentIcon}>$</div>
      <div>
        <div style={styles.paymentTitle}>{title}</div>
        <div style={styles.paymentValue}>{value}</div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.backgroundGlowOne} />
      <div style={styles.backgroundGlowTwo} />

      <header style={styles.header}>
        <div style={styles.logoBlock}>
          <div style={styles.logoMark}>L</div>
          <div>
            <div style={styles.logoText}>LEVEL PEPTIDES</div>
            <div style={styles.logoSub}>Premium Research Peptides</div>
          </div>
        </div>
        <nav style={styles.nav}>
          <a href="#shop" style={styles.navLink}>Shop</a>
          <a href="#payments" style={styles.navLink}>Payments</a>
          <a href="#policies" style={styles.navLink}>Policies</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroTextWrap}>
          <div style={styles.badge}>RESEARCH USE ONLY</div>
          <h1 style={styles.heroTitle}>Premium peptide vials with the dark luxury style you wanted.</h1>
          <p style={styles.heroText}>
            A clean storefront experience with premium vial-style product cards, manual checkout instructions,
            and accepted payment methods clearly shown.
          </p>
          <div style={styles.heroButtons}>
            <a href="#shop" style={{ ...styles.button, ...styles.primaryButton, textDecoration: 'none' }}>Shop Peptides</a>
            <a href="#payments" style={{ ...styles.button, ...styles.secondaryButton, textDecoration: 'none' }}>View Payments</a>
          </div>
        </div>

        <div style={styles.heroFeature}>
          <div style={styles.featureVialLarge}>
            <div style={styles.capTop} />
            <div style={styles.capBottom} />
            <div style={styles.glassLarge}>
              <div style={styles.labelLarge}>
                <div style={styles.brandLarge}>LEVEL<br />PEPTIDES</div>
                <div style={styles.redLine} />
                <div style={styles.productNameLarge}>RETATRUTIDE</div>
                <div style={styles.mgLarge}>10mg</div>
                <div style={styles.purity}>99% PURITY</div>
                <div style={styles.disclaimer}>FOR RESEARCH PURPOSES ONLY<br />NOT FOR HUMAN CONSUMPTION</div>
                <div style={styles.verified}>LEVEL VERIFIED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" style={styles.section}>
        <div style={styles.sectionHeader}>
          <div>
            <div style={styles.sectionEyebrow}>PRODUCTS</div>
            <h2 style={styles.sectionTitle}>Featured Vials</h2>
          </div>
          <div style={styles.sectionNote}>Ferrari red accents • premium black finish • research disclaimer</div>
        </div>

        <div style={styles.grid}>
          {products.map((product) => (
            <VialCard key={`${product.name}-${product.mg}`} {...product} />
          ))}
        </div>
      </section>

      <section id="payments" style={styles.section}>
        <div style={styles.paymentsPanel}>
          <div style={styles.sectionEyebrow}>PAYMENTS ACCEPTED</div>
          <h2 style={styles.sectionTitle}>Manual Checkout</h2>
          <p style={styles.paymentText}>
            Send payment first, then email your order details and payment proof. Shipping can be added manually to the final invoice amount.
          </p>
          <div style={styles.paymentGrid}>
            <PaymentChip title="Zelle" value="levels.peptides.ca@gmail.com" />
            <PaymentChip title="PayPal" value="levels.peptides.ca@gmail.com" />
          </div>
        </div>
      </section>

      <section id="policies" style={styles.section}>
        <div style={styles.policyGrid}>
          <div style={styles.policyCard}>
            <div style={styles.policyTitle}>Research Use Disclaimer</div>
            <div style={styles.policyText}>All products are sold strictly for laboratory research purposes only and are not for human consumption.</div>
          </div>
          <div style={styles.policyCard}>
            <div style={styles.policyTitle}>All Sales Final</div>
            <div style={styles.policyText}>No refunds, no returns, and no exchanges. All sales are final.</div>
          </div>
          <div style={styles.policyCard}>
            <div style={styles.policyTitle}>Shipping Policy</div>
            <div style={styles.policyText}>Orders typically ship in 5–7 business days once processed.</div>
          </div>
          <div style={styles.policyCard}>
            <div style={styles.policyTitle}>No Medical Claims</div>
            <div style={styles.policyText}>No statements on this website are intended to diagnose, treat, cure, or prevent any disease.</div>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <div style={styles.contactBox}>
          <div style={styles.sectionEyebrow}>CONTACT</div>
          <h2 style={styles.sectionTitle}>Level Peptides</h2>
          <div style={styles.contactLine}>Email: levels.peptides.ca@gmail.com</div>
          <div style={styles.contactLine}>Phone: 909-521-0085</div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#000',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundGlowOne: {
    position: 'fixed',
    top: -120,
    right: -120,
    width: 420,
    height: 420,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,0,0,0.25), rgba(255,0,0,0))',
    pointerEvents: 'none',
    filter: 'blur(20px)',
  },
  backgroundGlowTwo: {
    position: 'fixed',
    bottom: -180,
    left: -100,
    width: 500,
    height: 500,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,40,0,0.2), rgba(255,40,0,0))',
    pointerEvents: 'none',
    filter: 'blur(30px)',
  },
  header: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '24px 24px 8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
    position: 'relative',
    zIndex: 2,
  },
  logoBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
  },
  logoMark: {
    width: 46,
    height: 46,
    borderRadius: 14,
    background: 'linear-gradient(135deg, #8b0000, #ff2a00)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    fontSize: 24,
    boxShadow: '0 0 25px rgba(255,0,0,0.35)',
  },
  logoText: { fontWeight: 800, fontSize: 20, letterSpacing: 0.5 },
  logoSub: { color: '#aaa', fontSize: 13 },
  nav: { display: 'flex', gap: 18, flexWrap: 'wrap' },
  navLink: { color: '#fff', textDecoration: 'none', fontSize: 14, opacity: 0.9 },
  hero: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '48px 24px 40px',
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: 32,
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  heroTextWrap: {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 28,
    padding: 32,
    boxShadow: '0 0 40px rgba(255,0,0,0.1)',
  },
  badge: {
    display: 'inline-block',
    padding: '8px 14px',
    borderRadius: 999,
    background: 'rgba(255,40,0,0.14)',
    color: '#ff6a4d',
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 18,
  },
  heroTitle: { fontSize: 52, lineHeight: 1.03, margin: '0 0 16px', fontWeight: 800 },
  heroText: { color: '#c9c9c9', fontSize: 18, lineHeight: 1.6, margin: 0 },
  heroButtons: { display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 28 },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    padding: '14px 22px',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer',
  },
  primaryButton: { background: '#ff2a00', color: '#fff', boxShadow: '0 0 20px rgba(255,42,0,0.3)' },
  secondaryButton: { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' },
  heroFeature: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 520,
    background: 'radial-gradient(circle at center, rgba(255,0,0,0.22), rgba(255,0,0,0) 65%)',
    borderRadius: 32,
  },
  featureVialLarge: {
    width: 280,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  capTop: {
    width: '72%',
    height: 34,
    borderRadius: 18,
    background: 'linear-gradient(180deg, #ff2a00, #b10000)',
    boxShadow: '0 0 20px rgba(255,0,0,0.35)',
  },
  capBottom: {
    width: '66%',
    height: 16,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    background: '#121212',
    marginTop: -3,
  },
  glassLarge: {
    width: '58%',
    height: 380,
    borderRadius: 30,
    background: 'linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.05))',
    border: '2px solid rgba(255,255,255,0.24)',
    marginTop: -2,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 18,
    boxShadow: '0 20px 80px rgba(0,0,0,0.45)',
  },
  labelLarge: {
    width: '84%',
    borderRadius: 18,
    background: '#090909',
    padding: '18px 14px',
    textAlign: 'center',
  },
  brandLarge: { fontWeight: 800, fontSize: 24, lineHeight: 1.05 },
  productNameLarge: { fontWeight: 800, fontSize: 26, marginTop: 14 },
  mgLarge: { fontWeight: 800, fontSize: 24, marginTop: 8, color: '#ff3b12' },
  section: { maxWidth: 1200, margin: '0 auto', padding: '18px 24px 46px', position: 'relative', zIndex: 2 },
  sectionHeader: { display: 'flex', justifyContent: 'space-between', gap: 20, alignItems: 'end', marginBottom: 24, flexWrap: 'wrap' },
  sectionEyebrow: { color: '#ff6a4d', fontWeight: 700, fontSize: 12, letterSpacing: 1 },
  sectionTitle: { fontSize: 36, margin: '6px 0 0', fontWeight: 800 },
  sectionNote: { color: '#aaa', fontSize: 14 },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 22,
  },
  card: {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 26,
    padding: 22,
    boxShadow: '0 0 26px rgba(255,0,0,0.07)',
  },
  vialWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  glass: {
    width: 132,
    height: 230,
    borderRadius: 24,
    background: 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))',
    border: '2px solid rgba(255,255,255,0.22)',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 10,
  },
  label: {
    width: '84%',
    background: '#090909',
    borderRadius: 16,
    padding: '12px 8px',
    textAlign: 'center',
  },
  brand: { fontWeight: 800, fontSize: 14, lineHeight: 1.05 },
  redLine: { height: 2, background: '#ff2a00', borderRadius: 999, margin: '10px 10px 10px' },
  productName: { fontWeight: 800, fontSize: 16 },
  mg: { fontWeight: 800, fontSize: 18, color: '#ff3b12', marginTop: 6 },
  purity: { fontSize: 11, marginTop: 10, color: '#d6d6d6' },
  disclaimer: { fontSize: 9, lineHeight: 1.4, color: '#c8c8c8', marginTop: 10 },
  verified: { fontSize: 10, marginTop: 10, color: '#e5e5e5' },
  cardInfo: { display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'center', marginBottom: 14 },
  cardTitle: { fontWeight: 800, fontSize: 19 },
  cardSubtitle: { color: '#aaa', fontSize: 13, marginTop: 4 },
  price: { color: '#ff6a4d', fontWeight: 800, fontSize: 22 },
  paymentsPanel: {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 28,
    padding: 30,
  },
  paymentText: { color: '#c8c8c8', lineHeight: 1.7, maxWidth: 760 },
  paymentGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 22 },
  paymentChip: {
    display: 'flex',
    gap: 14,
    alignItems: 'center',
    background: '#0e0e0e',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 20,
    padding: 18,
  },
  paymentIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    background: 'linear-gradient(135deg, #8b0000, #ff2a00)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
  },
  paymentTitle: { fontWeight: 700, fontSize: 16 },
  paymentValue: { color: '#aaa', fontSize: 14, marginTop: 4 },
  policyGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 },
  policyCard: {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 22,
    padding: 22,
  },
  policyTitle: { fontWeight: 800, fontSize: 20, marginBottom: 10 },
  policyText: { color: '#bdbdbd', lineHeight: 1.65, fontSize: 14 },
  contactBox: {
    background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 26,
    padding: 28,
    textAlign: 'center',
  },
  contactLine: { color: '#ddd', fontSize: 18, marginTop: 10 },
}
