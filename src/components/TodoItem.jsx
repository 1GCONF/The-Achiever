import styled from "styled-components";
import { useState } from "react";
const TodoListItembox = styled.li`
  width: 100%;
  margin: 0 auto;
  min-height: 4.5rem;

  display:grid;
  grid-template-columns:6fr 1fr 2fr;

  box-shadow:4px 4px 8px 121212;
`;
const CloseItembox = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: end;
  cursor: pointer;
`;
const CloseItem = styled.a`
  background-color: rgba(70, 14, 0, 0.746);
  font-size: 2.5rem;
  text-shadow: 4px 4px 12px d2f1s3;
`;
const TaskTextbox = styled.label`
width: calc(100%);
  height: 100%;
  align-self: center;
  justify-self:center;
  background-color: rgba(35, 35, 35, 0.746);

`;
const TaskText = styled.input`
  width: calc(100%);
  height: 100%;
  justify-self: center;
  font-size: 1.5rem;
  padding: 1ch;
  text-transform: capitalize;
  text-align: center;
  background: rgba(19, 19, 19, 0.777);

`;
const Clockbox = styled.label`
  justify-self: center;
  width: calc(100% - 3px);
  height:100%;
  align-self: center;
  justify-self:end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow:none;
  text-shadow:none;
`;
const ClockControls = styled.div`
  width: calc(100% );
  height:  calc(100%);

  display: flex;
  justify-self: center;
  align-self: center;
  border-radius: 25px 0px 25px 25px;

  // /* ff 3.6+ */
  // background:-moz-linear-gradient(180deg, rgba(37, 18, 0, 1) 0%, rgba(0, 0, 0, 1) 51%, rgba(20, 0, 0, 1) 99%); 

  // /* safari 5.1+,chrome 10+ */
  // background:-webkit-linear-gradient(180deg, rgba(37, 18, 0, 1) 0%, rgba(0, 0, 0, 1) 51%, rgba(20, 0, 0, 1) 99%);

  // /* opera 11.10+ */
  // background:-o-linear-gradient(180deg, rgba(37, 18, 0, 1) 0%, rgba(0, 0, 0, 1) 51%, rgba(20, 0, 0, 1) 99%);

  // /* ie 6-9 */
  // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#140000', endColorstr='#251200', GradientType=1 );

  // /* ie 10+ */
  // background:-ms-linear-gradient(180deg, rgba(37, 18, 0, 1) 0%, rgba(0, 0, 0, 1) 51%, rgba(20, 0, 0, 1) 99%);

  // /* global 94%+ browsers support */
  // background:linear-gradient(180deg, rgba(37, 18, 0, 1) 0%, rgba(0, 0, 0, 1) 51%, rgba(20, 0, 0, 1) 99%);
`;

const ControlButton = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 900;

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
  color: rgb(205, 0, 0);

  `;
const ClockTimestamp = styled.div`
  width: calc(100%);
  height:100%;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  background-color: rgba(35, 35, 35, 0.746);
  @media screen and (max-width:900px){
    grid-template-columns:1fr;
    &>*{
      justify-self:center;
      text-align:center;
    }
  }
`;
const ClockInput = styled.input`
  width: 100%;
  height: 100%;
  align-self: center;
  font-size: 1.5rem;
  color: #45454558;
  padding: 0.1ch;
  text-align: center;
  background: rgba(19, 19, 19, 0.777);
  color: #555555;
  border-radius:25px 0 0 0;
  text-shadow: 4px 4px 12px #f21512;
  @media screen and (max-width:900px){
    text-align:center;
  }

`;
const ClockDurationUnit = styled.div`
  width:100%;
  height: 100%;
  display: grid;

  align-self: center;
  align-items: center;
  padding: 0.1ch;
  background: rgba(19, 19, 19, 0.777);
`;
const DurationUnitText = styled.p`
  height:100%;
  font-size: 1.5rem;
  text-align: center;
  color: #555555;
`;

const StartButton = styled.input`
  width: calc(100% - 0px);
  height: calc(100%);
  justify-self: end;
  align-self: center;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 0 25px 25px 0;


  color: rgb(87, 186, 71);
  background-color: #232323;
  box-shadow: 3px 6px 24px rgba(192, 202, 188, 0.196);

    background-color: rgba(35, 35, 35, 0.196);
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
`;
const step = 5;
const durationUnit = "min";
export const TodoItem = () => {
  // const [currentValue,updateMethod(which updates the stateVariable)]=usestate(initialValue)
  const [duration, setDuration] = useState(20);
  return (
    <TodoListItembox className="TodoListItembox">

      <TaskTextbox htmlFor="textInput" className="textbox">
        <TaskText id="textInput" type="text" placeholder="Task" className="text-input"/>
      </TaskTextbox>

      <StartButton
        type="submit"
        value="Start"
        className="start-button"
        onClick={(e) => {
          e.preventDefault();
        }}
      />
      <Clockbox htmlFor="clockInput" className="clockbox">

        <ClockControls className="clock-controls">

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

        </ClockControls>

        <ClockTimestamp className="clock-timestamp">
          <ClockInput className="clock-input"
            type="text"
            placeholder={duration}
            value={duration}
            onChange={(e) => {
              setDuration(+e.target.value);
            }}
          ></ClockInput>
          <ClockDurationUnit className="clock-durationbox">
            <DurationUnitText className="clock-durationtext">{durationUnit}</DurationUnitText>
          </ClockDurationUnit>
        </ClockTimestamp>

      </Clockbox>

    </TodoListItembox>
  );
};
