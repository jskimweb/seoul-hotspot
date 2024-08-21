import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { memo } from "react";

const Header = () => {
  const nav = useNavigate();

  const buttonLabel = location.pathname === "/" ? "검색" : "이전";

  const onClickButton = () => {
    nav(location.pathname === "/" ? "/search" : "/");
  };

  return (
    <StyledHeader>
      <Container>
        <Title>서울 핫스팟</Title>
        <button onClick={onClickButton}>{buttonLabel}</button>
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
  width: 1160px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
