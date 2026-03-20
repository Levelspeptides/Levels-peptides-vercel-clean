export default function App() {
  return (
    <div style={{
      background: '#000',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '24px'
    }}>
      <h1 style={{ fontSize: '42px', marginBottom: '8px' }}>LEVEL PEPTIDES</h1>
      <p style={{ color: '#aaa', marginBottom: '24px' }}>Premium Research Peptides</p>
      <div style={{ background: '#111', border: '1px solid #222', borderRadius: '12px', padding: '20px', width: '320px' }}>
        <h2 style={{ marginTop: 0 }}>Products</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.8 }}>
          <li>Retatrutide</li>
          <li>Tirzepatide</li>
          <li>Tesamorelin</li>
          <li>NAD+</li>
        </ul>
      </div>
    </div>
  )
}
