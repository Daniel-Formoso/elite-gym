import styled from "styled-components";
import { motion } from "motion/react";
import { media } from "../../styles/globalStyles";

export const ContainerGeral = styled.section`
  margin-top: 150px;
  padding-top: 140px;

  @media ${media.desktop} {
    padding-top: 200px;
  }

  @media ${media.desktopUltraLarge} {
    padding-top: 200px;
  }
`;

export const TitleSection = styled.h1`
  font-size: 14px;
  font-family: var(--ageo);
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 5px;
`;

export const MotionTitleSection = motion(TitleSection);

export const SubtitleSection = styled.h1`
  font-size: 45px;
  font-family: var(--ageo);
  font-weight: 800;
  margin-top: 10px;

  & > span {
    color: #ffcc00;
  }
`;

export const MotionSubtitleSection = motion(SubtitleSection);

export const ContainerTextVideo = styled.div`
  @media ${media.desktop} {
    margin: 40px 0;
    display: grid;
    grid-template-columns: 60% 40%;
    column-gap: 50px;
  }
`;

export const MotionContainerTextVideo = motion(ContainerTextVideo);

export const TextAboutUs = styled.p`
  font-size: 18px;
  line-height: 30px;
  font-family: var(--roboto);
  margin: 40px 0;
  display: flex;
  flex-direction: column;

  @media ${media.desktop} {
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 60px
}
`;

export const TextAbout = styled.div``;

export const MotionTextAbout = motion(TextAbout);

export const ListDifferences = styled.div`
  margin-top: 30px;

  & > ul {
    list-style: none;
  }

  & > ul li.titleDifferences {
    font-size: 25px;
    font-family: var(--ageo);
    font-weight: 800;
    margin-bottom: 10px;
  }

  & > ul li.titleDifferences span {
    color: #ffcc00;
  }

  & > ul li {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media ${media.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media ${media.desktop} {
    flex-direction: column;

    & > ul {
      width: 100%;
    }
  }
`;

export const MotionListDifferences = motion(ListDifferences);

export const ButtonAboutUs = styled.button`
  margin-top: 20px;
  height: 40px;
  width: 200px;
  outline: 0;
  border: none;
  background-color: #ffcc00;
  border-radius: 20px;
  font-family: var(--montserrat);
  font-size: 15px;
  cursor: pointer;
  transition: 0.5s ease;

  & > a {
    color: black;
    text-decoration: none;
    display: block;
    padding: 7px 0;
    border-radius: 20px;
  }

  @media ${media.desktop} {
    &:hover {
      background-color: rgba(255, 204, 0, 0.36);
    }
  }
`;

export const VideoAboutUs = styled.div`
  & > video {
    width: 100%;
    border-radius: 20px;
  }

  & > video.vertical-video {
    display: none;
  }

  @media ${media.tablet} {
    padding: 0 10%;
  }

  @media ${media.desktop} {
    padding: 0;

    & > video.vertical-video {
      display: block;
      height: 650px;
    }

    & > video.horizontal-video {
      display: none;
    }

    & > video {
      transition: box-shadow 0.3s ease;
    }

    & > video:hover {
      box-shadow: rgba(255, 204, 0, 0.56) 0px 22px 70px 4px;
    }
  }
`;

export const MotionVideoAboutUs = motion(VideoAboutUs);
