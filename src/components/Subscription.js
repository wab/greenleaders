import React, { Component } from "react";
import styled from "styled-components";
import globals from "../utils/globals";
import { elementInvisible } from "../utils/mixins";

const SubscriptionSection = styled.div`
  border-top: 1px solid rgba(47, 47, 48, 0.15);
  text-align: center;
  padding: ${globals.spaces.large} 0;
`;
const SubscriptionForm = styled.form`
  display: inline-block;
  border-bottom: 1px solid rgba(47, 47, 48, 0.15);
  font-size: ${globals.sizes.small};
  label {
    ${elementInvisible};
  }
  input {
    border: none;
    outline: 0;
    font-style: italic;
    width: 320px;
  }

  button[type="submit"] {
    background: none;
    border: none;
    outline: 0;
    font-weight: bold;
  }
`;

class Subscription extends Component {
  state = {
    email: ""
  };

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <SubscriptionSection>
        <h3>Recevez la newsletter GreenLeaders</h3>
        <SubscriptionForm
          action="https://greenleaders.us17.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="109be744972e90bbe54281a5f" />
          <input type="hidden" name="id" value="c22b58201d" />
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="MERGE0"
            id="MERGE0"
            size="25"
            value={this.state.email}
            onChange={this.handleChange}
            target="_blank"
            placeholder="Entrez votre email"
          />
          <button type="submit" name="subscribe" id="mc-embedded-subscribe">
            S'inscrire
          </button>
        </SubscriptionForm>
      </SubscriptionSection>
    );
  }
}

export default Subscription;
