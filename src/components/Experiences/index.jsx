import useInViewHook from "../../hook/useInViewHook";
import { MotionTitleSection, MotionSubtitleSection } from "../AboutUs/styles";
import { ContainerPaddingTop } from "./styles";

const Experiences = () => {
  const { ref, inView } = useInViewHook();

  return (
    <>
      <ContainerPaddingTop id="experiences">
        <MotionTitleSection
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Experiências Reais
        </MotionTitleSection>
        <MotionSubtitleSection
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span>Histórias reais</span> de superação que motivam cada treino.{" "}
        </MotionSubtitleSection>
      </ContainerPaddingTop>
    </>
  );
};

export default Experiences;
