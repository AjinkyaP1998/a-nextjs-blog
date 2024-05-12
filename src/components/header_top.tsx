// components/HeaderTop.tsx
import React from 'react';
import Link from 'next/link';


function HeaderTop() {
  return (
    <header className="header-top">
      <nav className="flex justify-between items-center" style={{ paddingLeft: '250px', paddingRight: '250px' }}>

        <Link href="/" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} passHref>
          <div className="logo" style={{ flexShrink: 0 }}>
            <img src="../my_logo.webp" alt="Logo" style={{ height: '100px', border: '2px solid black' }} />
          </div>
        </Link>

        <div className="px-4 py-2 text-[45px] font-medium text-black" style={{ marginLeft: '50px', marginRight: 'auto', fontFamily: 'Georgia, serif' }}>
          The GeoBlog
        </div>

        <div>
          <a href="#" className="px-4 py-2 text-[22px] font-medium text-blue-800">Home</a>
          <a href="#" className="px-4 py-2 text-[22px] font-medium text-blue-800">About</a>
        </div>
        
      </nav>
    </header>
  );
}

export default HeaderTop;
