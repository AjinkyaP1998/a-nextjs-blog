// components/HeaderTop.tsx
import React from 'react';
import Link from 'next/link';


function HeaderTop() {
  return (
    <header className="header-top">
      <div style={{ backgroundColor: 'rgb(244, 238, 255)' , height: '10px' }}></div>

      <nav className="flex justify-between items-center" style={{ paddingLeft: '150px', paddingRight: '250px',height: '100px'  }}>

        {/* <Link href="/" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} passHref>
          <div className="logo" style={{ flexShrink: 0 }}>
            <img src="../my_logo.webp" alt="Logo" style={{ height: '100px', border: '2px solid black' }} />
          </div>
        </Link> */}

        <Link href="/" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} passHref>
          <div className="text-[50px] font-medium text-white" style={{ marginLeft: '50px', marginRight: 'auto', fontFamily: 'Montserrat, serif' }}>
            Ex-Lens
          </div>
        </Link>

        {/* <div>
          <a href="#" className="px-4 py-2 text-[32px] font-medium text-white"  style={{fontFamily: 'Montserrat' }}>Home</a>
          <a href="#" className="px-4 py-2 text-[32px] font-medium text-white"  style={{fontFamily: 'Montserrat' }}>About</a>
        </div> */}
        
      </nav>
    </header>
  );
}

export default HeaderTop;
