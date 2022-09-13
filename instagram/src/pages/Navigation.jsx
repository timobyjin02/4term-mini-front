import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Navigation/Menu";
import { Container, Wrap, ImgLogo } from "../styles/Navigation/NavigationStyle";
import ComboBox from "../components/Navigation/ComboBox";

function Navigation() {
  return (
    <Container>
      <Wrap>
        <Link to="/main">
          <ImgLogo alt="instagram logo" src="/img/instagramLogo.png" />
        </Link>
        <ComboBox />
        <Menu />
      </Wrap>
    </Container>
  );
}

export default Navigation;
