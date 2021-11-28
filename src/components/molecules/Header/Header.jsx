import React from "react";
import { HeaderContainer, ButtonsContainer } from "./Header.styles";
import BrandIcon from "_icons_/brandIcon";
import Button from "_atoms_/Button/Button";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="">
          <BrandIcon />
        </div>
        <ButtonsContainer>
          <Button text="Comprar" variant="secondary" />
          <Button text="Cotizar" variant="primary" />
        </ButtonsContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
