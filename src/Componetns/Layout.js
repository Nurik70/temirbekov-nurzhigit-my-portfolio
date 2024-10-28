// Layout.js
import React from 'react';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="layout">
      <main>{children}</main> {/* Основное содержимое */}
      <Footer /> {/* Футер для всех страниц */}
    </div>
  );
}

export default Layout;