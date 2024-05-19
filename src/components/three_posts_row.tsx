import React from 'react';
import PostTile from './post_tile';


function ThreePostRow() {
    return (
        <div className="post-tiles-container p-24">
        <PostTile
          imageUrl="../display_post_images/post1_image0.png"
          title="The Israel-Palestine Conflict: A Historical Perspective"
          author="Dhanashree Patil"
          publishDate="May 5, 2024"
          description="Know the history of Israel-Palestine conflict right from the beginning."
          link="/my_posts/post_1" 
        />
        <PostTile
          imageUrl="../display_post_images/post2_image0.png"
          title="What is Hamas?"
          author=""
          publishDate="Coming Soon!"
          description=""
          link="" 
        />
        <PostTile
          imageUrl="../display_post_images/post3_image0.webp"
          title="Ever Wonder Why the U.S. Supports Israel So Much?"
          author=""
          publishDate="Coming Soon!"
          description=""
          link="" 
        />
      </div>
    );
  };

export default ThreePostRow;