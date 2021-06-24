import React, { useState } from "react";
import Logo from "../Logo";
import Container from "../Container";
import TextInput from "../TextInput";
import InputsHolder from "../InputsHolder";
import Button from "../Button";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function SignUp() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  return (
    <Container>
      <Logo />
      <InputsHolder onSubmit={trySignUp}>
        <TextInput
          type="text"
          placeholder="Nome"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextInput
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextInput
          type="password"
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <TextInput
          type="password"
          placeholder="Confirme a senha"
          required
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <Button type="submit" value="Cadastrar" />
      </InputsHolder>
      <LinkToSignIn />
    </Container>
  );

  function trySignUp(e) {
    e.preventDefault();

    if (password !== passwordVerify) {
      alert("Senha e confirmação de senha devem ser idênticas");
      return;
    }

    const promise = axios.post("http://localhost:4000/sign-up", {
      name,
      email,
      password,
    });

    promise.then(() => {
      history.push("/");
    });

    promise.catch((err) => {
      if (err.response.status === 409) {
        alert("email já cadastrado");
        clearInputs();
      } else if (err.response.status === 400) {
        alert("Preencha os dados corretamente");
      } else {
        alert("Erro inesperado. Tente novamente");
        clearInputs();
      }
    });
  }

  function clearInputs() {
    setName("");
    setPassword("");
    setPasswordVerify("");
    setEmail("");
  }
}

const LinkToSignIn = () => {
  return <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>;
};

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 15px;
  color: #fff;
`;
