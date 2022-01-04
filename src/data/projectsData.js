import * as React from "react";

import readableImg from "../images/readable-4.jpg";
import wyrImg from "../images/wyr-5.jpg";
import contentfulImg from "../images/contentful-1.jpg";
import flashcardsImg from "../images/flashcards-5.png";

import ExpressBadge from "../components/Badges/Express/ExpressBadge";
import FirebaseBadge from "../components/Badges/Firebase/FirebaseBadge";
import GatsbyBadge from "../components/Badges/Gatsby/GatsbyBadge";
import GraphQLBadge from "../components/Badges/GraphQL/GraphQLBadge";
import NextBadge from "../components/Badges/Next/NextBadge";
import ReactBadge from "../components/Badges/React/ReactBadge";
import ReduxBadge from "../components/Badges/Redux/ReduxBadge";
import ReactNativeBadge from "../components/Badges/ReactNative/ReactNativeBadge";
import ExpoBadge from "../components/Badges/Expo/ExpoBadge";
import StyledComponentsBadge from "../components/Badges/StyledComponents/StyledComponentsBadge";
import TailwindBadge from "../components/Badges/Tailwind/TailwindBadge";

export const projectsData = [
  {
    title: "Readable - Full-Stack Social Media App",
    image: readableImg,
    badges: [
      <ReactBadge />,
      <ReduxBadge />,
      <FirebaseBadge />,
      <TailwindBadge />,
    ],
    description: [
      "Readable is a modern social media, online community discussion app. This is my flagship project which includes elements that are similar to other popular social platforms such as Reddit and Facebook.",
      "You can add posts to the main feed that anyone can interact with. Some of the cool features are: Upvotes and downvotes, add to favourites, comments, a live search bar and notifications. You even have your own public profile that you can customise.",
    ],
  },
  {
    title: "Would You Rather Game",
    image: wyrImg,
    badges: [<ReactBadge />, <ReduxBadge />, <ExpressBadge />],
    description: [
      "This is an online version of the classic 'Would you rather' game. In order to play, you can either create your own polls or answer any of the already open ones.",
      "When you complete a poll, the app will show you what the other players answered and it will be moved to the 'Answered' category. Every time you either create or complete a poll, you will receive 1 point that will be reflected in the leaderboard page.",
    ],
  },
  {
    title: "Gatsby Contentful Blog",
    image: contentfulImg,
    badges: [<ReactBadge />, <GatsbyBadge />, <GraphQLBadge />],
    description: [
      "This project is a fictional personal blog that uses the static site generator Gatsby and Contentful as a headless CMS.",
      "This site uses GraphQL queries to fetch all the published blog posts on the Contentful dashboard. It also automatically deploys to Netlify every time a new blog post is published, deleted or edited.",
    ],
  },
  {
    title: "Flashcards Mobile App",
    image: flashcardsImg,
    badges: [<ReactNativeBadge />, <ExpoBadge />, <StyledComponentsBadge />],
    description: [
      "This is a study app that helps you memorise information. You can create cards with questions and practice recalling the answers. You can also categorise all your cards into decks for better organisation.",
      "Whenever you want to practice, all you have to do is click on 'Start Quiz' and then select whether you got the question right or wrong. The app will also indicate the remaining cards left on that deck.",
    ],
  },
];
