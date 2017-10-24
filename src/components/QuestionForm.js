import React, { Component } from "react";
import Link, { navigateTo } from "gatsby-link";
import styled from "styled-components";
import Modal from "./Modal";
import Button from "./Button";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";
import colors from "../utils/colors";
import globals from "../utils/globals";

const Field = styled.label`
  display: block;
  margin-bottom: ${globals.spaces.base};
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
  state = {
    prenom: "",
    nom: "",
    email: "",
    magasin: "",
    message: "",
    provenance: this.props.title
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    navigateTo("/merci");
  };

  render() {
    return (
      <form
        name="question"
        onSubmit={this.handleSubmit}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <Field>
          <Label>Votre prénom</Label>
          <Input
            type="text"
            name="prenom"
            value={this.state.prenom}
            onChange={this.handleInputChange}
          />
        </Field>
        <Field>
          <Label>Votre nom </Label>
          <Input
            type="text"
            name="nom"
            value={this.state.nom}
            onChange={this.handleInputChange}
          />
        </Field>
        <Field>
          <Label>Votre email</Label>
          <Input
            required
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </Field>
        <Field>
          <Label>Votre magasin</Label>
          <Input
            type="text"
            name="magasin"
            value={this.state.magasin}
            onChange={this.handleInputChange}
          />
        </Field>
        <Field>
          <Label>Votre message</Label>
          <Textarea
            id="message"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </Field>
        <input type="hidden" name="provenance" value={this.state.title} />
        <Button send large type="submit">
          Envoyer
          <Icon icon="send" />
        </Button>
      </form>
    );
  }
}

const QuestionFormSection = styled.section`
  border-top: 1px solid ${colors.grey.light};
  padding: ${globals.spaces.large};
  text-align: center;
`;

const ButtonWithIcon = props => (
  <Button large {...props}>
    Posez une question
    <Icon icon="questionMark" />
  </Button>
);

class QuestionWrapper extends Component {
  renderFull = () => {
    return (
      <QuestionFormSection>
        <SectionTitle center>une question ?</SectionTitle>
        <p>
          Vous avez une interrogation sur les produits ou sur les thématiques
          GreenLeaders ? <br /> N’hésitez pas et posez la !
        </p>
        <ButtonWithIcon onClick={this.props.onClick} />
      </QuestionFormSection>
    );
  };

  renderLight = () => {
    return <ButtonWithIcon onClick={this.props.onClick} />;
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
