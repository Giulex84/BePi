import React, { useState } from 'react';
import './App.css';

function App() {
  const [key, setKey] = useState('');
  const [status, setStatus] = useState(null);

  const handleVerify = async () => {
    try {
      const res = await fetch('/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key }),
      });

      const data = await res.json();

      if (res.status === 200 && data.valid) {
        setStatus('✅ Chiave valida!');
      } else {
        setStatus('❌ Chiave non valida.');
      }
    } catch (error) {
      console.error('Errore:', error);
      setStatus('❌ Errore nella richiesta.');
    }
  };

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Verifica Chiave</h1>
      <input
        type="text"
        placeholder="Inserisci la chiave"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '1rem', width: '250px' }}
      />
      <button onClick={handleVerify} style={{ padding: '0.5rem 1rem' }}>
        Verifica
      </button>
      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  );
}

export default App;
