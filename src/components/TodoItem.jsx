import styled from "styled-components";
import { useState } from "react";
const TodoListItembox = styled.li`
  display: grid;
  grid-template-columns: 60% 25% 15%;
  width: 100%;
  margin: 0 auto;
  min-height: 4.5rem;
  /* background-color: rgba(70, 14, 0, 0.746); */
  background:transparent;
`;
const TaskTextbox = styled.label`
  width: calc(100% - 5px);
  height: 95%;
  align-self: center;
  background-color: rgba(35, 35, 35, 0.746);
  border-radius:5px;
`;
const TaskText = styled.input`
  width: calc(100%);
  justify-self: center;
  height: 100%;
  font-size: 1.5rem;
  color: #7300cb;
  background: rgba(19, 19, 19, 0.777);
  padding: 1ch;
  text-transform:capitalize;
  border-radius:5px;
`;
const CloseItembox=styled.div`
  display:grid;
  align-items:center;
  justify-items:center;
`;
const CloseItem=styled.a`
  color:purple;
`
const Clockbox = styled.label`
  justify-self: center;
  width: 100%;
  height: 100%;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const ClockContainer = styled.div`
  width: calc(100% - 2px);
  height: calc(100% - 6px);
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-columns: 3.5fr 5fr;
  background-color: rgba(35, 35, 35, 0.746);
  /* ff 3.6+ */
  background: -moz-linear-gradient(
    180deg,
    rgba(61, 45, 0, 1) 0%,
    rgba(154, 33, 0, 1) 52%,
    rgba(37, 26, 0, 1) 99%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-linear-gradient(
    180deg,
    rgba(61, 45, 0, 1) 0%,
    rgba(154, 33, 0, 1) 52%,
    rgba(37, 26, 0, 1) 99%
  );

  /* opera 11.10+ */
  background: -o-linear-gradient(
    180deg,
    rgba(61, 45, 0, 1) 0%,
    rgba(154, 33, 0, 1) 52%,
    rgba(37, 26, 0, 1) 99%
  );

  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#251A00', endColorstr='#3D2D00', GradientType=1 );

  /* ie 10+ */
  background: -ms-linear-gradient(
    180deg,
    rgba(61, 45, 0, 1) 0%,
    rgba(154, 33, 0, 1) 52%,
    rgba(37, 26, 0, 1) 99%
  );

  /* global 94%+ browsers support */
  background: linear-gradient(
    180deg,
    rgba(61, 45, 0, 1) 0%,
    rgba(154, 33, 0, 1) 52%,
    rgba(37, 26, 0, 1) 99%
  );
  background: rgba(19, 19, 19, 0.777);
  border-radius:5px;
`;
const ClockInput = styled.input`
  width: 100%;
  height: 100%;
  align-self: center;
  font-size: 1.5rem;
  color: #db0000;
  padding: 0.1ch;
  text-align: right;
  background: rgba(19, 19, 19, 0.777);
  background-color:transparent;
  border-radius:25px 0 0 0;
`;
const ClockDurationUnit = styled.div`
  display: grid;
  height: 100%;
  align-self: center;
  align-items: center;
  padding: 0.1ch;
  background: rgba(19, 19, 19, 0.777);
  background-color:transparent;
`;
const DurationUnitText = styled.p`
  font-size: 1.5rem;
  color: #db0000;
  text-align: left;
`;
const ClockControlsContainer = styled.div`
  display: grid;
  width: calc(100%);
  /* grid-gap: 2px;  */
  justify-self: center;
  align-self: center;
  /* background-color: rgba(35, 35, 35, 0.746); */
  /* background-color: rgba(35, 35, 35, 0.196); */
  /* background-color: rgba(35, 35, 35, 0.196); */

    /* ff 3.6+ */
    background:-moz-linear-gradient(180deg, rgba(37, 18, 0, 1) 0%, rgba(0, 0, 0, 1) 51%, rgba(20, 0, 0, 1) 99%); 

    /* safari 5.1+,chrome 10+ */
    background:-webkit-linear-gradient(180deg, rgba(37, 18, 0, 1) 0%, rgba(0, 0, 0, 1) 51%, rgba(20, 0, 0, 1) 99%);

    /* opera 11.10+ */
    background:-o-linear-gradient(180deg, rgba(37, 18, 0, 1) 0%, rgba(0, 0, 0, 1) 51%, rgba(20, 0, 0, 1) 99%);

    /* ie 6-9 */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#140000', endColorstr='#251200', GradientType=1 );

    /* ie 10+ */
    background:-ms-linear-gradient(180deg, rgba(37, 18, 0, 1) 0%, rgba(0, 0, 0, 1) 51%, rgba(20, 0, 0, 1) 99%);

    /* global 94%+ browsers support */
    background:linear-gradient(180deg, rgba(37, 18, 0, 1) 0%, rgba(0, 0, 0, 1) 51%, rgba(20, 0, 0, 1) 99%);
    color: rgb(132, 132, 132);
  background-color: rgba(35, 35, 35, 0.196);
  height: calc(100% - 3px);
  border-radius:25px 0 0 25px;
`;
const ControlButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight:900;
  background-color: rgba(35, 35, 35, 0.746);
  color: rgb(0, 114, 120);
  color: #740000;
  width: 100%;
  height: 100%;
`;
const StartButton = styled.input`
  justify-self: center;
  align-self: center;
  width: calc(100% - 2px);
  height: calc(100% - 6px);
  cursor: pointer;
  font-size: 1.5rem;
  background-color: #232323;
  color: #616161;
  border-radius: 0 25px 25px 0;
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

        <ClockControlsContainer className="clock-controls">
          <ControlButton
            className="control-button control-plus"
            onClick={(e) => {
              e.preventDefault();
              setDuration(duration + step);
            }}
          >
            +
          </ControlButton>
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
        </ClockControlsContainer>
        
        <ClockContainer>
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
