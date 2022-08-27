import styled from "styled-components";
const StopwatchBox = styled.div`
  background: red;
`;
export default function Stopwatch() {
  return (
    <StopwatchBox>
      <Stopwatch></Stopwatch>
    </StopwatchBox>
  );
}
