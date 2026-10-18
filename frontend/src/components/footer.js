import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Footer() {
  return (
    <footer className="text-center text-lg-start py-3" style={{ backgroundColor: 'var(--main-color)' }}>
      <nav className="mb-2">
        <ul className="nav justify-content-center">

          <li className="nav-item">
            <Link className="nav-link fw-semibold" style={{ color: 'white', fontSize: '1rem' }} to="/">
              Home
            </Link>
          </li>

        </ul>
      </nav>

      <div className="text-center small mt-2" style={{ color: '#a0aec0' }}>
        Created with <span style={{ color: 'white' }}>❤️</span> using <strong>React</strong> & <strong>Bootstrap</strong> 
      </div>

    </footer>
  );
}

export default Footer;