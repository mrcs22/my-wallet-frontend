import { useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import NotransactionsText from "./NoTransactionsText";

export default function TransactionsViewer({ token }) {
  const [transactions, setTransaction] = useState([]);

  return (
    <TransactionsContainer>
      {transactions.length === 0 ? <NotransactionsText /> : ""}
    </TransactionsContainer>
  );
}

const TransactionsContainer = styled(Container)`
  height: calc(100vh - 221px);

  background-color: #fff;
  border-radius: 5px;
`;
