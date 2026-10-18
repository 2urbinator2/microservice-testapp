import React, { useState } from 'react';

function Account() {

  // Zustandsvariablen
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Funktion 1: Nur für die Registrierung
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
      
        setMessage('Registrierung erfolgreich! Du kannst dich jetzt einloggen.');
        setPassword(''); 
      } else {
        setMessage(data.error || 'Fehler bei der Registrierung.');
      }
    } catch (err) {
      setMessage('Verbindung zum Server fehlgeschlagen.');
    }
  };

  // Funktion 2: Nur für den Login (hast du schon fast genauso!)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true); 
      } else {
        setMessage(data.error || 'Nutzer nicht registriert oder falsches Passwort.');
      }
    } catch (err) {
      setMessage('Verbindung zum Server fehlgeschlagen.');
    }
  };

  // (Conditional Renderings
  if (isLoggedIn) {
    return (
      <div className="container my-5 text-center">
        <h2>Willkommen im Account, {username}! 🎉</h2>
        <button 
          className="btn btn-danger mt-3" 
          onClick={() => { 
            setIsLoggedIn(false); 
            setUsername(''); 
            setPassword(''); 
            setMessage(''); 
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="p-4 bg-white rounded shadow border">
            <h3 className="mb-3 text-center" style={{ color: 'var(--main-color)' }}>
              {isRegister ? '👤 Account erstellen' : '🔐 Anmelden'}
            </h3>
            
            {message && <div className="alert alert-info text-center py-2">{message}</div>}

            <form onSubmit={isRegister ? handleRegister : handleLogin}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Benutzername</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Passwort</label>
                <input 
                  type="password" 
                  className="form-control" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              
              {/* Kleiner Button direkt ÜBER dem Hauptbutton */}
              <div className="text-center mb-3">
                <button 
                  type="button" 
                  className="btn btn-link p-0 text-decoration-none" 
                  style={{ color: 'var(--main-color)', fontSize: '0.85rem' }}
                  onClick={() => { setIsRegister(!isRegister); setMessage(''); }}
                >
                  {isRegister ? 'Bereits einen Account? Hier einloggen' : 'Noch keinen Account? Hier registrieren'}
                </button>
              </div>

              <button type="submit" className="btn w-100 fw-semibold text-white" style={{ backgroundColor: 'var(--main-color)' }}>
                {isRegister ? 'Registrieren' : 'Einloggen'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;