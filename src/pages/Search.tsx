import GlobalLayout from "../components/GlobalLayout";
import styled from "styled-components";
import { HOTSPOTS } from "../constants/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const Search = ({ setSpot }: { setSpot: (spot: string) => void }) => {
  const [keyword, setKeyword] = useState("");
  const nav = useNavigate();

  const filteredHotspots = HOTSPOTS.filter((spot) =>
    spot.name.includes(keyword)
  );

  const initializeKeyword = () => {
    setKeyword("");
  };

  const onClickItem = (spot: string) => {
    setSpot(spot);
    nav("/");
  };

  return (
    <GlobalLayout>
      <InputWrapper>
        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색어를 입력해주세요."
          autoFocus
        />
        {keyword && (
          <RemoveButton onClick={initializeKeyword}>
            <X size={20} />
          </RemoveButton>
        )}
      </InputWrapper>
      <ItemWrapper>
        {filteredHotspots.map((spot) => {
          return (
            <Item key={spot.name} onClick={() => onClickItem(spot.name)}>
              {spot.name}
            </Item>
          );
        })}
      </ItemWrapper>
    </GlobalLayout>
  );
};

export default Search;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;

  @media screen and (min-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 6rem;
  outline: none;
  border: none;
  border-bottom: 0.1rem solid lightgray;
  padding: 0 1rem;
  font-size: 2rem;

  &:focus {
    border-bottom: 0.1rem solid black;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 1rem;
  transform: translateY(-50%);
  border-radius: 50%;
  padding: 0.3rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ItemWrapper = styled.div`
  display: grid;
  gap: 1rem;
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Item = styled.div`
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;
