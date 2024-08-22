import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { memo } from "react";

const Header = () => {
  const nav = useNavigate();

  const buttonIcon =
    location.pathname === "/" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    );

  const onClickButton = () => {
    nav(location.pathname === "/" ? "/search" : "/");
  };

  return (
    <StyledHeader>
      <Container>
        <Title>서울 핫스팟</Title>
        <Button onClick={onClickButton}>{buttonIcon}</Button>
      </Container>
    </StyledHeader>
  );
};

export default memo(Header);

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1160px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 3px;
  border-radius: 5px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
