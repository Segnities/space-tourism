import React from "react";

import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

export const routes = [
    {id: "home", path: "/", element: Home},
    {id: "*", path: "*", element: NotFound}
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