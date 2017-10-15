import React from "react";
import Link from "gatsby-link";
import Container from "../components/Container";
import styled from "styled-components";

import headerImg from "../assets/images/header.jpg";
import headerImgBig from "../assets/images/header-accueil.jpg";
import logo from "../assets/images/greenleaders.png";

const MainHeader = styled.header`
  background-color: #61a36e;
  background-image: url(${headerImgBig});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.extended ? '80vh' : '160px'};
  position: relative;
  transition: height 250ms ease-in;

  h1 {
    margin: 0;
    padding: 0;
    color: white;

    a {
      display: inline-block;
      color: inherit;
      text-decoration: none;

      img {
        margin-bottom: 0;
      }
    }

  }
`;

const Header = (props) => {
  return (
    <MainHeader extended={props.extended}>
      <h1>
        <Link to="/"><img src={logo} alt="GreenLeaders" /></Link>
      </h1>
    </MainHeader>
  );
}

export default Header;
