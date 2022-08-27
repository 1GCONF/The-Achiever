import styled from "styled-components";
import { TodoItem } from "./TodoItem";
const FocusSection = styled.section``;
const FocusTitlebox = styled.div`
  text-align: center;
`;
const FocusText = styled.h2`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: underline;
`;
const TodoFrom = styled.form`
  text-align: center;
`;
const TodoList=styled.ul`
    width:100%;
    margin:2rem 0;
`
export default function Focus() {
  return (
    <FocusSection className="focus-section">
      <FocusTitlebox>
        <FocusText>today's focus:</FocusText>
      </FocusTitlebox>
      <TodoFrom>
        <TodoList>
          <TodoItem />
        </TodoList>
      </TodoFrom>
    </FocusSection>
  );
}
