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

const Picto = styled.svg`
  display: inline-block;
  margin-left: 0.5rem;
  vertical-align: middle;
`;

const ButtonWithIcon = props => (
  <Button large {...props}>
    Posez une question
    <Picto height="32" width="36" viewBox="0 0 36 32" fill="currentColor">
      <path
        d="M6.85605027,26.1195676 L1.33226763e-15,26.5310889 L3.91952502,20.5946996 C3.48397835,19.1393883 3.25,17.5970184 3.25,16 L3.25,16 L3.25,16 C3.25,7.163444 10.413444,1.623249e-15 19.25,0 L19.25,0 L19.25,0 C28.086556,-1.623249e-15 35.25,7.163444 35.25,16 L35.25,16 C35.25,24.836556 28.086556,32 19.25,32 C14.2525038,32 9.79014327,29.7088119 6.85605027,26.1195676 Z M17.1748047,19.2636719 L19.7626953,19.2636719 L19.7626953,18.6777344 C19.7626953,18.2871074 19.8457023,17.9713554 20.0117188,17.7304688 C20.1777352,17.4895821 20.5732391,17.1380231 21.1982422,16.6757812 C22.1097051,16.0247363 22.7281885,15.4388047 23.0537109,14.9179688 C23.3792334,14.3971328 23.5419922,13.7786494 23.5419922,13.0625 C23.5419922,11.9882759 23.1464883,11.1289095 22.3554688,10.484375 C21.5644492,9.83984053 20.4983791,9.51757812 19.1572266,9.51757812 C17.5296143,9.51757812 15.9899161,9.9244751 14.5380859,10.7382812 L15.6025391,12.8769531 C16.8525453,12.2389291 17.9658154,11.9199219 18.9423828,11.9199219 C19.5022814,11.9199219 19.938475,12.0305979 20.2509766,12.2519531 C20.5634781,12.4733084 20.7197266,12.7955708 20.7197266,13.21875 C20.7197266,13.5963561 20.6106782,13.9381495 20.3925781,14.2441406 C20.1744781,14.5501317 19.7236362,14.9472632 19.0400391,15.4355469 C18.3304001,15.9563828 17.8421237,16.4479144 17.5751953,16.9101562 C17.3082669,17.3723981 17.1748047,17.9160125 17.1748047,18.5410156 L17.1748047,19.2636719 Z M16.8623047,22.6035156 C16.8623047,23.130862 17.0120428,23.5393866 17.3115234,23.8291016 C17.6110041,24.1188166 18.034177,24.2636719 18.5810547,24.2636719 C19.1149115,24.2636719 19.531574,24.1155614 19.8310547,23.8193359 C20.1305354,23.5231105 20.2802734,23.1178411 20.2802734,22.6035156 C20.2802734,22.0696588 20.1321629,21.6595066 19.8359375,21.3730469 C19.5397121,21.0865871 19.121422,20.9433594 18.5810547,20.9433594 C18.0211561,20.9433594 17.594728,21.0833319 17.3017578,21.3632812 C17.0087876,21.6432306 16.8623047,22.0566379 16.8623047,22.6035156 Z"
        fill="#FFF"
      />
    </Picto>
  </Button>
);

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
        <ButtonWithIcon />
      </QuestionFormSection>
    );
  };

  renderLight = () => {
    return <ButtonWithIcon onClick={this.onClick} />;
  };

  render() {
    return this.props.light ? this.renderLight() : this.renderFull();
  }
}

export default QuestionForm;
