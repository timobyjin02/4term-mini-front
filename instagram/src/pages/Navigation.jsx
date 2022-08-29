import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Navigation/Menu";
import {
  Container,
  Wrap,
  ImgLogo,
  Search,
} from "../styles/Navigation/NavigationStyle";
import ComboBox from '../components/Navigation/ComboBox';

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
        <ComboBox />
        <Menu />
      </Wrap>
    </Container>
  );
}

export default Navigation;
