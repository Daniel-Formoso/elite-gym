import { useInView } from "react-intersection-observer";

const useInViewHook = () => {
  // const isMobile = window.innerWidth <= 820;
  // const threshold = isMobile ? 0.01 : 0.3;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return { ref, inView };
};

export default useInViewHook;

// import { useInView } from "react-intersection-observer";

// const useInViewHook = () => {
//   const isMobile = window.innerWidth <= 820;
//   const threshold = isMobile ? 0.2 : 0.5;

//   const { ref, inView } = useInView({
//     threshold,
//   });

//   return { ref, inView };
// };

// export default useInViewHook;
