import styled from "styled-components";

export default function Header({ userName }) {
  return (
    <HeaderContainer>
      <p>Nova saída</p>
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
