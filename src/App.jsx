import React, { useMemo, useRef, useState } from 'react'

const initialProducts = [
  { id: 1, name: 'RETATRUTIDE', mg: '10mg', price: 119, active: true },
  { id: 2, name: 'TIRZEPATIDE', mg: '10mg', price: 99, active: true },
  { id: 3, name: 'TESAMORELIN', mg: '10mg', price: 89, active: true },
  { id: 4, name: 'NAD+', mg: '200mg', price: 99, active: true },
]

const initialOrders = [
  {
    id: 'LP-1001',
    customer: 'Sample Customer',
    email: 'customer@example.com',
    items: 'RETATRUTIDE 10mg',
    total: '$127',
    paymentMethod: 'Zelle',
    paymentProof: 'uploaded-proof.png',
    orderStatus: 'Payment Proof Uploaded',
    shippingStatus: 'Pending',
    trackingNumber: '',
  },
]

const initialBranding = {
  companyName: 'LEVEL PEPTIDES',
  tagline: 'Premium Research Peptides',
  contactEmail: 'levels.peptides.ca@gmail.com',
  phone: '909-521-0085',
  zelle: 'levels.peptides.ca@gmail.com',
  paypal: 'levels.peptides.ca@gmail.com',
  accent: '#ff1733',
  shippingNote: 'FAST SHIPPING 2-5 DAYS',
}

function PaymentLogo({ type }) {
  if (type === 'Zelle') {
    return (
      <div style={{ ...styles.payLogo, background: '#6d1ed4' }}>
        <span style={{ fontWeight: 800, fontSize: 12 }}>Z</span>
      </div>
    )
  }

  return (
    <div style={{ ...styles.payLogo, background: '#003087' }}>
      <span style={{ fontWeight: 800, fontSize: 10 }}>P</span>
    </div>
  )
}

function Header({ setView, branding }) {
  return (
    <header style={styles.header}>
      <div style={styles.logoWrap}>
        <div style={styles.logoMain}>{branding.companyName.split(' ')[0]}</div>
        <div style={styles.logoSub}>{branding.companyName.split(' ').slice(1).join(' ') || 'PEPTIDES'}</div>
      </div>

      <nav style={styles.nav}>
        <button style={styles.navButton} onClick={() => setView('store')}>HOME</button>
        <button style={styles.navButton} onClick={() => setView('store')}>SHOP</button>
        <button style={styles.navButton} onClick={() => setView('store')}>PEPTIDES</button>
        <button style={styles.navButton} onClick={() => setView('store')}>RESEARCH GUIDES</button>
        <button style={styles.navButton} onClick={() => setView('store')}>ABOUT US</button>
      </nav>

      <div style={styles.headerIcons}>
        <span style={styles.icon}>⌕</span>
        <span style={styles.icon}>◯</span>
        <button style={styles.adminLink} onClick={() => setView('admin')}>ADMIN</button>
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
            <div style={styles.disclaimerLarge}>FOR RESEARCH PURPOSES ONLY<br /><span style={styles.disclaimerSmall}>NOT FOR HUMAN CONSUMPTION</span></div>
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
      <div style={styles.productPrice}>${price}</div>
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

function AdminPanel({
  products,
  setProducts,
  branding,
  setBranding,
  orders,
  setOrders,
  setView,
}) {
  const [newProduct, setNewProduct] = useState({ name: '', mg: '', price: '' })
  const [newOrder, setNewOrder] = useState({
    customer: '',
    email: '',
    items: '',
    total: '',
    paymentMethod: 'Zelle',
  })

  const exportCsv = () => {
    const header = ['Order ID', 'Customer', 'Email', 'Items', 'Total', 'Payment Method', 'Payment Proof', 'Order Status', 'Shipping Status', 'Tracking Number']
    const rows = orders.map((order) => [
      order.id,
      order.customer,
      order.email,
      order.items,
      order.total,
      order.paymentMethod,
      order.paymentProof || '',
      order.orderStatus,
      order.shippingStatus,
      order.trackingNumber || '',
    ])

    const csv = [header, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(','))
      .join('
')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'level-peptides-orders.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const addProduct = () => {
    if (!newProduct.name || !newProduct.mg || !newProduct.price) return
    setProducts([
      ...products,
      {
        id: Date.now(),
        name: newProduct.name.toUpperCase(),
        mg: newProduct.mg,
        price: Number(newProduct.price),
        active: true,
      },
    ])
    setNewProduct({ name: '', mg: '', price: '' })
  }

  const addManualOrder = () => {
    if (!newOrder.customer || !newOrder.items || !newOrder.total) return
    setOrders([
      {
        id: `LP-${Date.now().toString().slice(-5)}`,
        customer: newOrder.customer,
        email: newOrder.email,
        items: newOrder.items,
        total: newOrder.total,
        paymentMethod: newOrder.paymentMethod,
        paymentProof: '',
        orderStatus: 'Pending Review',
        shippingStatus: 'Pending',
        trackingNumber: '',
      },
      ...orders,
    ])
    setNewOrder({ customer: '', email: '', items: '', total: '', paymentMethod: 'Zelle' })
  }

  const updateOrder = (id, patch) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, ...patch } : order)))
  }

  return (
    <div style={styles.adminPage}>
      <div style={styles.adminTopBar}>
        <div>
          <div style={styles.adminEyebrow}>ADMIN DASHBOARD</div>
          <h2 style={styles.adminTitle}>Store Controls</h2>
        </div>
        <div style={styles.adminActions}>
          <button style={styles.secondaryAdminButton} onClick={() => setView('store')}>View Store</button>
          <button style={styles.primaryAdminButton} onClick={exportCsv}>Export CSV</button>
        </div>
      </div>

      <div style={styles.adminGrid}>
        <div style={styles.panelCard}>
          <div style={styles.panelTitle}>Product Manager</div>
          <div style={styles.panelText}>Add products, update vial sizes, and toggle active listings.</div>
          <div style={styles.formRow}>
            <input style={styles.input} placeholder="Product name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            <input style={styles.input} placeholder="mg" value={newProduct.mg} onChange={(e) => setNewProduct({ ...newProduct, mg: e.target.value })} />
            <input style={styles.input} placeholder="price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
          </div>
          <button style={styles.primaryAdminButton} onClick={addProduct}>Add Product</button>
          <div style={styles.dataList}>
            {products.map((product) => (
              <div key={product.id} style={styles.rowCard}>
                <div>
                  <div style={styles.rowTitle}>{product.name}</div>
                  <div style={styles.rowSub}>{product.mg}</div>
                </div>
                <div style={styles.rowActions}>
                  <input
                    style={{ ...styles.input, width: 90 }}
                    value={product.price}
                    onChange={(e) => setProducts(products.map((item) => item.id === product.id ? { ...item, price: Number(e.target.value || 0) } : item))}
                  />
                  <button style={styles.smallButton} onClick={() => setProducts(products.map((item) => item.id === product.id ? { ...item, active: !item.active } : item))}>{product.active ? 'Active' : 'Hidden'}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.panelCard}>
          <div style={styles.panelTitle}>Branding / Settings</div>
          <div style={styles.panelText}>Edit brand text, contact info, and payment settings.</div>
          <div style={styles.formGrid}>
            <input style={styles.input} value={branding.companyName} onChange={(e) => setBranding({ ...branding, companyName: e.target.value })} />
            <input style={styles.input} value={branding.tagline} onChange={(e) => setBranding({ ...branding, tagline: e.target.value })} />
            <input style={styles.input} value={branding.contactEmail} onChange={(e) => setBranding({ ...branding, contactEmail: e.target.value })} />
            <input style={styles.input} value={branding.phone} onChange={(e) => setBranding({ ...branding, phone: e.target.value })} />
            <input style={styles.input} value={branding.zelle} onChange={(e) => setBranding({ ...branding, zelle: e.target.value })} />
            <input style={styles.input} value={branding.paypal} onChange={(e) => setBranding({ ...branding, paypal: e.target.value })} />
          </div>
        </div>

        <div style={styles.panelCardWide}>
          <div style={styles.panelTitle}>Manual Payment Orders</div>
          <div style={styles.panelText}>Manage manual Zelle and PayPal orders with review states, payment proof logging, payment confirmation, and shipping updates.</div>
          <div style={styles.formGrid}>
            <input style={styles.input} placeholder="Customer" value={newOrder.customer} onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })} />
            <input style={styles.input} placeholder="Email" value={newOrder.email} onChange={(e) => setNewOrder({ ...newOrder, email: e.target.value })} />
            <input style={styles.input} placeholder="Items" value={newOrder.items} onChange={(e) => setNewOrder({ ...newOrder, items: e.target.value })} />
            <input style={styles.input} placeholder="Total" value={newOrder.total} onChange={(e) => setNewOrder({ ...newOrder, total: e.target.value })} />
          </div>
          <div style={styles.formRow}>
            <select style={styles.input} value={newOrder.paymentMethod} onChange={(e) => setNewOrder({ ...newOrder, paymentMethod: e.target.value })}>
              <option>Zelle</option>
              <option>PayPal</option>
            </select>
            <button style={styles.primaryAdminButton} onClick={addManualOrder}>Create Manual Order</button>
          </div>

          <div style={styles.ordersTable}>
            {orders.map((order) => (
              <div key={order.id} style={styles.orderRow}>
                <div>
                  <div style={styles.rowTitle}>{order.id} · {order.customer}</div>
                  <div style={styles.rowSub}>{order.items} · {order.total} · {order.paymentMethod}</div>
                  <div style={styles.orderMeta}>Payment proof: {order.paymentProof || 'none uploaded'}</div>
                </div>
                <div style={styles.orderControls}>
                  <select style={{ ...styles.input, width: 190 }} value={order.orderStatus} onChange={(e) => updateOrder(order.id, { orderStatus: e.target.value })}>
                    <option>Pending Review</option>
                    <option>Payment Proof Uploaded</option>
                    <option>Awaiting Confirmation</option>
                    <option>Mark Paid</option>
                    <option>Request Info</option>
                  </select>
                  <input
                    style={{ ...styles.input, width: 180 }}
                    placeholder="Payment proof file"
                    value={order.paymentProof}
                    onChange={(e) => updateOrder(order.id, { paymentProof: e.target.value })}
                  />
                  <select style={{ ...styles.input, width: 140 }} value={order.shippingStatus} onChange={(e) => updateOrder(order.id, { shippingStatus: e.target.value })}>
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                  </select>
                  <input
                    style={{ ...styles.input, width: 180 }}
                    placeholder="Tracking #"
                    value={order.trackingNumber}
                    onChange={(e) => updateOrder(order.id, { trackingNumber: e.target.value })}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState('store')
  const [products, setProducts] = useState(initialProducts)
  const [orders, setOrders] = useState(initialOrders)
  const [branding, setBranding] = useState(initialBranding)
  const [ageVerified, setAgeVerified] = useState(false)
  const [riskAccepted, setRiskAccepted] = useState(false)

  const activeProducts = useMemo(() => products.filter((product) => product.active), [products])

  if (view === 'admin') {
    return (
      <AdminPanel
        products={products}
        setProducts={setProducts}
        branding={branding}
        setBranding={setBranding}
        orders={orders}
        setOrders={setOrders}
        setView={setView}
      />
    )
  }

  return (
    <div style={styles.page}>
      {(!ageVerified || !riskAccepted) && (
        <div style={styles.modalOverlay}>
          {!ageVerified ? (
            <div style={styles.modalCard}>
              <div style={styles.modalEyebrow}>AGE VERIFICATION</div>
              <h2 style={styles.modalTitle}>You must be 21+ to enter this site.</h2>
              <p style={styles.modalText}>By entering, you confirm that you are at least 21 years old and understand all products are offered strictly for laboratory research purposes only.</p>
              <div style={styles.modalButtons}>
                <button style={{ ...styles.ctaButton, ...styles.primaryCta, minWidth: 180 }} onClick={() => setAgeVerified(true)}>I AM 21+</button>
                <button style={{ ...styles.ctaButton, ...styles.secondaryCta, minWidth: 180 }} onClick={() => { window.location.href = 'https://www.google.com' }}>EXIT SITE</button>
              </div>
            </div>
          ) : (
            <div style={styles.modalCard}>
              <div style={styles.modalEyebrow}>RESEARCH AGREEMENT</div>
              <h2 style={styles.modalTitle}>Assumption of Risk & Liability Waiver</h2>
              <p style={styles.modalText}>By continuing, you acknowledge that all materials are sold solely for lawful laboratory and research use, not for human consumption, medical use, food use, cosmetic use, or household use. You assume all risk for handling, storage, use, and misuse of products purchased from this site.</p>
              <p style={styles.modalText}>You agree to release, indemnify, and hold harmless Level Peptides, its owners, affiliates, employees, and agents from any and all claims, losses, liabilities, damages, injuries, costs, or expenses arising from purchase, possession, transport, handling, or use of any product.</p>
              <div style={styles.modalButtons}>
                <button style={{ ...styles.ctaButton, ...styles.primaryCta, minWidth: 220 }} onClick={() => setRiskAccepted(true)}>I AGREE & ENTER</button>
                <button style={{ ...styles.ctaButton, ...styles.secondaryCta, minWidth: 180 }} onClick={() => { window.location.href = 'https://www.google.com' }}>DECLINE</button>
              </div>
            </div>
          )}
        </div>
      )}

      <div style={styles.pageGlowTop} />
      <div style={styles.pageGlowBottom} />

      <Header setView={setView} branding={branding} />

      <section style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroTextBlock}>
          <h1 style={styles.heroTitle}>PREMIUM RESEARCH<br />PEPTIDES</h1>
          <div style={styles.heroBulletLine}>ADVANCED FORMULAS <span style={styles.dot}>•</span> VERIFIED PURITY</div>
          <div style={styles.heroBulletLine}>{branding.shippingNote}</div>
          <div style={styles.heroButtons}>
            <a href="#shop" style={{ ...styles.ctaButton, ...styles.primaryCta }}>SHOP PEPTIDES</a>
            <a href="#legal" style={{ ...styles.ctaButton, ...styles.secondaryCta }}>LEGAL NOTICE</a>
          </div>
        </div>
        <HeroVial />
      </section>

      <section id="shop" style={styles.featuredSection}>
        <h2 style={styles.sectionTitle}>FEATURED PEPTIDE PRODUCTS</h2>
        <div style={styles.sectionUnderline} />
        <div style={styles.productsGrid}>
          {activeProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
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
          <div style={styles.paymentChip}><PaymentLogo type="Zelle" /> <span>ZELLE: {branding.zelle}</span></div>
          <div style={styles.paymentChip}><PaymentLogo type="PayPal" /> <span>PAYPAL: {branding.paypal}</span></div>
        </div>
        <div style={styles.manualCheckoutPanel}>
          <div style={styles.manualCheckoutTitle}>Manual Checkout</div>
          <div style={styles.manualCheckoutText}>Send payment by Zelle or PayPal, then email your order details and payment proof for review. Orders are manually reviewed before approval and shipping.</div>
          <div style={styles.manualCheckoutSteps}>
            <div style={styles.stepCard}><div style={styles.stepNumber}>1</div><div>Select your peptide and total amount</div></div>
            <div style={styles.stepCard}><div style={styles.stepNumber}>2</div><div>Send payment through Zelle or PayPal</div></div>
            <div style={styles.stepCard}><div style={styles.stepNumber}>3</div><div>Upload or email payment proof for confirmation</div></div>
            <div style={styles.stepCard}><div style={styles.stepNumber}>4</div><div>Order moves through review, confirmation, and shipping updates</div></div>
          </div>
        </div>
      </section>

      <section id="legal" style={styles.legalSection}>
        <div style={styles.legalGrid}>
          <div style={styles.legalCard}>
            <div style={styles.legalTitle}>Legal Notice</div>
            <div style={styles.legalText}>All products and content on this site are provided exclusively for laboratory research purposes. Nothing on this website constitutes medical advice, diagnosis, treatment guidance, or a recommendation for human or veterinary use.</div>
          </div>
          <div style={styles.legalCard}>
            <div style={styles.legalTitle}>Assumption of Risk</div>
            <div style={styles.legalText}>By purchasing, possessing, or using any item from this site, the buyer accepts full responsibility for verifying legality, suitability, safe handling, storage, transport, and use within their jurisdiction and facility.</div>
          </div>
          <div style={styles.legalCard}>
            <div style={styles.legalTitle}>Liability Waiver</div>
            <div style={styles.legalText}>Buyer agrees to release and hold harmless Level Peptides and its affiliates from any claims or damages resulting from misuse, improper handling, relabeling, resale, unauthorized application, or any use inconsistent with research-only restrictions.</div>
          </div>
          <div style={styles.legalCard}>
            <div style={styles.legalTitle}>Additional Notice</div>
            <div style={styles.legalText}>All sales are final. No refunds or returns. Products are not intended for human consumption. Customer is responsible for ensuring compliance with all applicable local, state, and federal laws before purchase.</div>
          </div>
        </div>
      </section>

      <section style={styles.researchAgreementBar}>
        <div style={styles.researchAgreementText}>All products sold by Level Peptides are intended strictly for research purposes only.</div>
      </section>

      <footer style={styles.footer}>100% RESEARCH GRADE <span style={styles.dot}>•</span> VERIFIED QUALITY <span style={styles.dot}>•</span> TRUSTED BY RESEARCHERS</footer>
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
  adminPage: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #060606, #000)',
    color: '#fff',
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: 28,
  },
  adminTopBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 24, flexWrap: 'wrap' },
  adminEyebrow: { color: '#ff1733', fontSize: 12, fontWeight: 800, letterSpacing: 1.2 },
  adminTitle: { margin: '6px 0 0', fontSize: 38, fontWeight: 800 },
  adminActions: { display: 'flex', gap: 12, flexWrap: 'wrap' },
  primaryAdminButton: { background: '#ff1733', color: '#fff', border: 'none', padding: '12px 18px', borderRadius: 12, fontWeight: 800, cursor: 'pointer' },
  secondaryAdminButton: { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 18px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' },
  adminGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 18 },
  panelCard: { background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: 22 },
  panelCardWide: { gridColumn: '1 / -1', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: 22 },
  panelTitle: { fontSize: 24, fontWeight: 800, marginBottom: 8 },
  panelText: { color: '#cfcfcf', fontSize: 14, lineHeight: 1.6, marginBottom: 16 },
  formRow: { display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 14 },
  formGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, marginBottom: 14 },
  input: { background: '#0f0f0f', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '12px 14px', fontSize: 14 },
  dataList: { display: 'grid', gap: 12 },
  rowCard: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: 14, background: 'rgba(255,255,255,0.03)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.08)' },
  rowTitle: { fontWeight: 800, fontSize: 16 },
  rowSub: { color: '#bcbcbc', fontSize: 13, marginTop: 4 },
  rowActions: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' },
  smallButton: { background: '#1a1a1a', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '10px 12px', cursor: 'pointer', fontWeight: 700 },
  ordersTable: { display: 'grid', gap: 12, marginTop: 12 },
  orderRow: { display: 'flex', justifyContent: 'space-between', gap: 14, alignItems: 'center', padding: 16, borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap' },
  orderControls: { display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' },
  orderMeta: { color: '#8f8f8f', fontSize: 12, marginTop: 6 },
  pageGlowTop: { position: 'absolute', top: -120, right: -80, width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,20,20,0.35), rgba(255,20,20,0))', filter: 'blur(40px)', pointerEvents: 'none' },
  pageGlowBottom: { position: 'absolute', bottom: 40, left: -120, width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,20,20,0.2), rgba(255,20,20,0))', filter: 'blur(50px)', pointerEvents: 'none' },
  header: { position: 'sticky', top: 0, zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, padding: '18px 34px', borderBottom: '1px solid rgba(255,255,255,0.12)', background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(6px)' },
  logoWrap: { minWidth: 200 },
  logoMain: { fontSize: 42, fontWeight: 800, letterSpacing: 2, lineHeight: 0.9 },
  logoSub: { fontSize: 24, letterSpacing: 1.5, lineHeight: 1, marginTop: 4 },
  nav: { display: 'flex', gap: 34, flexWrap: 'wrap', justifyContent: 'center' },
  navLink: { color: '#f2f2f2', textDecoration: 'none', fontSize: 16, fontWeight: 700 },
  navLinkActive: { color: '#ff1330' },
  navButton: { background: 'transparent', border: 'none', color: '#f2f2f2', fontSize: 16, fontWeight: 700, cursor: 'pointer' },
  headerIcons: { display: 'flex', gap: 16, fontSize: 28, alignItems: 'center' },
  icon: { opacity: 0.95 },
  adminLink: { background: '#ff1733', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 12px', fontWeight: 800, cursor: 'pointer' },
  heroSection: { position: 'relative', minHeight: 760, display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 10, alignItems: 'center', padding: '48px 54px 36px', borderBottom: '1px solid rgba(255,255,255,0.08)' },
  heroOverlay: { position: 'absolute', inset: 0, background: 'radial-gradient(circle at 78% 45%, rgba(255,40,0,0.28), transparent 20%), radial-gradient(circle at 82% 52%, rgba(255,0,0,0.18), transparent 34%)', pointerEvents: 'none' },
  heroTextBlock: { position: 'relative', zIndex: 2, maxWidth: 620 },
  heroTitle: { fontSize: 82, lineHeight: 0.95, margin: 0, fontWeight: 800, letterSpacing: -1 },
  heroBulletLine: { color: '#f8f8f8', fontSize: 24, marginTop: 22, fontWeight: 500 },
  dot: { color: '#ff1c2b', padding: '0 10px' },
  heroButtons: { display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 40 },
  ctaButton: { textDecoration: 'none', minWidth: 260, textAlign: 'center', padding: '20px 24px', borderRadius: 14, fontSize: 22, fontWeight: 800, letterSpacing: 0.4, border: '1px solid rgba(255,255,255,0.18)', cursor: 'pointer' },
  primaryCta: { background: '#ff1130', color: '#fff', boxShadow: '0 0 24px rgba(255,17,48,0.28)' },
  secondaryCta: { background: 'rgba(10,10,10,0.7)', color: '#fff' },
  heroVialWrap: { position: 'relative', height: 620, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 },
  heroMoleculeA: { position: 'absolute', top: 50, right: 40, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.12), rgba(255,0,0,0.18), rgba(255,255,255,0))', filter: 'blur(18px)' },
  heroMoleculeB: { position: 'absolute', right: 10, bottom: 90, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08), rgba(255,0,0,0.22), rgba(255,255,255,0))', filter: 'blur(20px)' },
  heroPedestal: { position: 'absolute', bottom: 36, width: 380, height: 56, borderRadius: 999, background: 'radial-gradient(circle at center, rgba(255,40,0,0.24), rgba(20,20,20,1) 65%)', boxShadow: '0 0 30px rgba(255,0,0,0.2)' },
  heroVial: { width: 310, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' },
  capTop: { width: 220, height: 46, borderRadius: 20, background: 'linear-gradient(180deg, #ff2b18, #b80000)', boxShadow: '0 0 22px rgba(255,0,0,0.34)' },
  capBottom: { width: 196, height: 18, background: '#111', borderBottomLeftRadius: 14, borderBottomRightRadius: 14, marginTop: -2 },
  glassLarge: { width: 180, height: 390, borderRadius: 34, background: 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03))', border: '2px solid rgba(255,255,255,0.22)', marginTop: -1, display: 'flex', justifyContent: 'center', paddingTop: 18, boxShadow: '0 14px 40px rgba(0,0,0,0.55)' },
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
  productCard: { position: 'relative', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', borderRadius: 20, border: '1px solid rgba(255,255,255,0.12)', padding: '18px 14px 20px', overflow: 'hidden', boxShadow: 'inset 0 0 40px rgba(255,0,0,0.06)' },
  productCardGlow: { position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 35%, rgba(255,25,25,0.18), rgba(255,25,25,0) 52%)', pointerEvents: 'none' },
  smallVialWrap: { display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 },
  smallCapTop: { width: 94, height: 22, borderRadius: 12, background: 'linear-gradient(180deg, #ff2a18, #bb0000)' },
  smallCapBottom: { width: 84, height: 9, background: '#101010', borderBottomLeftRadius: 8, borderBottomRightRadius: 8, marginTop: -1 },
  smallGlass: { width: 86, height: 150, borderRadius: 18, border: '1.5px solid rgba(255,255,255,0.18)', background: 'linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.02))', display: 'flex', justifyContent: 'center', paddingTop: 8 },
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
  badgesRow: { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18, padding: '28px 34px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' },
  badgeItem: { display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', minHeight: 72 },
  badgeIcon: { width: 56, height: 56, borderRadius: '50%', border: '2px solid #ff1733', color: '#ff1733', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0 },
  badgeTitle: { fontSize: 16, fontWeight: 700 },
  badgeSubtitle: { fontSize: 16, lineHeight: 1.2, marginTop: 2 },
  paymentSection: { padding: '22px 34px 28px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' },
  paymentTitle: { fontSize: 26, marginBottom: 16, fontWeight: 700 },
  paymentRow: { display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' },
  paymentChip: { padding: '14px 18px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)', fontSize: 16, display: 'flex', alignItems: 'center', gap: 10 },
  manualCheckoutPanel: { marginTop: 22, background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: 20, maxWidth: 980, marginInline: 'auto' },
  manualCheckoutTitle: { fontSize: 22, fontWeight: 800, marginBottom: 10 },
  manualCheckoutText: { color: '#d0d0d0', fontSize: 14, lineHeight: 1.6, marginBottom: 16 },
  manualCheckoutSteps: { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 12 },
  stepCard: { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 14, fontSize: 14, lineHeight: 1.5 },
  stepNumber: { width: 28, height: 28, borderRadius: '50%', background: '#ff1733', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, marginBottom: 10 },
  researchAgreementBar: { padding: '20px 34px 10px', textAlign: 'center' },
  researchAgreementText: { maxWidth: 980, margin: '0 auto', padding: '16px 18px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', color: '#f0f0f0', fontSize: 16, fontWeight: 700 },
  payLogo: { width: 30, height: 30, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 },
  legalSection: { padding: '18px 34px 10px', borderBottom: '1px solid rgba(255,255,255,0.08)' },
  legalGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 18 },
  legalCard: { background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: 20 },
  legalTitle: { fontSize: 20, fontWeight: 800, marginBottom: 10 },
  legalText: { color: '#d0d0d0', fontSize: 14, lineHeight: 1.6 },
  modalOverlay: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, zIndex: 100 },
  modalCard: { width: 'min(760px, 100%)', background: 'linear-gradient(180deg, #0d0d0d, #050505)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 24, padding: 28, boxShadow: '0 0 40px rgba(255,0,0,0.16)' },
  modalEyebrow: { color: '#ff1733', fontWeight: 800, fontSize: 12, letterSpacing: 1.2, marginBottom: 10 },
  modalTitle: { fontSize: 34, margin: '0 0 14px', fontWeight: 800 },
  modalText: { color: '#d8d8d8', lineHeight: 1.7, fontSize: 16, margin: '0 0 14px' },
  modalButtons: { display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 14 },
  footer: { textAlign: 'center', padding: '24px 20px 44px', color: '#f0f0f0', fontSize: 22 },
}



