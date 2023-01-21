import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HalfMoon = ({ handleClick }) => {
  const moonRef = useRef();
  useEffect(() => {
    gsap.from(moonRef.current, {
      rotation: '90deg',
      ease: 'elastic.out(1, 0.4)',
      duration: 2.1,
    });
  }, []);
  const handleAnimtion = () => {
    gsap.to(moonRef.current, {
      rotation: '90deg',
      ease: 'expo.out',
      duration: 0.2,
    });
    setTimeout(() => {
      handleClick();
    }, 100);
  };
  return (
    <svg
      onClick={handleAnimtion}
      width='24'
      height='24'
      stroke-width='1.5'
      viewBox='0 0 24 24'
      fill='white'
      ref={moonRef}>
      <path
        d='M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
export default HalfMoon;
