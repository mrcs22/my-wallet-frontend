import React, { useState } from "react";
import Header from "./Header";
import Container from "../Container";
import TextInput from "../TextInput";
import InputsHolder from "../InputsHolder";
import Button from "../Button";
import { useHistory } from "react-router-dom";

import axios from "axios";

export default function NewOut({ token }) {
  const history = useHistory();
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container notCentered>
      <Header />
      <InputsHolder onSubmit={trySendOut}>
        <TextInput
          type="number"
          placeholder="Valor"
          required
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <TextInput
          type="text"
          placeholder="Descrição"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Button type="submit" value="Salvar entrada" />
      </InputsHolder>
    </Container>
  );

  function trySendOut(e) {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.post(
      "http://localhost:4000/transactions",
      {
        description,
        value,
        type: "out",
      },
      config
    );

    promise.then((res) => {
      history.push("/dashboard");
    });

    promise.catch((err) => {
      if (err.response?.status === 400) {
        alert("Descrição e/ou valor inválidos");
        clearInputs();
      } else {
        alert("Erro inesperado. Tente novamente.");
        clearInputs();
      }
    });
  }

  function clearInputs() {
    setDescription("");
    setValue("");
  }
}
