import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import styledMap from "styled-map";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import colors from "../utils/colors";
import globals from "../utils/globals";

import questionMark from "../assets/svg/questionmark.svg";

const QuestionFormSection = styled.section`
  border-top: 1px solid ${colors.grey.light};
  padding: ${globals.spaces.large};
  text-align: center;
`;

class QuestionForm extends Component {
  onClick = () => {
    const email = "green.leaders@yrnet.com";
    location.href = "mailto:" + email;
  };

  renderFull = () => {
    return (
      <QuestionFormSection>
        <SectionTitle center>une question ?</SectionTitle>
        <p>
          Vous avez une interrogation sur les produits ou sur les thématiques
          GreenLeaders ? <br /> N’hésitez pas et posez la !
        </p>
        <Button onClick={this.onClick}>Posez une question</Button>
      </QuestionFormSection>
    );
  };

  renderLight = () => {
    return <Button onClick={this.onClick}>Posez une question</Button>;
  };

  render() {
    return this.props.light ? this.renderLight() : this.renderFull();
  }
}

export default QuestionForm;
