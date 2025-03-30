import styled, { createGlobalStyle } from "styled-components";

export const sizes = {
  tablet: "768px",
  desktop: "1200px",
  desktopLarge: "1440px",
  desktopUltraLarge: "1920px",
};

export const media = {
  tablet: `(min-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopLarge: `(min-width: ${sizes.desktopLarge})`,
  desktopUltraLarge: `(min-width: ${sizes.desktopUltraLarge})`,
};

export const MyGlobalStyles = createGlobalStyle`
 :root {
    --ageo: "Ageo", sans-serif;
    --roboto: "Roboto", sans-serif;
    --montserrat: "Montserrat", sans-serif;
}
 
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
    background-color: #f5f5f5;
    scroll-behavior: smooth;
  }
`;

export const Interface = styled.div`
  margin: 0 4%;

  @media ${media.desktop} {
    margin: 0 15%;
  }

  @media ${media.desktopLarge} {
    margin: 0 20%;
  }

  @media ${media.desktopUltraLarge} {
    margin: 0 25%;
  }
`;

export const InterfaceSwiper = styled.div`
  margin: 0 4%;

  @media ${media.desktop} {
    margin: 0 15%;
  }

  @media ${media.desktopLarge} {
    margin: 0 10%;
  }

  @media ${media.desktopUltraLarge} {
    margin: 0 15%;
  }
`;
