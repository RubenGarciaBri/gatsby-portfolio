import * as React from "react";

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

export const badges = {
  express: <ExpressBadge />,
  firebase: <FirebaseBadge />,
  gatsby: <GatsbyBadge />,
  graphQl: <GraphQLBadge />,
  next: <NextBadge />,
  react: <ReactBadge />,
  redux: <ReduxBadge />,
  reactNative: <ReactNativeBadge />,
  expo: <ExpoBadge />,
  styledComponents: <StyledComponentsBadge />,
  tailwind: <TailwindBadge />,
};
