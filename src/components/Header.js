import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import headerImg from "../assets/images/header.jpg";
import headerImgBig from "../assets/images/header-accueil.jpg";
import blockmark from "../assets/svg/blockmark.svg";

const MainHeader = styled.header`
  background-color: #61a36e;
  background-image: url(${headerImg});
  background-position: center;
  background-size: cover;
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: center;
  height: ${props => (props.extended ? "80vh" : "285px")};
  position: relative;
  transition: height 250ms ease-in;

  @media (max-width: 640px) {
    height: ${props => (props.extended ? "100vh" : "200px")};
    background-position: ${props => (props.extended ? "-250px" : "-80px")};
    align-items: ${props => (props.extended ? "flex-start" : "center")};
  }

  h1 {
    margin: 0;
    padding: 0;
    color: white;

    img {
      margin-bottom: 0;
      transition: all 250ms ease-in;
    }
  }
`;

const Header = props => {
  return (
    <Link to="/">
      <MainHeader extended={props.extended}>
        <h1>
          <img
            src={blockmark}
            alt="GreenLeaders"
            width={props.extended ? "320" : "220"}
          />
        </h1>
      </MainHeader>
    </Link>
  );
};

export default Header;
