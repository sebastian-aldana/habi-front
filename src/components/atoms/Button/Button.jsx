import React from "react";
import { ButtonStyled } from "./Button.styles";

const Button = ({ type, text, variant }) => {
  return (
    <>
      <ButtonStyled type={type || text} variant={variant}>
        <p>{`${text || "default text"}`}</p>
      </ButtonStyled>
    </>
  );
};

export default Button;
