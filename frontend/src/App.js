import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Komponenten importieren
import Header from './components/header.js';
import Footer from './components/footer.js';
import HeaderPages from './components/headerpages.js';

// Shop
import Shop from './pages/shop.js';
import Warenkorb from './pages/warenkorb.js';
import Account from './pages/account.js';

// Hier werden die Seiten aufgerufen
function App() {
  return (
    <Router>
      <div className="App">
        
        {/* Header auf allen Seiten */}
        <Header />
        
        {/* Header nicht auf Titelpage */}
        <HeaderPages />

        {/* Seitenrouten */}
        <Routes>
          
          <Route path="/" element={<Shop />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/warenkorb" element={<Warenkorb />} />

          <Route path="/account" element={<Account />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;