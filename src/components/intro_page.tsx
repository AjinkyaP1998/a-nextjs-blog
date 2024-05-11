import React from 'react';
import Image from 'next/image';

function IntroPage() {
    return (
      <div className="intro-page">
  
        <div className="relative w-full h-full mx-auto"> 
            <Image
                src="/intro_image.webp"
                alt="Background"
                layout='fill'
                objectFit='cover'
                priority
            />
        </div>
  
        <div className="intro-text absolute top-1/3 left-0 right-0 text-center text-black text-6xl font-bold tracking-wide">
            <h1 className="font-serif" style={{ fontFamily: '"Times New Roman", serif' }}>Welcome to the GeoBlog!<br />Explore the world through geopolitics.</h1>
        </div>

  
      </div>
    );
  }
  

export default IntroPage;
