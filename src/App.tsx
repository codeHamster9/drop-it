import { FC } from "react";

import "./style.css";
import Header from "./components/molecules/Header";
import { Outlet } from "react-router-dom";

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
};
