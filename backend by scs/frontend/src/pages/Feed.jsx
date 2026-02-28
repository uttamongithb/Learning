import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
    const [posts, setPosts] = useState([
    ]);

    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((res) =>{
           setPosts(res.data.posts)
           console.log(res.data.posts)
        })
    },[])

    return (
        <section className='feed-section'>
            <h1>Feed</h1>

           {
            posts.length > 0 ? (
                posts.map(post => (
                    <div key={post._id} className='post-card'>
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