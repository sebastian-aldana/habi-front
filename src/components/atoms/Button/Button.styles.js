import styled from "styled-components";
import { grayColor, primaryColor, secondaryColor } from "_theme_/colors";

export const ButtonStyled = styled.div`
  color: ${(props) => {
    if (props.variant === "primary") {
      return `#${grayColor}`;
    } else if (props.variant === "secondary") {
      return `#${primaryColor}`;
    } else {
      return `black`;
    }
  }};
  background-color: ${(props) => {
    if (props.variant === "primary") {
      return `#${primaryColor}`;
    } else if (props.variant === "secondary") {
      return `#${grayColor}`;
    } else {
      return `white`;
    }
  }};
  width: 150px;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  & p {
    margin: 0;
  }
`;
