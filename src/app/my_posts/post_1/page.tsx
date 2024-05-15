import React from 'react';
import Image from 'next/image';
import HeaderTop from '../../../components/header_top';
import PostContent from './post_content';
import Tail from '@/components/tail';

function PostPage() {
  return (

    <div className="relative flex flex-col w-full min-h-screen mx-auto">

      <div className="mt-24 mx-24">
        <HeaderTop />
      </div>

      <div className='w-3/4 mx-auto'>
        <PostContent />
      </div>
      
      <div className="w-full">
        <Tail />
      </div>

    </div>
  );
}

export default PostPage;
