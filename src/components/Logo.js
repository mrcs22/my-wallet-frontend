import styled from "styled-components";

const LogoText = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  color: #fff;
`;

export default function Logo() {
  return <LogoText>MyWallet</LogoText>;
}
