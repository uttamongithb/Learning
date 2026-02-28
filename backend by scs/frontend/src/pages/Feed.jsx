import React, { useState } from 'react'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            image: 'https://ik.imagekit.io/sx2nvlyos/image_8zVid6_ec.jpg',
            caption: 'Beautiful sunset!',
        }
    ]);

    return (
        <section className='feed-section'>
            <h1>Feed</h1>

           {
            posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} className='post-card'>
                        <img src={post.image} alt={`Post ${post.id}`} className='post-image' />
                        <p className='post-caption'>{post.caption}</p>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )
           }

           

        </section>
    )
}

export default Feed