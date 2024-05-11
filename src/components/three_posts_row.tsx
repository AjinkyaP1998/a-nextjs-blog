import React from 'react';
import PostTile from './post_tile';


function ThreePostRow() {
    return (
        <div className="post-tiles-container">
        <PostTile
          imageUrl="../display_post_images/post1_image0.jpeg"
          title="Post 1 Title"
          author="Author Name"
          publishDate="May 5, 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="/my_posts/post_1" 
        />
        <PostTile
          imageUrl="../display_post_images/post2_image0.jpg"
          title="Post 2 Title"
          author="Author Name"
          publishDate="May 6, 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="/my_posts/post_1" 
        />
        <PostTile
          imageUrl="../display_post_images/post3_image0.jpg"
          title="Post 3 Title"
          author="Author Name"
          publishDate="May 7, 2024"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="/my_posts/post_1" 
        />
      </div>
    );
  };

export default ThreePostRow;