import styled from "styled-components";
import { media } from "../../styles/globalStyles";

export const ContainerPaddingTop = styled.div`
  padding-top: 100px;

  @media ${media.tablet} {
    padding-top: 140px;
  }

  @media ${media.desktop} {
    padding-top: 200px;
  }
  
`;
