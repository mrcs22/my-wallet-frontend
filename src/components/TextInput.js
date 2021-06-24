import styled from "styled-components";

const TextInput = styled.input`
  height: 58px;
  width: 100%;

  font-size: 20px;

  background-color: #fff;

  border-radius: 5px;
  border: none;

  margin-bottom: 13px;

  padding: 0 15px;

  &::placeholder {
    color: #000;
  }
`;

export default TextInput;
