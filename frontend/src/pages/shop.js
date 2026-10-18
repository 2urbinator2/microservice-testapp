import React, { useState } from 'react';

function Shop() {
    // Feste Test-Produkte direkt im Frontend, um das Design zu testen
    const products = [
        { id: 1, name: "Cyber Hoodie", price: 49.99, image: "🧥" },
        { id: 2, name: "Hacker Maske", price: 19.99, image: "🎭" },
        { id: 3, name: "Mechanische Tastatur", price: 129.99, image: "⌨️" },
        { id: 4, name: "Energiedrink (10er Pack)", price: 14.99, image: "⚡" },
        { id: 5, name: "Rubber Duck (Debug-Ente)", price: 9.99, image: "🦆" }
    ];
  
    // Warenkorb
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('mein_shop_cart');
        return saved ? JSON.parse(saved) : [];
    });

    const addToCart = (product) => {
        const neuerWarenkorb = [...cart, product];
        setCart(neuerWarenkorb);
        
        localStorage.setItem('mein_shop_cart', JSON.stringify(neuerWarenkorb));
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '40px auto', padding: '20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ color: '#333' }}>🛒 Mein Cyber-Shop</h1>
                <p style={{ color: '#666' }}>Design-Test (Statische Ansicht)</p>
            </header>

            {/* Produkt-Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                {products.map(product => (
                    <div key={product.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '20px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    }}>
                        <div style={{ fontSize: '50px', marginBottom: '15px' }}>{product.image}</div>
                        <h3 style={{ margin: '10px 0', color: '#222' }}>{product.name}</h3>
                        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#27ae60' }}>
                            {product.price.toFixed(2)} €
                        </p>

                        <button 
                            style={{
                                backgroundColor: 'var(--main-color)',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                marginTop: '10px'
                            }} 
                            onClick={() => addToCart(product)}
                        >
                            In den Warenkorb
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Shop;