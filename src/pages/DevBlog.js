import React from 'react';
import Post from '../components/Post';
import '../App.css';

function DevBlog() {
   
  /*
  const examplePost = {
    title: 'Title of Post',
    date: 'Month Day, Year',
    greeting: 'Greeting goes here',
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
    greeting: 'Hello, StretchVR fans! We are excited to share with you some of the progress we made this week on the beginnings of our VR yoga app. We have been working hard to make StretchVR the best VR yoga experience for you.',
    youtubeEmbedCode: '-2aNBuufcUA',
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
    </>
  );
}

export default DevBlog;