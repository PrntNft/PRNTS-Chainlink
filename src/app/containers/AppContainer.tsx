import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../navbar/NavBar";
// import SignUp from "../../modules/auth/pages/SignUp";
// import Dashboard from "../../modules/dashboard/pages/Dashboard";
// import Profile from "../../modules/profile/pages/Profile";
// import CreateBounty from "../../modules/bounty/pages/CreateBounty"
// import Header from "./Header";

interface Props {}

const AppContainer: React.FC<Props> = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderContainer = () => (
    <BrowserRouter>
      <NavBar />
      {/* <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/signUp" element={<SignUp />} />

        <Route path="/create-bounty" element={<CreateBounty />} />
      </Routes> */}
    </BrowserRouter>
  );

  return renderContainer();
};

export default AppContainer;
