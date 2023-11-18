import React from 'react';
import Hero from '../components/Hero';
import Quote from '../components/Quote'
import About from '../components/About'
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
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
        text="Whether you're a beginner or a pro, StretchVR will help you achieve your fitness and wellness goals." 
        color="primary3" 
      />
      <div id='about'>
        <Spacer color='bg-img primary' />
        <About title={`What is StretchVR?`} desc={[
            "A VR application that combines relaxing yoga stretches with a rhythm game to create a unique experience.",
          ]}
          button_text="Learn more!"
          button_link="/about"
          youtubeEmbedCode="" 
          color="bg-img primary"
        />
        <About title={`Pricing`} desc={[
            "Purchase StretchVR for $9.99, which includes beginner stretches and one virtual environment.",
            "Additional stretches and virtual environments available for purchase in the store."
          ]}
          button_text=""
          button_link=""
          youtubeEmbedCode=""
          color="bg-img primary"
        />
        <About title={`Coming Soon.`} desc={[
            "StretchVR is currently in development. Check out our Dev Blog for information on our progress.",
            "Feel free to contact us with any questions."
          ]}
          button_text="Learn More!"
          button_link="/dev-blog"
          youtubeEmbedCode=""
          color="bg-img primary"
        />
        <Spacer color='bg-img primary' />
      </div>
      <Footer title={title} color="primary3" />
    </>
  );

}

export default Home;