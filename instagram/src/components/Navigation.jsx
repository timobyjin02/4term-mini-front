import styled from "@emotion/styled";
import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import Menu from "./Menu";

function Navigation() {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  // const filterTitle = users.filter((p) => {
  //     return p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  // })

  return (
    <DivMain>
      <DivNavigation>
        <DivContainer>
          <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
          <DivSearch>
            <SearchIcon className="search" />
            <input
              type="text"
              value={search}
              placeholder="검색"
              onChange={onChange}
            />
          </DivSearch>
          <Menu />
        </DivContainer>
      </DivNavigation>
    </DivMain>
  );
}

export default Navigation;

const DivMain = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivNavigation = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.palette.backgroundWhite};
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderGrey};
  display: flex;
`;
const DivContainer = styled.div`
  padding: 1em 0 0.9em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;
const ImgLogo = styled.img`
  padding: 0 1 rem;
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;
const DivSearch = styled.div`
  border-radius: 3px;
  background-color: ${({ theme }) => theme.palette.searchBg};
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 5px;
  .search {
    width: 13px;
    margin-right: 0.3em;
  }
  input {
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.palette.searchBg};
  }
`;
