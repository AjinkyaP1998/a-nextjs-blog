// components/PostTile.tsx
import React from 'react';
import Link from 'next/link';


interface PostTileProps {
  imageUrl: string;
  title: string;
  author: string;
  publishDate: string;
  description: string;
  link: string;  // URL to navigate to when the tile is clicked
}

function PostTile({ imageUrl, title, author, publishDate, description, link }: PostTileProps) {
  return (
    <Link href={link} className="post-tile-wrapper" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} passHref>
      <div className="post-tile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'space-between' }}>

        {/* <img src={imageUrl} alt="Post Image" className="display-post-image"/> */}
        
        <div className="post-details">

          <div className="post-title px-1 py-1 text-[22px] font-medium text-gray-200">{title}</div>

          <div className="post-metadata">
            <span className="post-author px-1 py-1 text-[18px] font-medium text-gray-200">{author}</span>
            <span className="post-publish-date px-1 py-1 text-[18px] font-medium text-gray-200">{publishDate}</span>
          </div>
          
          <p className="post-description px-1 py-1 text-[16px] font-medium text-gray-200">{description}</p>
      
        </div>  
      </div>
    </Link>
  );
}

export default PostTile;
