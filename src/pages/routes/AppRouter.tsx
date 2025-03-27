// AppRouter.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import { routes } from "../routes/routes";
const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

export default AppRouter;
