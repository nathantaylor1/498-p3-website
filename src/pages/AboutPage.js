import React from 'react';
import About from '../components/About'
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import '../App.css';

function AboutPage({ title }) {

  return (
    <>
      <Spacer color='bg-img primary' />
      <div id='about'>
        <About title={`What is StretchVR?`} desc={[
            "StretchVR is a VR yoga application that aims to provide a relaxing and effective yoga experience in a virtual environment.",
            "With StretchVR, you can choose from a variety of yoga poses that suit your level, goals, and preferences.",
          ]}
          image=""
          button_text=""
          youtubeEmbedCode=""
          color="bg-img primary"
        />
        <About title={`Customize your Virtual Environment`} desc={[
            "Create the perfect ambiance for your yoga practice. Whether you want to relax on a tropical beach or explore a mystical forest, StretchVR will transport you to a virtual paradise."
          ]}
          image=""
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