import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Container from "../Container";
import Header from "./Header";
import TransactionsViewer from "./TransactionsViewer";
import Menu from "./Menu";
export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <Container notCentered>
      <Header userName={user?.name} />
      <TransactionsViewer token={user?.token} />
      <Menu />
    </Container>
  );
}
