import React from 'react';
import HeaderTop from '../components/header_top';
import ThreePostRow from '../components/three_posts_row';
import IntroPage from '../components/intro_page'; 
import Tail from '../components/tail';


export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen">
      
      <HeaderTop />
      
      <div className="mt-14 mx-24">
        <IntroPage />
      </div>
      
      <div className="w-full post-row-custom-bg"> 
        <ThreePostRow />
      </div>
      
      <div className="w-full">
        <Tail />
      </div>
    </main>
  );
}