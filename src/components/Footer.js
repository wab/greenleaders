import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Subscription from "./Subscription";
import FooterNavigation from "./FooterNavigation";
import FooterMention from "./FooterMention";
import globals from "../utils/globals";
import colors from "../utils/colors";
import logo from "../assets/svg/logo-footer.svg";

const LogoFooter = styled.footer`
  border-top: 1px solid rgba(47, 47, 48, 0.15);
  padding: ${globals.spaces.base} 0;
  text-align: center;

  img {
    margin-bottom: 0;
  }
`;

const Footer = props => (
  <div>
    <Subscription />
    <FooterNavigation data={props.data} />
    <FooterMention />
    <LogoFooter>
      <img src={logo} alt="Yves Rocher" />
    </LogoFooter>
  </div>
);

export default Footer;
