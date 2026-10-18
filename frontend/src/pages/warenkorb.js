import React, { useState, useEffect } from 'react';

function Warenkorb() {
  const [cartItems, setCartItems] = useState([]);

  // Beim Laden der Seite Daten aus dem Browser holen
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('mein_shop_cart')) || [];
    setCartItems(savedCart);
  }, []);

  // Artikel direkt hier löschen und im Speicher aktualisieren
  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('mein_shop_cart', JSON.stringify(updatedCart));
  };

  // GESAMTEN Warenkorb leeren
  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem('mein_shop_cart');
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>🛒 Dein Warenkorb</h2>

      {cartItems.length === 0 ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>Der Warenkorb ist aktuell noch leer.</p>
      ) : (
        <div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #eee',
                padding: '12px 0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '30px' }}>{item.image}</span>
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: '#222', fontSize: '16px' }}>{item.name}</h4>
                    <span style={{ color: '#27ae60', fontWeight: 'bold' }}>{item.price.toFixed(2)} €</span>
                  </div>
                </div>
                
                {/* Artikel löschen */}
                <button 
                  onClick={() => handleRemove(index)}
                  style={{
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                >
                  Entfernen
                </button>
              </li>
            ))}
          </ul>

          {/* Warenkorb komplett leeren Button */}
          <div style={{ marginTop: '15px', textAlign: 'right' }}>
            <button 
              onClick={handleClearCart}
              style={{
                backgroundColor: 'transparent',
                color: '#e74c3c',
                border: '1px solid #e74c3c',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              Warenkorb leeren 🗑️
            </button>
          </div>

          {/* Gesamtpreis */}
          <div style={{ marginTop: '20px', borderTop: '2px solid #333', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0 }}>Gesamtpreis:</h3>
            <span style={{ color: '#27ae60', fontSize: '20px', fontWeight: 'bold' }}>{total.toFixed(2)} €</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Warenkorb;