import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { memo } from "react";
import { Search, House } from "lucide-react";

const Header = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const onClickButton = () => {
    nav(pathname === "/" ? "/search" : "/");
  };

  return (
    <StyledHeader>
      <Container>
        <LogoAndTitle>
          <Logo src="/logo.png" alt="logo" />
          <Title>서울 핫스팟</Title>
        </LogoAndTitle>
        <Button onClick={onClickButton}>
          {pathname === "/" ? <Search size={24} /> : <House size={24} />}
        </Button>
      </Container>
    </StyledHeader>
  );
};

export default memo(Header);

const StyledHeader = styled.header`
  position: sticky;
  display: flex;
  align-items: center;
  height: 6rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    padding: 0 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    width: 116rem;
  }
`;

const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.img`
  height: 3.5rem;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 0.3rem;
  border-radius: 0.5rem;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
