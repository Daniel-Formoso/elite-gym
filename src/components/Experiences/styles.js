import styled from "styled-components";
import { media } from "../../styles/globalStyles";

export const ContainerPaddingTop = styled.div`
  margin-top: 120px;

  @media ${media.tablet} {
    margin-top: 160px;
  }

  @media ${media.desktop} {
    margin-top: 180px;
  }
`;
