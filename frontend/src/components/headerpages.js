// src/components/Header.js
import React from 'react';
import {useLocation } from 'react-router-dom';

import '../design/header.css';

const Header = () => {
  const location = useLocation(); 

  return (
    
      <div
        className="container-fluid text-white d-flex align-items-center"
        style={{
          height: '80px',
          marginTop: '100px',
          backgroundColor: 'var(--main-color)',
          zIndex: '0',
        }}
      >
        <div className="responsive-header">
          <h5 className="m-0 fs-2">
            {location.pathname === '/' && 'Shop'}
            {location.pathname === '/shop' && 'Shop'}
            {location.pathname === '/impressum' && 'Impressum & Datenschutz'}
            {location.pathname === '/warenkorb' && 'Warenkorb'}
            {location.pathname === '/account' && 'Account'}
          </h5>
        </div>
      </div>
  
  );
};

export default Header;