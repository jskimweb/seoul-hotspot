import styled from "styled-components";

const InfoContainer = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <StyledInfoContainer>
      <Title>{title}</Title>
      {children}
    </StyledInfoContainer>
  );
};

export default InfoContainer;

const StyledInfoContainer = styled.div`
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`;

const Title = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
