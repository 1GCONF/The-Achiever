import styled from "styled-components";
const FooterSection = styled.footer`
  background-color: black;
  display: flex;
  align-items: center;
`;
const FooterText = styled.p`
  width: 100%;
  color: white;
  text-align: center;
`;
export default function Footer() {
  return (
    <FooterSection>
      <FooterText>Updated: 2022</FooterText>
    </FooterSection>
  );
}
