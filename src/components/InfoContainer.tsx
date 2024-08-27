import styled from "styled-components";

const InfoContainer = ({
  children,
  title,
  time,
}: {
  children: React.ReactNode;
  title: string;
  time: string;
}) => {
  return (
    <StyledInfoContainer>
      <TitleAndTime>
        <Title>{title}</Title>
        <Time>{`${time} 기준`}</Time>
      </TitleAndTime>
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

const TitleAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Title = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Time = styled.span`
  font-size: 1rem;
  color: gray;

  @media screen and (min-width: 768px) {
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.3rem;
  }
`;
