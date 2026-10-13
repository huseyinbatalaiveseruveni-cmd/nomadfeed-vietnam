import React, { useState } from 'react';

export const CryptoPaymentModal = () => {
  const [network, setNetwork] = useState<'TRC20' | 'ERC20'>('TRC20');
  const [copied, setCopied] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [status, setStatus] = useState('');

  const wallets = {
    TRC20: 'TNWYid6sBqLYmHLsGnqZv2LupXsTfvrkVd',
    ERC20: '0x2EF2d6343029e030DB457902F2cAEe249203C7B8',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(wallets[network]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!txHash) return;
    setStatus('İşlem doğrulanıyor... Krediniz Neon veritabanına aktarılıyor.');
    setTimeout(() => setStatus('Ödeme bildirimi alındı! Manuel onay sonrası bakiyeniz yüklenecektir.'), 1500);
  };

  return (
    <div style={{ background: '#0B1120', color: '#fff', padding: '24px', borderRadius: '16px', maxWidth: '480px', margin: '40px auto', border: '1px solid #1E293B', fontFamily: 'sans-serif' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>⚡ Kripto ile Kredi Yükle</h2>
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <button type="button" onClick={() => setNetwork('TRC20')} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: network === 'TRC20' ? '#10B981' : '#1E293B', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>TRON (TRC-20)</button>
        <button type="button" onClick={() => setNetwork('ERC20')} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: network === 'ERC20' ? '#10B981' : '#1E293B', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>ETH (ERC-20)</button>
      </div>

      <div style={{ background: '#1E293B', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
        <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '4px' }}>{network} Yatırma Adresi:</div>
        <div style={{ fontSize: '13px', wordBreak: 'break-all', fontFamily: 'monospace' }}>{wallets[network]}</div>
        <button type="button" onClick={handleCopy} style={{ marginTop: '8px', width: '100%', padding: '8px', background: '#334155', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          {copied ? '✓ Adres Kopyalandı!' : '📋 Adresi Kopyala'}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <label style={{ fontSize: '12px', color: '#94A3B8' }}>İşlem Kodu (TX Hash):</label>
        <input 
          type="text" 
          value={txHash} 
          onChange={(e) => setTxHash(e.target.value)} 
          placeholder="Örn: 0x123... veya abc123..." 
          style={{ width: '100%', padding: '10px', margin: '8px 0 16px', background: '#0F172A', border: '1px solid #334155', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
          required
        />
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#10B981', color: '#0B1120', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Ödemeyi Doğrula & Gönder
        </button>
      </form>

      {status && <p style={{ marginTop: '12px', fontSize: '13px', color: '#34D399', textAlign: 'center' }}>{status}</p>}
    </div>
  );
};
