import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  console.log(user);

  return <></>;
}
