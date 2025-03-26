// AppRouter.tsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "../MainPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Favorited" element={"/"} />
        <Route path="*" element={"/"} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
