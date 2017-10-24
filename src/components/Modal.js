import React, { Component } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Icon from "./Icon";
import colors, { rubriqueColor } from "../utils/colors";
import { position } from "../utils/mixins";
import globals from "../utils/globals";

const zIndex = 999;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  color: ${colors.white};
  overflow-y: auto;
  width: 100%;
`;
const Inner = styled.div`
  position: relative;
  max-width: 800px;
  padding: ${globals.spaces.base};
  margin: ${globals.spaces.large} auto;
  z-index: ${zIndex + 1};
`;
const Background = styled.div`
  background: ${rubriqueColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: ${zIndex};
`;
const CloseButton = styled.button`
  background: transparent;
  border: none;
  outline: 0;
  color: inherit;
  cursor: pointer;
  z-index: ${zIndex + 1};
  ${position(globals.spaces.base, globals.spaces.base, "auto", "auto")};
`;

class Modal extends React.Component {
  close = e => {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    if (this.props.isOpen === false) return null;

    return (
      <Wrapper>
        <Inner>{this.props.children}</Inner>
        <Background onClick={e => this.close(e)} />
        <CloseButton onClick={e => this.close(e)}>
          <Icon icon="close" />
        </CloseButton>
        <Helmet
          htmlAttributes={{
            style: "overflow-y: hidden; height: 100%"
          }}
        />
      </Wrapper>
    );
  }
}

export default Modal;
