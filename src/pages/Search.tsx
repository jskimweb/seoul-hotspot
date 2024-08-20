import Header from "../components/Header";
import styled from "styled-components";

const Search = () => {
  return (
    <>
      <Header />
      <Body>검색화면</Body>
    </>
  );
};

export default Search;

const Body = styled.div`
  width: 1160px;
  margin: 0 auto;
  padding: 20px 0;
`;
