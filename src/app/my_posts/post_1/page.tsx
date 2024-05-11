import React from 'react';
import Image from 'next/image';
import HeaderTop from '../../../components/header_top';
import PostContent from './post_content';

function PostPage() {
  return (

    <div className="flex flex-col mx-auto p-24 w-3/4">

      <HeaderTop />

      <PostContent />

    </div>
  );
}

export default PostPage;
