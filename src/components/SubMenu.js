import React, { Component } from "react";
import styled from "styled-components";
import globals from "../utils/globals";
import { noBullet, position } from "../utils/mixins";
import { rubriqueColor } from "../utils/colors";

const Items = styled.ul`
  ${noBullet()};
`;
const Item = styled.li`
  display: inline-block;
  margin-right: ${globals.sizes.base};
  @media (min-width: 768px) {
    margin-right: 0;
    margin-bottom: ${globals.sizes.base};
    display: block;
  }
`;

const ItemButton = styled.button`
  background: none;
  outline: none;
  border: 0;
  display: block;
  padding: 0;
  margin: 0;
  color: ${rubriqueColor};
  text-decoration: none;
  font-weight: normal;
  font-size: ${globals.sizes.small};
  width: 100%;
  cursor: pointer;
  position: relative;
  text-align: left;
  @media (min-width: 768px) {
    text-align: right;
  }

  .active & {
    font-weight: bold;
    &:before {
      content: "";
      display: inline-block;
      vertical-align: center;
      margin-right: 0.5rem;
      width: 0.5rem;
      height: 0.5rem;
      background: ${rubriqueColor};
      opacity: 0.5;
      transition: opacity ${globals.transition.duration}
        ${globals.transition.function};
      z-index: -1;
      @media (min-width: 768px) {
        margin-right: 0;
        transform: translateY(-50%);
        ${position("50%", "-1rem", "auto", "auto")};
      }
    }
  }
`;

class SubMenu extends Component {
  render() {
    return (
      <nav>
        <Items>
          <Item className={this.props.tag === null && "active"}>
            <ItemButton onClick={() => this.props.update()}>Tous</ItemButton>
          </Item>
          {this.props.menu.map((category, index) => (
            <Item
              key={index}
              className={this.props.tag === category.slug && "active"}
            >
              <ItemButton onClick={() => this.props.update(category.slug)}>
                {category.title}
              </ItemButton>
            </Item>
          ))}
        </Items>
      </nav>
    );
  }
}
export default SubMenu;
