import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const InfoSkeleton = () => {
  const isWide = window.innerWidth >= 1440;

  return (
    <StyledInfoSkeleton>
      <Skeleton style={{ height: "205px", borderRadius: "1.5rem" }} />
      <Skeleton
        style={{
          height: isWide ? "485px" : "1000px",
          borderRadius: "1.5rem",
        }}
      />
      <Skeleton
        style={{
          height: isWide ? "356px" : "200px",
          borderRadius: "1.5rem",
        }}
      />
      <Skeleton
        style={{
          height: isWide ? "356px" : "200px",
          borderRadius: "1.5rem",
        }}
      />
      <Skeleton
        style={{
          height: isWide ? "356px" : "200px",
          borderRadius: "1.5rem",
        }}
      />
    </StyledInfoSkeleton>
  );
};

export default InfoSkeleton;

const StyledInfoSkeleton = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 2rem;

  & > * {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    gap: 3rem;
    padding-top: 3rem;
  }

  @media screen and (min-width: 1440px) {
    & > *:not(:first-child, :nth-child(2)) {
      width: calc(50% - 30px / 2);
    }
  }
`;
