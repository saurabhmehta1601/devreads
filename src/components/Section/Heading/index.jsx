import styled from "styled-components";
const H2 = ({ children }) => <Heading>{children}</Heading>;

const Heading = styled.h2`
  background-color: var(--clr-bg-dark);
  color: var(--clr-bg-light);
  padding: 0.15em 0.8em;
  border-radius: 4px;
`;

export default H2;
