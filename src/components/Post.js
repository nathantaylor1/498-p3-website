import React from 'react';
import '../App.css';
import './Post.css';

function Post({ post }) {
    return (
        <>
            <div className='post-container'>
                <h1>{post.title}</h1>
                <p>{post.date}</p>
                <div className='post-video'>
                    <iframe title="Youtube Player" src={`https://www.youtube.com/embed/${post.youtubeEmbedCode}`}/>
                </div>
                <ul className='post-topics'>
                    {post.topics.map(topic =>
                        <li key={topic.id} className='post-topic'>
                            <h1>{topic.title}</h1>
                            <p>{topic.text}</p>
                        </li> 
                    )}
                </ul>
            </div>
            <hr className='post-hr' />
        </>
    );
}

export default Post;
