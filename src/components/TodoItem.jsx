import styled from "styled-components";
import { useState } from "react";
const TodoListItembox = styled.li`
  display: grid;

  width: 100%;
  margin: 0 auto;
  min-height: 4.5rem;
  background-color: rgba(25, 14, 0, 0.746);
  background:transparent;
`;
const CloseItembox = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: end;
  cursor: pointer;
`;
const CloseItem = styled.a`
  bakcground-color: rgba(70, 14, 0, 0.746);
  font-size: 2.5rem;
  text-shadow: 4px 4px 12px #d2f1s3;
`;
const TaskTextbox = styled.label`
  width: 100%;
  height: 100%;
  align-self: center;
  background-color: rgba(35, 35, 35, 0.746);
`;
const TaskText = styled.input`
  width: calc(100%);
  justify-self: center;
  height: 100%;
  font-size: 1.5rem;

  padding: 1ch;
  text-transform: capitalize;
  border-radius: 5px;
  text-align: center;
  background: rgba(19, 19, 19, 0.777);
`;
const Clockbox = styled.label`
  justify-self: center;
  width: 100%;
  height: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;

`;
const ClockContainer = styled.div`
  width: calc(100% );
  height: calc(100% );
  align-self: center;
  justify-self: center;
  display: flex;
  background: rgba(19, 19, 19, 0.777);
`;
const ClockInput = styled.input`
  width: 50%;
  height: 100%;
  align-self: center;
  font-size: 1.5rem;
  text-align: right;
  background: rgba(19, 19, 19, 0.777);
  color: #555555;
  padding-right:.5ch;
`;
const ClockDurationUnit = styled.div`
  width:50%;
  display: grid;
  height: 100%;
  align-self: center;
  align-items: center;
  background: rgba(19, 19, 19, 0.777);
`;
const DurationUnitText = styled.p`
  height:100%;
  font-size: 1.5rem;
  text-align: left;
  color: #555555;
`;
const ClockControlsContainer = styled.div`
  display: flex;
  width: calc(100% - 2px);
  /* grid-gap: 2px;  */
  justify-self: center;
  align-self: center;
  /* background-color: rgba(35, 35, 35, 0.746); */
  /* background-color: rgba(35, 35, 35, 0.196); */
  /* background-color: rgba(35, 35, 35, 0.196); */
  /* ff 3.6+ */
  background: -moz-linear-gradient(
    180deg,
    rgba(37, 18, 0, 1) 0%,
    rgba(0, 0, 0, 1) 51%,
    rgba(20, 0, 0, 1) 99%
  );
  /* safari 5.1+,chrome 10+ */
  background: -webkit-linear-gradient(
    180deg,
    rgba(37, 18, 0, 1) 0%,
    rgba(0, 0, 0, 1) 51%,
    rgba(20, 0, 0, 1) 99%
  );
  /* opera 11.10+ */
  background: -o-linear-gradient(
    180deg,
    rgba(37, 18, 0, 1) 0%,
    rgba(0, 0, 0, 1) 51%,
    rgba(20, 0, 0, 1) 99%
  );
  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#140000', endColorstr='#251200', GradientType=1 );

  /* ie 10+ */
  background: -ms-linear-gradient(
    180deg,
    rgba(37, 18, 0, 1) 0%,
    rgba(0, 0, 0, 1) 51%,
    rgba(20, 0, 0, 1) 99%
  );

  /* global 94%+ browsers support */
  background: linear-gradient(
    180deg,
    rgba(37, 18, 0, 1) 0%,
    rgba(0, 0, 0, 1) 51%,
    rgba(20, 0, 0, 1) 99%
  );
  color: rgb(132, 132, 132);
  background-color: rgba(35, 35, 35, 0.196);
  height: calc(100% - 3px);
  border-radius: 25px 0 0 25px;
  background: transparent;
`;
const ControlButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 900;
  // background-color: rgba(35, 35, 35, 0.746);
  // color: rgb(0, 114, 120);
  // color: #740000;
  width: 100%;
  height: 100%;
  color: rgb(205, 0, 0);
  background-color: rgba(35, 35, 35, 0.196);
`;
const StartButton = styled.input`
  justify-self: center;
  align-self: center;
  width: calc(100% );
  height: calc(100%);
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 0 25px 25px 0;
  padding: 1rem;
  background-color: #232323;
  color: #616161;
  color: rgb(205, 0, 0);
  background-color: rgba(35, 35, 35, 0.196);
`;
const step = 5;
const durationUnit = "min";
export const TodoItem = () => {
  // const [currentValue,updateMethod(which updates the stateVariable)]=usestate(initialValue)
  const [duration, setDuration] = useState(20);
  return (
    <TodoListItembox className="TodoListItembox">
      <CloseItembox>
        <CloseItem>&times;</CloseItem>
      </CloseItembox>

      <TaskTextbox htmlFor="textInput">
        <TaskText id="textInput" type="text" placeholder="Task" />
      </TaskTextbox>

      <Clockbox htmlFor="clockInput" className="clockbox">
        <ClockContainer className="clockContainer">
          <ClockInput
            type="text"
            placeholder={duration}
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          ></ClockInput>
          <ClockDurationUnit>
            <DurationUnitText>{durationUnit}</DurationUnitText>
          </ClockDurationUnit>
        </ClockContainer>

        <ClockControlsContainer className="clock-controls">
          <ControlButton
            className="control-button control-minus"
            onClick={(e) => {
              e.preventDefault();
              if (duration >= step) {
                setDuration(duration - step);
              }
            }}
          >
            -
          </ControlButton>

          <ControlButton
            className="control-button control-plus"
            onClick={(e) => {
              e.preventDefault();
              setDuration(duration + step);
            }}
          >
            +
          </ControlButton>
        </ClockControlsContainer>
      </Clockbox>

      <StartButton
        type="submit"
        value="Start"
        className="start-button"
        onClick={(e) => {
          e.preventDefault();
        }}
      />
    </TodoListItembox>
  );
};
