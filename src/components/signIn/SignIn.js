import React from "react";
import Logo from "../Logo";
import Container from "../Container";
import TextInput from "../TextInput";
import InputsHolder from "../InputsHolder";
import Button from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignIn() {
  const trySignIn = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Logo />
      <InputsHolder onSubmit={trySignIn}>
        <TextInput type="email" placeholder="E-mail" required />
        <TextInput type="password" placeholder="Senha" required />
        <Button type="submit" value="Entrar" />
      </InputsHolder>
      <LinkToSignUp />
    </Container>
  );
}

const LinkToSignUp = () => {
  return <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>;
};

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 15px;
  color: #fff;
`;
