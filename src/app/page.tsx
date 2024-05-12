import React from 'react';
import HeaderTop from '../components/header_top';
import ThreePostRow from '../components/three_posts_row';
import IntroPage from '../components/intro_page'; 
import Tail from '../components/tail';


export default function Home() {
  return (
    <main className="flex-col p-24 w-full">

      <HeaderTop />

      <IntroPage />

      <ThreePostRow />

      <Tail />

    </main>
  );
}