import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import { Home } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
