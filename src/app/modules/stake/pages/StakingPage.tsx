import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSetState } from "react-use";
import Project from "../../project/components/Project";
import StakeCard from "../components/StakeCard";
import StakedCard from "../components/StakedCard";
import { getUsersNfts } from "../service/getUserNFT-service";
import { ethers } from "ethers";
interface Props {}

interface State {
  staked: boolean;
}

const StakingPage: React.FC<Props> = (props: Props) => {
  const [state, setState] = useSetState<State>({
    staked: true,
  });

  const { staked } = state;

  useEffect(() => {
    console.log("stajecard");
    getUserNFTS();
  }, []);

  const getUserNFTS = () => {
    getUsersNfts("0x1F3B212946dd369d1563a0471b551d306106531F").then((nfts) => {
      console.log(nfts, "nft");
    });
  };

  const renderContainer = () => (
    <div>
      <div>
        <Button
          variant="outline-primary"
          onClick={() => setState({ staked: true })}
        >
          Staked
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => setState({ staked: false })}
        >
          Not Staked
        </Button>
      </div>
      {staked ? <StakedCard /> : <StakeCard />}
    </div>
  );

  return renderContainer();
};

export default StakingPage;
