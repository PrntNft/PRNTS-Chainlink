import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSetState } from "react-use";

interface Props {}

interface State {
  staked: boolean;
}

const AddRewardPage: React.FC<Props> = (props: Props) => {
  const [state, setState] = useSetState<State>({
    staked: true,
  });

  const { staked } = state;

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
    </div>
  );

  return renderContainer();
};

export default AddRewardPage;
