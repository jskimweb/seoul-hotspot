import { ReactNode } from "react";
import styled from "styled-components";

const Body = ({ children }: { children: ReactNode }) => {
  return <StyledBody>{children}</StyledBody>;
};

export default Body;

const StyledBody = styled.div`
  margin: 0 auto;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }

  @media screen and (min-width: 1440px) {
    width: 116rem;
    padding: 3rem 0;
  }
`;
