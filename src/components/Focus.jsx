import styled from "styled-components";
import { TodoItem } from "./TodoItem";
const FocusSection = styled.section``;
const FocusText = styled.h2`
text-align: center;
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
        <FocusText>today's focus:</FocusText>
      <TodoFrom>
        <TodoList className="Todo-UnorderedList">
          <TodoItem />
        </TodoList>
      </TodoFrom>
    </FocusSection>
  );
}
