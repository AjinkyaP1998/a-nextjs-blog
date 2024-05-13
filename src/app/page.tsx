import React from 'react';
import HeaderTop from '../components/header_top';
import ThreePostRow from '../components/three_posts_row';
import IntroPage from '../components/intro_page'; 
import Tail from '../components/tail';


export default function Home() {
  return (
    <main className="flex-col w-full"> 

      <div className="p-24">
        <HeaderTop />

        <IntroPage />
      </div>

      <div className="w-full post-row-custom-bg"> 
        <ThreePostRow />
      </div>

      <div className="p-24">
        <Tail />
      </div>

    </main>
  );
}