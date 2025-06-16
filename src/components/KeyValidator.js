import React, { useState } from 'react';

export default function KeyValidator() {
  const [key, setKey] = useState('');
  const [result, setResult] = useState(null);

  const validateKey = async () => {
    try {
      const res = await fetch('/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key }) // inviamo un JSON con il campo "key"
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error('Errore nella richiesta validate:', error);
      setResult({ error: 'Errore nella richiesta' });
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: 400 }}>
      <h3>Validazione Chiave</h3>
      <input
        type="text"
        placeholder="Inserisci la chiave"
        value={key}
        onChange={e => setKey(e.target.value)}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <button onClick={validateKey}>Verifica</button>

      {result && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Risultato:</strong>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
