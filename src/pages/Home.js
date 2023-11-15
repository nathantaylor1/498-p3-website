import React from 'react';
import Hero from '../components/Hero';
import Quote from '../components/Quote'
import About from '../components/About'
import Footer from '../components/Footer';
import '../App.css';

function Home({ title }) {

  return (
    <>
      <div id="home">
        <Hero 
          title={title}
          bio="Find your zen and unleash your potential with immersive and interactive yoga sessions."
        />
      </div>
      <Quote 
        text="Whether you’re a beginner or a pro, StretchVR will help you achieve your fitness and wellness goals." 
        color="primary3" 
      />
      <div id='about'>
        <About title={`What is ${title}?`} desc={[
          "StretchVR is a VR yoga application that aims to provide a relaxing and effective yoga experience in a virtual environment. With StretchVR, you can choose from a variety of yoga sessions that suit your level, goals, and preferences. You can also customize your VR environment to create the perfect ambiance for your yoga practice. Whether you want to relax on a tropical beach, meditate in a zen garden, or explore a mystical forest, StretchVR will transport you to a virtual paradise. StretchVR is more than just a yoga app. It’s a VR yoga adventure that will make you feel good inside and out.",
          "Discover a new way to yoga. StretchVR combines the best of yoga and VR to create a unique and enjoyable yoga experience."
        ]} youtubeEmbedCode="" color="bg-img primary" />
      </div>
      <Footer title={title} color="primary3" />
    </>
  );

}

export default Home;