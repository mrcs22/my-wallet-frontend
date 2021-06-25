import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Container from "../Container";
import NotransactionsText from "./NoTransactionsText";
import Transaction from "./Transaction";
import formatValue from "../../helpers/formatValue";
import logOut from "../../helpers/logOut";

export default function TransactionsViewer({ token }) {
  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get("http://localhost:4000/transactions", config);

    promise.then((res) => {
      setTransactions(res.data.transactions);
      setTotal(res.data.total);
    });

    promise.catch((err) => {
      if (err.response.status === 401) {
        alert("Sua sessão expirou. Faça login novamente");
        logOut(history);
      }
    });
  }, []);

  return (
    <TransactionsContainer total={total}>
      {transactions.length === 0 ? (
        <NotransactionsText />
      ) : (
        <>
          <div>
            {transactions.map((t) => {
              return (
                <Transaction
                  key={t.id}
                  date={t.date}
                  description={t.description}
                  value={formatValue(t.value)}
                  type={t.type}
                />
              );
            })}
          </div>
          <p>
            <span>Saldo</span> <span>{formatValue(total)}</span>
          </p>
        </>
      )}
    </TransactionsContainer>
  );
}

const TransactionsContainer = styled(Container)`
  height: calc(100vh - 221px);
  min-height: 200px;
  justify-content: space-between;

  background-color: #fff;
  border-radius: 5px;

  padding: 25px 12px;
  padding-bottom: 10px;

  & > div {
    height: calc(100% - 20px);
    width: 100%;
    overflow: scroll;
  }

  & > p {
    display: flex;
    width: 100%;
    justify-content: space-between;

    font-size: 17px;

    span:first-child {
      font-weight: 700;
      color: #000;
    }

    span:last-child {
      color: ${({ total }) => (total > 0 ? "#03AC00" : "#C70000")};
    }
  }
`;
