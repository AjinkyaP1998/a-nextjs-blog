import React from 'react';
import HeaderTop from '../components/header_top';
import ThreePostRow from '../components/three_posts_row';
import IntroPage from '../components/intro_page'; 
import Tail from '../components/tail';


export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center w-full min-h-screen">
      
      <HeaderTop />
      
      <IntroPage />
      
      <div className="w-full post-row-custom-bg"> 
        <ThreePostRow />
      </div>
      
      <div className="w-full">
        <Tail />
      </div>
    </main>
  );
}