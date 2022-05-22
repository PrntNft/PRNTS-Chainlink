import React, { useState } from "react";
import Project from "../components/Project";

interface Props {}

const BountyPage: React.FC<Props> = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderContainer = () => (
    <div>
      <Project />
    </div>
  );

  return renderContainer();
};

export default BountyPage;
