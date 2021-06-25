import React, { useContext, useEffect, useState } from "react";
import Logo from "../Logo";
import Container from "../Container";
import TextInput from "../TextInput";
import InputsHolder from "../InputsHolder";
import Button from "../Button";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function SignIn() {
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    if (userData) {
      setUser(userData);
      history.push("/dashboard");
      return null;
    }
  }, []);

  return (
    <Container>
      <Logo />
      <InputsHolder onSubmit={trySignIn}>
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
        <Button type="submit" value="Entrar" />
      </InputsHolder>
      <LinkToSignUp />
    </Container>
  );

  function trySignIn(e) {
    e.preventDefault();

    const promise = axios.post("http://localhost:4000/sign-in", {
      email,
      password,
    });

    promise.then((res) => {
      setUser(res.data);
      localStorage.setItem("userData", JSON.stringify(res.data));
      history.push("/dashboard");
    });

    promise.catch((err) => {
      if (err.response?.status === 400) {
        alert("Email e/ou senha incorretos");
        clearInputs();
      } else {
        alert("Erro inesperado. Tente novamente.");
        clearInputs();
      }
    });
  }

  function clearInputs() {
    setPassword("");
    setEmail("");
  }
}

const LinkToSignUp = () => {
  return <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>;
};

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 15px;
  color: #fff;
`;
