import React from 'react';
import About from '../components/About'
import '../App.css';

function Home() {

  const title = "Our Plan"
  const desc = [
    ""
  ]

  return (
    <>
      <About title={title} desc={desc} youtubeEmbedCode="" />
    </>
  );
}

export default Home;