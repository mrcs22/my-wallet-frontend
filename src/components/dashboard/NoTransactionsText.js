import styled from "styled-components";

export default function NotransactionsText() {
  return <Text>Não há registros de entrada ou saída</Text>;
}

const Text = styled.p`
  font-size: 20px;
  color: #868686;
  text-align: center;

  margin: 0 73px;
`;
