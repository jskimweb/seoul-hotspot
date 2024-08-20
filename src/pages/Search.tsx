import Header from "../components/Header";
import styled from "styled-components";
import { HOTSPOTS } from "../constants/index";

const Search = () => {
  return (
    <>
      <Header />
      <Body>
        {HOTSPOTS.map((spot) => {
          return <div key={spot.name}>{spot.name}</div>
        })}
      </Body>
    </>
  );
};

export default Search;

const Body = styled.div`
  width: 1160px;
  margin: 0 auto;
  padding: 20px 0;
`;
