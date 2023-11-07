import React from 'react';
import Post from '../components/Post';
import '../App.css';

function DevBlog() {
   
  /*
  const examplePost = {
    title: 'Title of Post',
    date: 'Month Day, Year',
    youtubeEmbedCode: 'CODE',
    topics: [
      {
        id: "1",
        title: "Topic Title 1",
        text: "Blah Blah Blah"
      },
      {
        id: "2",
        title: "Topic Title 2",
        text: "Blah Blah Blah"
      },
    ]
  }
  */

  const post1 = {
    title: 'Milestone Dev Update',
    date: 'November 8th, 2023',
    youtubeEmbedCode: 'Ay5aUabPnQU',
    topics: [
      {
        id: "1",
        title: "Topic Title 1",
        text: "Blah Blah Blah"
      },
      {
        id: "2",
        title: "Topic Title 2",
        text: "Blah Blah Blah"
      },
    ]
  }

  return (
    <>
      <Post post={post1} />
      <Post post={post1} />
    </>
  );
}

export default DevBlog;