import React from 'react';
import PostTile from './post_tile';


function ThreePostRow() {
    return (
        <div className="post-tiles-container p-24">
        <PostTile
          imageUrl="../display_post_images/post1_image0.jpeg"
          title="The Israel-Palestine Conflict: A Historical Perspective"
          author="Dhanashree Patil"
          publishDate="May 5, 2024"
          description="Know the history of Israel-Palestine conflict right from the beginning."
          link="/my_posts/post_1" 
        />
        <PostTile
          imageUrl="../display_post_images/post2_image0.jpg"
          title="Coming soon..."
          author=""
          publishDate="May 6, 2024"
          description=""
          link="/my_posts/post_1" 
        />
        <PostTile
          imageUrl="../display_post_images/post3_image0.jpg"
          title="Coming soon..."
          author=""
          publishDate="May 7, 2024"
          description=""
          link="/my_posts/post_1" 
        />
      </div>
    );
  };

export default ThreePostRow;