import styled from "styled-components";
import { secondaryColor } from "_theme_/colors";

export const HeaderContainer = styled.div`
  background: ${`#${secondaryColor}`};
  height: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  & div {
    margin: 10px;
  }
`;
