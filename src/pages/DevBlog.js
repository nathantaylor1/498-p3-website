import React from 'react';
import Post from '../components/Post';
import '../App.css';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';

function DevBlog({ title }) {
  <iframe width="560" height="315" src="https://www.youtube.com/embed/v4Kqt1mHP-8?si=YL320klFqYp2ilz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  /*
  const examplePost = {
    title: 'Title of Post',
    date: 'Month Day, Year',
    greeting: 'Greeting goes here',
    youtubeEmbedCode: 'CODE',
    topics: [
      {
        title: "Topic Title 1",
        text: "Blah Blah Blah"
      },
      {
        title: "Topic Title 2",
        text: "Blah Blah Blah"
      },
    ]
  }
  */

  const post2 = {
    title: 'Week 2 (Milestone 2) Dev Update',
    date: 'November 15th, 2023',
    greeting: 'Hello, StretchVR fans!',
    youtubeEmbedCode: '',
    topics: [
      {
        title: "",
        text: [
          "",
        ]
      },
      {
        title: "Thank you!",
        text: [
          "We hope you are looking forward to trying out these features in StretchVR. We are still in early development, so we appreciate your feedback and suggestions. Please let us know what you think and what you would like to see in StretchVR. Thank you for your support and stay tuned for more updates."
        ]
      }
    ]
  }

  const post1 = {
    title: 'Week 1 (Milestone) Dev Update',
    date: 'November 8th, 2023',
    greeting: 'Hello, StretchVR fans! We are excited to share with you some of the progress we made this week on the beginnings of our VR yoga app. We have been working hard to make StretchVR the best VR yoga experience for you.',
    youtubeEmbedCode: 'v4Kqt1mHP-8',
    topics: [
      {
        title: "",
        text: [
          "This week consisted mostly of planning and fleshing out a basic version of the project. Our main difficulties came with deciding on an idea to proceed with, especially considering the requirements of our project. We had several ideas that we wanted to use, but after doing some research we decided to move forward with one of our first ideas, StretchVR.",
        ]
      },
      {
        title: "The idea behind StretchVR",
        text: [
          "The original idea behind this was as a VR dance game. The user would basically be playing a Just Dance type of game in VR. This already exists, however, so we expanded on our idea and changed it to a stretching app. The vision for this application involves sensing where the user’s hands are and using that information, along with head position, to evaluate the user’s current body position. There would be a point system with which the user would be rewarded for more accurately mirroring the desired yoga pose. In this way, users could keep track of their progress and see how they improve each time they play. ",
          "",
          "Technical Sophistication: There are a lot of parts to this idea. Perhaps the most complicated task is to use the tools VR gives us to interpret the user’s body position.",
          "",
          "Novelty: We were unable to find a similar XR app out there, so we believe that this is novel.",
          "",
          "Social Impact: This app could encourage people to exercise more, and, if successful, could even be used for physical therapy in the future.",
          "",
          "XR Emphasis: This concept would not work without XR, or at least similar body-tracking equipment. An additional advantage of VR here would be the ability to visualize zones in which users should be putting their hands during stretches.",
          "",
          "Financial Sustainability: We plan on selling our app for fairly cheap, say $10. This will hopefully entice many users to buy into our platform. Once they’re in, we will be constantly creating and releasing new stretch/dance packs, which we would market as “additional content” and sell for additional profit."
        ]
      },
      {
        title: "Here are a few of the ideas that we didn't go with:",
        text: [
          "Idea: 'Educational Beat Saber'",
          "The idea here is to create an educational game with a reaction time aspect. We envisioned a Beat Saber type of game where blocks would rapidly fly at you, but rather than hitting all the blocks, the player would only hit “correct” blocks. For example, before each section of a game, a mathematical expression would be displayed, and the blocks would each display a different expression. The user then would want to only hit blocks equal to the original expression. This concept could also work with a variety of other subjects.",
          "The primary shortcoming of this idea was its lack of VR emphasis. While the idea of this VR game seems interesting, we ultimately decided that a very similar thing could be done without the use of VR. ",
          "",
          "Idea: VR Educational 'Lego' Game",
          "Our idea here was to create a game that allowed for interactive learning in virtual reality. The user would be given a question and have to find the “lego” pieces with the answer to that question. These pieces would come together to create something awesome and provide the user with a reward for learning. The user would be able to move around in their virtual world and hold on to these built items.",
          "The primary shortcoming of this idea was financial sustainability. Being an educational app, we did feel that we could charge a large amount of money up front. We also struggled to find the novelty in this idea, as it seems that it has been done a thousand times before.",
        ]
      },
      {
        title: "StretchVR Hand Guidance System",
        text: [
          "One of the features we implemented this week is a hand guidance system that allows you to follow a path to perform guided yoga. This feature will help you learn and practice yoga poses correctly and safely. You will be able to see a virtual spheres that will guide you through the movements and show you where to place your hands.",
          "This feature will allow us to guide the player in realtime for a immersive and effective stretch. "
        ]
      },
      {
        title: "Thank you!",
        text: [
          "We hope you are looking forward to trying out these features in StretchVR. We are still in early development, so we appreciate your feedback and suggestions. Please let us know what you think and what you would like to see in StretchVR. Thank you for your support and stay tuned for more updates."
        ]
      }
    ]
  }

  return (
    <>
      <Post post={post2} />
      <Spacer color="primary" />
      <Post post={post1} />
      <Spacer color="primary" />
      <Footer title={title} color="primary2" />
    </>
  );
}

export default DevBlog;