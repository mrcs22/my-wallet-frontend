import Container from "../Container";
import Header from "./Header";
import TransactionsViewer from "./TransactionsViewer";
import Menu from "./Menu";
import { useHistory } from "react-router-dom";
export default function Dashboard() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("userData"));

  if (!user) {
    history.push("/");
    return null;
  }

  return (
    <Container notCentered>
      <Header userName={user?.name} token={user.token} />
      <TransactionsViewer token={user?.token} />
      <Menu />
    </Container>
  );
}
