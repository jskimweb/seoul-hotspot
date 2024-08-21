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
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
