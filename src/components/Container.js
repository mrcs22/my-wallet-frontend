import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 95vw;
  max-width: 326px;
  min-width: 225px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: ${({ notCentered }) => (notCentered ? "start" : "center")};
  align-items: center;
`;

export default Container;
