import React from 'react';
import Hero from '../components/Hero';
import Quote from '../components/Quote'
import About from '../components/About'
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import '../App.css';

function AboutPage({ title }) {

  return (
    <>
      <div id='about'>
        <Spacer color='bg-img primary' />
        <About title={`What is StretchVR?`} desc={[
            "A VR application that combines relaxing yoga stretches with a rhythm game to create a unique experience.",
          ]}
          button_text=""
          youtubeEmbedCode="" 
          color="bg-img primary"
        />
      </div>
      <Spacer color='bg-img primary' />
      <Footer title={title} color="primary3" />
    </>
  );

}

export default AboutPage;