import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import logOut from "../../helpers/logOut";

export default function Header({ userName, token }) {
  const history = useHistory();
  return (
    <HeaderContainer>
      <p>Olá, {userName}</p>
      <RiLogoutBoxRLine onClick={() => logOut(history, token)} />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  width: 100%;

  font-size: 26px;
  font-weight: 700;
  color: #fff;

  svg {
    width: 24px;
    height: 24px;
  }
`;
