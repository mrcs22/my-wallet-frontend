import { Link } from "react-router-dom";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import styled from "styled-components";

export default function Menu() {
  return (
    <MenuContainer>
      <Option>
        <AiOutlinePlusCircle />
        Nova <br /> Entrada
      </Option>
      <Option>
        <AiOutlineMinusCircle />
        Nova <br />
        saída
      </Option>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 143px;
  width: 100%;

  margin-top: 13px;
`;

const Option = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 114px;
  width: 155px;

  font-size: 17px;
  font-weight: 700;
  color: #fff;

  background-color: #a328d6;

  border-radius: 5px;
  padding: 10px;

  svg {
    width: 22px;
    height: 22px;
  }
`;
