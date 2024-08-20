import Header from "../components/Header";
import styled from "styled-components";
import { HOTSPOTS } from "../constants/index";
import { useState } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  const filteredHotspots = HOTSPOTS.filter((spot) =>
    spot.name.includes(keyword)
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <Header />
      <Body>
        <Input
          value={keyword}
          onChange={onChange}
          placeholder="검색어를 입력해주세요."
        />
        <ItemWrapper>
          {filteredHotspots.map((spot) => {
            return <Item key={spot.name}>{spot.name}</Item>;
          })}
        </ItemWrapper>
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

const Input = styled.input`
  width: calc(100% - 40px);
  height: 60px;
  outline: none;
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 0 20px;
  margin-bottom: 20px;
  font-size: 20px;

  &:focus {
    border-bottom: 1px solid black;
  }
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  font-size: 20px;
`;

const Item = styled.div`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
