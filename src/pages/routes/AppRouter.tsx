// AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "../routes/routes";
import MainPage from "../MainPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
