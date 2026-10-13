import React, { useState } from 'react';
import CryptoPaymentModal from './components/CryptoPaymentModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#030712',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Saigon Nomad Hub</h1>
      <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Kripto Ödeme ve Bakiye Kapısı</p>
      
      <button 
        onClick={() => setIsModalOpen(true)}
        style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
      >
        Kredi / Bakiye Yükle
      </button>

      {isModalOpen && (
        <CryptoPaymentModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
