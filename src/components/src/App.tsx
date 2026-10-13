import React from 'react';
import { CryptoPaymentModal } from './components/CryptoPaymentModal';

export function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#030712', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px', color: '#fff' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Saigon Nomad Hub / NomadFeed</h1>
        <p style={{ color: '#94A3B8', fontSize: '14px' }}>Merkeziyetsiz Kripto Ödeme ve Erişim Sistemi</p>
      </header>
      <CryptoPaymentModal />
    </div>
  );
}

export default App;
