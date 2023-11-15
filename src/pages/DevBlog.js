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
    greeting: 'Hello, StretchVR fans! Our big focus this week was on improving the user experience of keeping track of the orbs and your hands.',
    youtubeEmbedCode: '',
    topics: [
      {
        title: "Mirror",
        img: "",
        text: [
          "We were able to create a mirror using the SceneCapture2d object. This is very similar to a camera, but allows for images to be easily transformed into a material using textures. This allowed us to put what the camera is seeing onto a material, which we then broadcasted on a plane/screen in front of the player. This gave us an interesting mirror effect.",
          "By positioning the camera behind the player, the image displayed properly mirrors their movements in a way that is easy to grasp.",
          "We tried using regular reflective materials, but found they did not look quite right and were difficult to use. They also had a high computation to quality ratio, slowing down the game when the mirror was too large."
        ]
      },
      {
        title: "Head, Shoulders, Knees and Toes",
        img: "",
        text: [
          "Now that the player could see themselves in the mirror, we wanted to add more clarity to what they would see. We thought about adding a full body model, but decided that this would add unnecessary noise and make it harder for the user to interact with the mirror.",
          "Instead, we needed to make their hands more obvious and contrast with the orbs to easily track where their hands are compared to the orbs.",
          "We did this by implementing an outline highlighting system using Unreal Engine’s Custom Depth variable. This variable allows objects of our choice to be a part of a specific post processing depth pass. The outline works by creating offsets of the object, up down left right, and using a Post Processing Volume to emit color in the difference between the original actor and its offsets. In order for the object to show up in the mirror, the SceneCapture2d object had to be set to a specific capture setting that gets colors after post processing. Due to some quirk of the SceneCaptured2d object, the outline color changes and gets bigger in the mirror. This still works as the online on your hands is not as important as the one in the mirror, so we made the outline a small red outline in reality that turns into a larger yellowish outline in the mirror."
        ]
      },
      {
        title: "Color Changing Orbs",
        img: "p3_milestone2.jpg",
        text: [
          "During playtesting, we discovered that players found it difficult to percieve depth within the mirror. This is due to the way that the SceneCapture2d captures the scene and displays it on a flat plane. The mirror only shows the z and y direction, and we found players constantly looking at their hands as they lost the x direction compared to the orb.",
          "The solution that we came up with was to change the hue of the orbs depending on the direction in the X plane that you need to move your hand. The orb turns orange if the orb is behind your hand (-x direction), and it turns purple if the orb is in front of your hand (+x direction).",
          "We thought that this mechanic might be a little confusing, so we explain this in a quick text box before the user starts playing, and have so far found it to be fairly intuitive once you associate color with direction."
        ]
      },
      {
        title: "",
        img: "",
        text: [
          "",
        ]
      },
      {
        title: "Thank you!",
        img: "",
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
        img: "",
        text: [
          "This week consisted mostly of planning and fleshing out a basic version of the project. Our main difficulties came with deciding on an idea to proceed with, especially considering the requirements of our project. We had several ideas that we wanted to use, but after doing some research we decided to move forward with one of our first ideas, StretchVR.",
        ]
      },
      {
        title: "The idea behind StretchVR",
        img: "",
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
        img: "",
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
        img: "",
        text: [
          "One of the features we implemented this week is a hand guidance system that allows you to follow a path to perform guided yoga. This feature will help you learn and practice yoga poses correctly and safely. You will be able to see a virtual spheres that will guide you through the movements and show you where to place your hands.",
          "This feature will allow us to guide the player in realtime for a immersive and effective stretch. "
        ]
      },
      {
        title: "Thank you!",
        img: "",
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
      <Footer title={title} color="primary3" />
    </>
  );
}

export default DevBlog;