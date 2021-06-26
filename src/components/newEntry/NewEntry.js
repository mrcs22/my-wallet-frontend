import React, { useState } from "react";
import Header from "./Header";
import Container from "../Container";
import TextInput from "../TextInput";
import InputsHolder from "../InputsHolder";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import formatValue from "../../helpers/formatValue";
import logOut from "../../helpers/logOut";

export default function NewEntry({ token }) {
  const history = useHistory();
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <Container notCentered>
      <Header />
      <InputsHolder onSubmit={trySendEntry}>
        <TextInput
          type="text"
          placeholder="Valor"
          required
          onChange={(e) => {
            setValue(formatEventData(e));
          }}
          value={formatValue(value)}
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

  function trySendEntry(e) {
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
        type: "in",
      },
      config
    );

    promise.then((res) => {
      history.push("/dashboard");
    });

    promise.catch((err) => {
      if (err.response?.status === 401) {
        alert("Sua sessão expirou. Faça login novamente");
        logOut(history);
      } else if (err.response?.status === 400) {
        alert("Descrição e/ou valor inválidos");
        clearInputs();
      } else {
        alert("Erro inesperado");
        clearInputs();
        logOut(history);
      }
    });
  }

  function clearInputs() {
    setDescription("");
    setValue("");
  }

  function formatEventData(e) {
    const lastAlphanumericKey = e?.nativeEvent?.data;

    return lastAlphanumericKey === null
      ? parseInt(e.target.value.replace(",", ""))
      : /^[0-9]$/.test(lastAlphanumericKey)
      ? parseInt(e.target.value.replace(",", ""))
      : parseInt(
          e.target.value.replace(",", "").replace(lastAlphanumericKey, "")
        );
  }
}
