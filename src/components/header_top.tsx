// components/HeaderTop.tsx
import React from 'react';
import Link from 'next/link';


function HeaderTop() {
  return (
    <header className="header-top">
      <div className="top-bar"></div>
      <nav className="flex justify-between items-center header-top-nav-padding">
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} passHref>
          <div className="header-title">
            Ex-Lens
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default HeaderTop;
