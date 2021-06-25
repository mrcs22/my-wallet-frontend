import styled from "styled-components";

export default function Transaction({ date, description, value, type }) {
  const transactionDay = date.split("-")[2];
  const transactionMonth = date.split("-")[1];

  const formattedDate = `${transactionDay}/${transactionMonth}`;

  return (
    <TransactionContainer type={type}>
      <div>
        <p>{formattedDate}</p>
        <div>{description}</div>
      </div>
      <p>{value}</p>
    </TransactionContainer>
  );
}

const TransactionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
  width: 100%;

  margin-bottom: 20px;

  & > div {
    width: 100%;
    display: flex;
    font-size: 16px;
    color: #000;

    overflow: hidden;

    & > div {
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      color: #c6c6c6;
      margin-right: 10px;
    }
  }

  & > p {
    color: ${({ type }) => (type === "in" ? "#03ac00" : "#c70000")};
  }
`;
