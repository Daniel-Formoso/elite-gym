import { useInView } from 'react-intersection-observer';

const useInViewHook = (threshold = 0.01) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });


  return { ref, inView };
};

export default useInViewHook;
