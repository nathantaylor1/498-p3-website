import React from 'react';
import Hero from '../components/Hero';
import Quote from '../components/Quote'
import About from '../components/About'
import '../App.css';

function Home({ title }) {

  const short_bio = "A short bio about the project."
  const youtube_embed1 = "";
  const quote1 = "Quote about the Project";
  const desc = "Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.\
                Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her. Alone all happy asked begin fully stand own get. Excuse ye seeing result of we. See scale dried songs old may not. Promotion did disposing you household any instantly. Hills we do under times at first short an.\
                Difficulty on insensible reasonable in. From as went he they. Preference themselves me as thoroughly partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion expression. But truth being \
                state can she china widow. Occasional preference fat remarkably now projecting uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening newspaper in advantage frankness to concluded unwilling.";
  const youtube_embed2 = "Ay5aUabPnQU";

  return (
    <>
      <Hero title={title} bio={short_bio} youtubeEmbedCode={youtube_embed1} />
      <Quote text={quote1} />
      <About title={`What is ${title}?`} desc={desc} youtubeEmbedCode={youtube_embed2} />
    </>
  );
}

export default Home;