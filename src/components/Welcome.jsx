import styled from "styled-components";
const WelcomeSection=styled.section`
    display:flex;
    align-items:center;
`
const WelcomeBox = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WelcomeText = styled.h2`
    font-size:2rem;
    color:rgba(179,192,200,255);
`;
export default function Welcome(props) {
  const { username } = props;
  return (
    <WelcomeSection className="welcome-section">
      <WelcomeBox>
        <WelcomeText>Hi, {username}</WelcomeText>
      </WelcomeBox>
    </WelcomeSection>
  );
}
