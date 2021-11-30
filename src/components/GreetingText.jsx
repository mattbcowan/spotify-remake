import styled from "styled-components";

const Greeting = styled.h2`
  font-size: 2rem;
  padding: 1.5rem 0;
  color: #fff;
  font-weight: 600;
`;

const GreetingText = ({ children }) => {
  return <Greeting>{children}</Greeting>;
};

export default GreetingText;
