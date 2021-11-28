import styled from "styled-components";
import { grayColor } from "_theme_/colors";

export const HomeHeroContainer = styled.div`
  background-image: url("/static/background-apartment.jpg");
  height: 91vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const HomeHeroBackground = styled.div`
  background-color: ${`#${grayColor}77`};
  width: 100%;
  height: 100%;
`;
