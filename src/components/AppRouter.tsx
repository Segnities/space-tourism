import React from "react";
import { Route, Routes } from "react-router";
import { routes } from "../router";

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route element={<route.element />} key={route.id} path={route.path} />
      ))}
    </Routes>
  );
}
