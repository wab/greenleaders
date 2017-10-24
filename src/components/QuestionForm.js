import React, { Component } from "react";
import Link, { navigateTo } from "gatsby-link";
import styled from "styled-components";
import Modal from "./Modal";
import Button from "./Button";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";
import colors from "../utils/colors";
import globals from "../utils/globals";
import { elementInvisible } from "../utils/mixins";

const Field = styled.label`
  display: block;
  margin-bottom: ${globals.spaces.base};

  ${props => props.hidden && elementInvisible};
`;

const Label = styled.div`
  color: ${colors.white};
  opacity: 0.5;
  display: block;
  font-family: ${globals.fonts.alt};
  font-weight: 300;
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  color: ${colors.white};
  border: none;
  outline: 0;
  padding: ${globals.spaces.xsmall};
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  font-size: ${globals.sizes.medium};
  transition: border-color ${globals.transition.duration}
    ${globals.transition.function};

  &:focus {
    border-bottom-color: rgba(255, 255, 255, 0.8);
  }
`;

const Textarea = Input.extend`
  min-height: 10rem;
`;

class Form extends Component {
  render() {
    return (
      <div>
        <form
          name="question"
          action="/merci/"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Input type="hidden" name="form-name" value="question" />
          <Input type="hidden" name="provenance" value={this.props.title} />
          <Field>
            <Label>Votre prénom</Label>
            <Input type="text" name="prenom" />
          </Field>
          <Field>
            <Label>Votre nom </Label>
            <Input type="text" name="nom" />
          </Field>
          <Field>
            <Label>Votre email</Label>
            <Input required type="email" name="email" />
          </Field>
          <Field>
            <Label>Votre magasin</Label>
            <Input type="text" name="magasin" />
          </Field>
          <Field>
            <Label>Votre message</Label>
            <Textarea id="message" name="message" />
          </Field>
          <Field hidden>
            <Input name="bot-field" />
          </Field>
          <Button send large type="submit">
            Envoyer
            <Icon icon="send" />
          </Button>
        </form>
      </div>
    );
  }
}

const QuestionFormSection = styled.section`
  border-top: 1px solid ${colors.grey.light};
  padding: ${globals.spaces.large};
  text-align: center;
`;

class QuestionWrapper extends Component {
  renderFull = () => {
    return (
      <QuestionFormSection>
        <SectionTitle center>une question ?</SectionTitle>
        <p>
          Vous avez une interrogation sur les produits ou sur les thématiques
          GreenLeaders ? <br /> N’hésitez pas et posez la !
        </p>
        <Button large onClick={this.props.onClick}>
          Posez une question
          <Icon icon="questionMark" />
        </Button>
      </QuestionFormSection>
    );
  };

  renderLight = () => {
    return (
      <Button large onClick={this.props.onClick}>
        Posez une question
        <Icon icon="questionMark" />
      </Button>
    );
  };

  render() {
    return this.props.light ? this.renderLight() : this.renderFull();
  }
}

class QuestionForm extends Component {
  state = {
    isopen: false
  };
  openModal = () => {
    this.setState({ isopen: true });
  };

  closeModal = () => {
    this.setState({ isopen: false });
  };

  render() {
    return (
      <div>
        <QuestionWrapper light={this.props.light} onClick={this.openModal} />
        <Modal isOpen={this.state.isopen} onClose={this.closeModal}>
          <Form title={this.props.title} />
        </Modal>
      </div>
    );
  }
}

export default QuestionForm;
