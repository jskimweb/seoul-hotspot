import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader >
      <Container>
        <Title>서울 핫스팟</Title>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid lightgray;
`;

const Container = styled.div`
  width: 1160px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;