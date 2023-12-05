import React from 'react';
import Post from '../components/Post';
import '../App.css';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';


function DevBlog({ title }) {
  /*
  const examplePost = {
    title: 'Title of Post',
    date: 'Month Day, Year',
    greeting: 'Greeting goes here',
    youtubeEmbedCode: 'CODE',
    topics: [
      {
        title: "Topic Title 1",
        img: "",
        text: [
          "Blah Blah Blah"
        ]
      },
      {
        title: "Topic Title 2",
        img: "filename.jpg",
        text: [
          "Blah Blah Blah"
        ]
      },
    ]
  }
  */

  const post4 = {
    title: 'Week 4 (Gold) Dev Update',
    date: 'December 5th, 2023',
    greeting: 'Hey StretchVR fans! This week we were focused on polish and marketing for our upcoming showcase at the University of Michigan!',
    youtubeEmbedCode: 'F_mLj8gCC_w' ,
    topics: [
      {
        title: "Product Marketing",
        img: "",
        text: [
          "This week we had a lot of focus on polishing the final product and marketing it. We decided to do our video in the style of a relaxing meditation, to really convey the sort of vibe that we are going for in our app. We created the trailer video as shown above using a combination of stock footage from pexels.com and gameplay footage. We used an AI voice generator from ElevenLabs.io, which actually turned out to have a perfect relaxing voice.",
          "We had some feedback about the logo on our website, visitors said that it felt a little generic and could use some improvement. We reached out to an art major to see if they could make us a logo. The logo that they came up with can be seen at the end of the trailer video and on our website, it shows a person wearing a VR headset and performing yoga, which accurately describes our product."
        ]
      },
      {
        title: "Multiple Stretches and Stretch Selection",
        img: "",
        text: [
          "The big feature that we added this week was the ability for the player to select from a variety of stretches. We wanted to add this feature to give the player the ability to stretch different muscles in different ways. This feature was a key part of our initial idea, and although we had some struggles with it last week, we were able to get it implemented and working well.",
          "To implement this, the player selects from a list of poses in the UI brought up by pressing a button. Then the player will begin the pose when they are ready, with slow movement of the orbs to guide the player. When the player reaches the stretch position, the orbs hold in place for an amount of time, allowing the player to fully stretch before transitioning to the next pose."
        ]
      },
      {
        title: "Product Marketing",
        img: "",
        text: [
          "We received some feedback from our last group of playtesters regarding the menu and calibration phases. They mentioned that they felt that calibration should occur as soon as the app was launched, bypassing the main menu. They also mentioned that they felt that the calibration and main menu needed some sort of ambiance to help it to feel calming. The current empty plane feels kind of alarming and not very nice, so we implemented some music and a small environment to help.",
        ]
      },
      {
        title: "Thank you all for your continued support!",
        img: "",
        text: [
          "Be sure to check us out at the University of Michigan XR Showcase!"
        ]
      }
    ]
  }

  const post3 = {
    title: 'Week 3 (Alpha) Dev Update',
    date: 'November 22nd, 2023',
    greeting: 'Greetings! This week we focused on improving suggestions from player feedback as well as adding new content.',
    youtubeEmbedCode: 'wyr5yVTl7wQ',
    topics: [
      {
        title: "Mirror Feedback",
        img: "",
        text: [
          "We recieved some interesting feedback from playtesting that the Camera based mirror had some major issues and that our solutions to these issues did not fix. Players still found depth perception in the mirror challenging and the background of the mirror confusing. Players also mentioned that it felt like having a TV screen out in the wilderness, which hurt the immersion factor.",
          "To address this, we created hands that mirrored the player's movement and orbs that mirrored the orbs movement. We found that this addressed both of these complaints. Depth perception was made significantly easier by the fact that movements were now mirrored in 3D instead of on a 2D plane in front of the player."
        ]
      },
      {
        title: "Main Menu and Player Calibration",
        img: "",
        text: [
          "This week, we also added two new levels altogether: a menu screen and a calibration level. The menu screen was fairly basic, only consisting of a text renderer actor and two “buttons” to move to different scenes. The most difficult part of this task was registering when the user clicked on which button. To do this, we added a line trace in a menu screen manager actor which set a “pointed actor” variable. When the right trigger was pressed, we used the VRPawn blueprint to call another function in the menu screen manager that takes the player to the appropriate level based on the current pointed actor.",
          "During playtesting, some of the players mentioned that the orbs felt to far apart or too high for them. This is something we did not consider when creating the orbs initially. We realized that we needed to have a way to adjust for the variance in sizes of people considering that stretching heavily involves reaching to a person's limits in terms of wingspan and height.",
          "Our end goal is to have all of our poses be dynamic and based on several body measurements. For example, when the pose calls for reaching up as high as possible, we want the desired hand position to be exactly as high as the player can physically reach, no more and no less. To this end, we created a calibration system within a new level that allows the player to calibrate their wingspan, standing head height, and max arm height. These values are saved in a “Game Manager” class, a child class we created from the Game Instance class. This way, the values persist between all levels. Building the calibration system itself used very similar logic to the main menu screen - adding a line trace, detecting triggers, and calling another function to set the appropriate parameters.",
        ]
      },
      {
        title: "Creating Different Environments",
        img: "scenes.png",
        text: [
          "Some user feedback we recieved this week was that we should add multiple environments to perform stretches in. They felt that this would really help the VR emphasis goal of this project. This aligned with our ideas because we wanted to make the player feel calm and collected and to help them reach a Zen state.",
          "To implement this, we first thought about simply teleporting the player and all of the yoga 'equipment' to another point of the map. This didn't seem like a good solution because it introduced lots of weird math and potential for bugs. Our second idea was to create two different levels and use something like Unity's 'Dont Destroy On Load'. Unfortunately, this did not seem to exist in Unreal Engine. We finally decided to use Unreal's built in level streaming, which gave us a useful and simple way to switch scenes.",
          "Unreal Engine's level streaming feature allows the player to create 'sublevels' which are essentially maps that have a location within the main 'persistent level'. We used this to create a forest area in one sublevel and a beach area in another. Then we just had to add the code to make the player able to switch sublevels. To create the levels, we learned how to use the Landscape and Foliage tools built into Unreal Engine 5.",
          "We also adding variable lighting to these scenes, adding a day-night cycle with lights that turn on in the environment when it reaches night time. We realize the night time lights are not very immersive, so we are working to improve this in a way that fits each scene."
        ]
      },
      {
        title: "Different Stretches and Last Minute Struggles",
        img: "",
        text: [
          "One of the key features we wanted to add this week was the ability for players to perform different stretches. We wanted to make the player able to select different stretches so that the player stretched different muscles during gameplay.",
          "To implement this, the player naturally goes from one pose to another, with slow movement of the orbs to guide the player. When the player reaches the stretch position, the orbs hold in place for an amount of time, allowing the player to fully stretch before transitioning to the next pose.",
          "We were able to get this working on one computer, but then when we pulled it onto the computer for recording we found that it no longer worked. Unfortunately we did not have enough time before release to debug and fix this issue, so we had to remove these changes for or Alpha Release rather than record a broken project.",
          "The big take-away from this is to always leave ourselves enough time to debug before the deadline."
        ]
      },
    ]
  }

  const post2 = {
    title: 'Week 2 (Milestone 2) Dev Update',
    date: 'November 15th, 2023',
    greeting: 'Hello, StretchVR fans! Our big focus this week was on improving the user experience of movement.',
    youtubeEmbedCode: 'Org7tP3PhjE',
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
    <div className='bg-img'>
      <Post post={post4} />
      <Post post={post3} />
      <Post post={post2} />
      <Post post={post1} />
      <Spacer color="none" />
      <Footer title={title} color="primary3" />
    </div>
  );
}

export default DevBlog;