import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const InfoSkeleton = () => {
  return (
    <StyledInfoSkeleton>
      <Skeleton style={{ height: "200px", borderRadius: "1.5rem" }} />
      <Skeleton style={{ height: "1000px", borderRadius: "1.5rem" }} />
      <Skeleton style={{ height: "200px", borderRadius: "1.5rem" }} />
      <Skeleton style={{ height: "200px", borderRadius: "1.5rem" }} />
      <Skeleton style={{ height: "200px", borderRadius: "1.5rem" }} />
    </StyledInfoSkeleton>
  );
};

export default InfoSkeleton;

const StyledInfoSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;

  @media screen and (min-width: 768px) {
    gap: 3rem;
    padding-top: 3rem;
  }
`;
