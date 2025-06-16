function App() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🎉 Benvenuto su be.pi!</h1>
      <p>Partecipa, condividi, guarda e guadagna premi reali.</p>
    </div>
  );
}

export default App;
import KeyValidator from './components/KeyValidator';

function App() {
  return (
    <div className="App">
      <KeyValidator />
      {/* altri componenti */}
    </div>
  );
}

export default App;
