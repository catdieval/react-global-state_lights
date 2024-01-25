import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lights, onSetLight }) {
  return (
    <StyledQuickActions>
      <Button
        id="off"
        type="button"
        onClick={(event) => onSetLight(event)}
        disabled={lights.every((light) => !light.isOn)}
      >
        Turn all lights off
      </Button>
      <Button
        id="on"
        type="button"
        onClick={(event) => onSetLight(event)}
        disabled={lights.every((light) => light.isOn)}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
