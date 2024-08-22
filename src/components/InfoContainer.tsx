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
  padding: 3rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;

const Title = styled.h4`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
