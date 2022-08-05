import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import {
  Container,
  Wrap,
  ImgLogo,
  Search,
} from "../styles/Navigation/NavigationStyle";

function Navigation() {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  // const filterTitle = users.filter((p) => {
  //     return p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  // })

  return (
    <Container>
      <Wrap>
        <Link to="/main">
          <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
        </Link>
        <Search>
          <SearchIcon className="search" />
          <input
            type="text"
            value={search}
            placeholder="검색"
            onChange={onChange}
          />
        </Search>
        <Menu />
      </Wrap>
    </Container>
  );
}

export default Navigation;
