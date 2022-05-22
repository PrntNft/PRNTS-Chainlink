import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProjectPage from "../modules/project/pages/ProjectPage";
import AddRewardPage from "../modules/stake/pages/AddRewardPage";
import StakingPage from "../modules/stake/pages/StakingPage";

interface Props {}

const AppContainer: React.FC<Props> = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderContainer = () => (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProjectPage />} />

        <Route path="/staking" element={<StakingPage />} />

        <Route path="/rewards" element={<AddRewardPage />} />
      </Routes>
    </BrowserRouter>
  );

  return renderContainer();
};

export default AppContainer;
