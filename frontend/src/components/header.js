import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Design
import '../design/header.css';
import '../design/app.css';

function Header() {
  return (

    <header
      className="border-bottom position-fixed top-0 start-0 w-100 bg-white shadow-sm d-flex align-items-center"
      style={{ zIndex: 1030, minHeight: '100px', height: 'auto' }}
    >

      <div className="responsive-header d-flex justify-content-between align-items-center">
      
        <Link to="/" className="text-decoration-none">
          <span className="fs-2 fw-bold" style={{ color: 'var(--main-color)', marginLeft: '10px' }}>
            Urbando
          </span>
        </Link>

        <nav>
          <ul className="nav">

            <li className="nav-item">
              <Link className="nav-link fw-semibold" style={{ color: 'var(--main-color)', fontSize: '1rem' }} to="/shop">Shop</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" style={{ fontSize: '1rem' }} to="/warenkorb">🛒</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" style={{ fontSize: '1rem' }} to="/account">👤</Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;