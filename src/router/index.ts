import React from "react";

import Crew from "../pages/Crew/Crew";
import Destination from "../pages/Destination/Destination";

import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Technology from "../pages/Technology/Technology";

export const routes = [
  { id: "home", path: "/", element: Home },
  { id: "destination", path: "/destination", element: Destination },
  { id: "crew", path: "/crew", element: Crew },
  { id: "technology", path: "/technology", element: Technology },
  { id: "*", path: "*", element: NotFound },
];

export const headerLinks = [
  {
    id: "home",
    to: "/",
    title: "home",
  },
  {
    id: "destination",
    to: "/destination",
    title: "destination",
  },
  {
    id: "crew",
    to: "/crew",
    title: "crew",
  },
  {
    id: "technology",
    to: "/technology",
    title: "technology",
  },
];