import React from "react";
import Link from "gatsby-link";
import Container from "../components/Container";
import styled from "styled-components";
import logo from "../assets/svg/logo-footer.svg";

const MainFooter = styled.footer`
  border-top: 1px solid rgba(47, 47, 48, 0.15);
  padding: 1.5rem 0;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => (
  <MainFooter>
    <img src={logo} alt="Yves Rocher" />
  </MainFooter>
);

export default Footer;
